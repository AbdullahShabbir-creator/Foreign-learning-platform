import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import "./UserVideos.css";

const FIXED_CATEGORIES = [
  { value: "all", label: "All Categories" },
  { value: "IELTS", label: "IELTS" },
  { value: "German", label: "German" },
  { value: "Chinese", label: "Chinese" },
];

const UserVideos = () => {
  const [viewMode, setViewMode] = useState("courses");
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(5);

  const searchRef = useRef();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchData();
  }, [viewMode]);

  const fetchData = async () => {
    setLoading(true);
    if (viewMode === "courses") {
      const res = await fetch("http://localhost:5000/api/courses");
      const data = await res.json();
      setVideos(data);
    } else {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/courses/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data)
      setPlaylists(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (search.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const lower = search.toLowerCase();
    const titleSuggestions =
      viewMode === "courses"
        ? videos.map(v => v.title).filter(title => title.toLowerCase().startsWith(lower))
        : playlists.map(p => p.title).filter(title => title.toLowerCase().startsWith(lower));

    const categorySuggestions = FIXED_CATEGORIES
      .filter(cat => cat.value !== "all")
      .map(cat => cat.label)
      .filter(label => label.toLowerCase().startsWith(lower));

    const unique = Array.from(new Set([...titleSuggestions, ...categorySuggestions])).slice(0, 7);
    setSuggestions(unique);
    setShowSuggestions(unique.length > 0);
  }, [search, videos, playlists, viewMode]);

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSuggestionClick = (s) => {
    setSearch(s);
    setShowSuggestions(false);
  };

  const handleReportClick = (video) => {
    console.log(video)
    const videoPath = video.videoUrl.startsWith("/uploads/") ? video.videoUrl : null;
    const courseId = video._id;
    navigate("/report-video", { state: { videoPath, courseId } });
  };

  const handleFeedbackClick = (video) => {
    setSelectedCourse(video);
    setFeedbackText("");
    setFeedbackRating(5);
    setShowFeedbackModal(true);
  };

  const submitFeedback = async () => {
    if (!isAuthenticated) {
      alert("You must be logged in to give feedback");
      return;
    }

    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        courseId: selectedCourse._id,
        comment: feedbackText,
        rating: feedbackRating
      })
    });

    const data = await res.json();
    if (res.ok) {
      alert("Feedback submitted successfully!");
      setShowFeedbackModal(false);
    } else {
      alert(data.message || "Failed to submit feedback");
    }
  };

  const filteredCourses = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      (video.description && video.description.toLowerCase().includes(search.toLowerCase()));
    const videoCategory = (video.language || video.category || "").toLowerCase();
    const matchesCategory = category === "all" || videoCategory === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="out">
    <div className="uservideos-root" style={{overflowY:'auto !important' }}>
      <div className="uservideos-toggle">
        <button className={viewMode === "courses" ? "active" : ""} onClick={() => setViewMode("courses")}>Courses</button>
        <button className={viewMode === "playlists" ? "active" : ""} onClick={() => setViewMode("playlists")}>Playlists</button>
      </div>

      <div className="uservideos-searchbar" ref={searchRef}>
        <input
          type="text"
          placeholder={`Search ${viewMode}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="uservideos-input"
          onFocus={() => setShowSuggestions(suggestions.length > 0)}
          autoComplete="off"
        />
        {viewMode === "courses" && (
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="uservideos-select">
            {FIXED_CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        )}
        {showSuggestions && (
          <ul className="uservideos-suggestions">
            {suggestions.map((s, idx) => (
              <li key={idx} onClick={() => handleSuggestionClick(s)}>{s}</li>
            ))}
          </ul>
        )}
      </div>

      {loading ? (
        <div className="uservideos-loading">Loading...</div>
      ) : viewMode === "courses" ? (
        filteredCourses.length === 0 ? (
          <div className="uservideos-novideos">No courses found.</div>
        ) : (
          <div className="uservideos-grid">
            {filteredCourses.map((video) => (
              <div key={video._id} className="uservideos-card">
                <h4>{video.title}</h4>
                <video width="100%" controls>
                  <source
                    src={
                      video.videoUrl.startsWith("/uploads/")
                        ? `http://localhost:5000${video.videoUrl}`
                        : video.videoUrl
                    }
                    type="video/mp4"
                  />
                </video>
                <p>{video.description}</p>
                <button onClick={() => handleReportClick(video)}>🚩 Report</button>
                <button onClick={() => handleFeedbackClick(video)}>💬 Feedback</button>
              </div>
            ))}
          </div>
        )
      ) : filteredPlaylists.length === 0 ? (
        <div className="uservideos-novideos">No playlists found.</div>
      ) : (
        <div className="uservideos-grid">
          {filteredPlaylists.map((playlist) => (
            <div key={playlist._id} className="uservideos-card">
              <h4>{playlist.title}</h4>
              <ul className="playlist-videos-list">
                {playlist.videos.map((vid) => (
                  <li key={vid._id}>
                    {vid.videoTitle}
                    <button
                      onClick={() =>
                        window.open(`http://localhost:5000${vid.videoUrl}`, "_blank")
                      }
                    >
                      ▶ Open
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {showFeedbackModal && (
        <div className="feedback-modal">
          <div className="feedback-modal-content">
            <h3>Give Feedback for {selectedCourse?.title}</h3>
            <textarea
              rows="4"
              placeholder="Write your feedback..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
            <div>
              <label>Rating: </label>
              <select value={feedbackRating} onChange={(e) => setFeedbackRating(Number(e.target.value))}>
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
                ))}
              </select>
            </div>
            <button onClick={submitFeedback}>Submit</button>
            <button onClick={() => setShowFeedbackModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default UserVideos;
