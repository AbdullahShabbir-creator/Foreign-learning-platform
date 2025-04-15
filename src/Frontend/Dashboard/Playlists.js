import React, { useEffect, useState } from "react";
import './Playlists.css';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [saving, setSaving] = useState(false);

  // Fetch playlists and courses on mount
  useEffect(() => {
    fetchPlaylists();
    fetchCourses();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/courses/playlists", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setPlaylists(data);
    } catch {}
  };

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/courses/instructor", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setCourses(data);
    } catch {}
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setCreating(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/courses/playlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: playlistTitle }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Playlist created!");
        setPlaylistTitle("");
        fetchPlaylists();
      } else {
        setError(data.message || "Failed to create playlist");
      }
    } catch {
      setError("Server error.");
    }
    setCreating(false);
  };

  const handleSelectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
    setSelectedVideos(playlist.videos.map(v => v.videoUrl));
    setSuccess("");
    setError("");
  };

  const handleVideoCheck = (videoUrl) => {
    setSelectedVideos((prev) =>
      prev.includes(videoUrl)
        ? prev.filter((v) => v !== videoUrl)
        : [...prev, videoUrl]
    );
  };

  const handleSaveVideos = async () => {
    setSaving(true);
    setError("");
    setSuccess("");
    // Gather all instructor videos and filter by selected
    const allVideos = [];
    courses.forEach((course) => {
      allVideos.push({
        courseId: course._id,
        videoUrl: course.videoUrl,
        videoTitle: course.title,
      });
      if (course.lectures && Array.isArray(course.lectures)) {
        course.lectures.forEach((lec) => {
          allVideos.push({
            courseId: course._id,
            videoUrl: lec.videoUrl,
            videoTitle: lec.title,
          });
        });
      }
    });
    const videosToSave = allVideos.filter((v) => selectedVideos.includes(v.videoUrl));
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/courses/playlists/${selectedPlaylist._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ videos: videosToSave }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Playlist updated!");
        fetchPlaylists();
      } else {
        setError(data.message || "Failed to update playlist");
      }
    } catch {
      setError("Server error.");
    }
    setSaving(false);
  };

  const handleDeletePlaylist = async (playlistId) => {
    if (!window.confirm('Are you sure you want to delete this playlist?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/courses/playlists/${playlistId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setPlaylists(playlists.filter(pl => pl._id !== playlistId));
        setSelectedPlaylist(selectedPlaylist && selectedPlaylist._id === playlistId ? null : selectedPlaylist);
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to delete playlist');
      }
    } catch {
      alert('Server error. Try again later.');
    }
  };

  return (
    <div className="playlists-container">
      <h2 className="playlists-title">Playlists</h2>
      <form className="playlist-create-form" onSubmit={handleCreatePlaylist}>
        <input
          className="playlist-title-input"
          type="text"
          value={playlistTitle}
          onChange={(e) => setPlaylistTitle(e.target.value)}
          placeholder="Enter new playlist title"
          required
        />
        <button className="playlist-create-btn" type="submit" disabled={creating}>Create Playlist</button>
      </form>
      {success && <p className="playlist-success">{success}</p>}
      {error && <p className="playlist-error">{error}</p>}
      <div className="playlist-list-section">
        <h4>Your Playlists</h4>
        <ul className="playlist-list">
          {playlists.map((pl) => (
            <li key={pl._id} style={{display:'flex',alignItems:'center',gap:10}}>
              <button
                className={`playlist-list-item${selectedPlaylist && selectedPlaylist._id === pl._id ? ' selected' : ''}`}
                onClick={() => handleSelectPlaylist(pl)}
              >
                <i className="bi bi-play-circle me-1"></i>{pl.title}
              </button>
              <button className="playlist-delete-btn" title="Delete Playlist" onClick={() => handleDeletePlaylist(pl._id)}>
                <i className="bi bi-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedPlaylist && (
        <div className="playlist-edit-section">
          <div className="playlist-edit-header">
            <h4>Edit Playlist: <span className="playlist-edit-title">{selectedPlaylist.title}</span></h4>
            <button className="playlist-close-btn" onClick={() => setSelectedPlaylist(null)} title="Close">×</button>
          </div>
          <div className="playlist-videos-select">
            <p className="playlist-select-instructions">Select videos to include in this playlist:</p>
            <div className="playlist-videos-grid">
              {courses.map((course) => (
                <div key={course._id} className="playlist-course-block">
                  <div className="playlist-course-title">{course.title}</div>
                  <div className="playlist-course-videos">
                    <label className="playlist-video-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedVideos.includes(course.videoUrl)}
                        onChange={() => handleVideoCheck(course.videoUrl)}
                      />
                      <span className="playlist-video-label">Main Video</span>
                      <video width="110" controls className="playlist-video-thumb">
                        <source src={course.videoUrl} type="video/mp4" />
                      </video>
                    </label>
                    {course.lectures && Array.isArray(course.lectures) && course.lectures.map((lec) => (
                      <label key={lec.videoUrl} className="playlist-video-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedVideos.includes(lec.videoUrl)}
                          onChange={() => handleVideoCheck(lec.videoUrl)}
                        />
                        <span className="playlist-video-label">{lec.title}</span>
                        <video width="110" controls className="playlist-video-thumb">
                          <source src={lec.videoUrl} type="video/mp4" />
                        </video>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="playlist-save-btn" onClick={handleSaveVideos} disabled={saving}>Save Playlist</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlists;
