import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './UserVideos.css';

const FIXED_CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'IELTS', label: 'IELTS' },
  { value: 'German', label: 'German' },
  { value: 'Chinese', label: 'Chinese' },
];

const UserVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => {
        setVideos(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (search.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const lower = search.toLowerCase();
    // Suggest video titles and categories starting with the search string
    const titleSuggestions = videos
      .map(v => v.title)
      .filter(title => title.toLowerCase().startsWith(lower));
    const categorySuggestions = FIXED_CATEGORIES
      .filter(cat => cat.value !== 'all')
      .map(cat => cat.label)
      .filter(label => label.toLowerCase().startsWith(lower));
    // Remove duplicates and limit to 7 suggestions
    const unique = Array.from(new Set([...titleSuggestions, ...categorySuggestions])).slice(0, 7);
    setSuggestions(unique);
    setShowSuggestions(unique.length > 0);
  }, [search, videos]);

  // Hide suggestions if clicked outside
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSuggestionClick = (s) => {
    setSearch(s);
    setShowSuggestions(false);
  };

  const handleVideoClick = (video) => {
    navigate(`/videos/${video._id}`);
  };

  if (loading) return <div className="uservideos-loading">Loading...</div>;

  const categories = FIXED_CATEGORIES;

  const filteredVideos = videos.filter(video => {
    const matchesSearch =
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      (video.description && video.description.toLowerCase().includes(search.toLowerCase()));
    const videoCategory = (video.language || video.category || '').toLowerCase();
    const selectedCategory = category.toLowerCase();
    const matchesCategory = category === "all" || videoCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedVideos = {};
  FIXED_CATEGORIES.filter(cat => cat.value !== 'all').forEach(cat => {
    groupedVideos[cat.label] = filteredVideos.filter(
      video => (video.language || video.category || '').toLowerCase() === cat.value.toLowerCase()
    );
  });

  const recommended = [...filteredVideos].slice(-3);

  return (
    <div className="uservideos-root">
      <div className="uservideos-searchbar" ref={searchRef}>
        <input
          type="text"
          placeholder="Search videos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="uservideos-input"
          onFocus={() => setShowSuggestions(suggestions.length > 0)}
          autoComplete="off"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="uservideos-select"
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
        {showSuggestions && suggestions.length > 0 && (
          <ul className="uservideos-suggestions">
            {suggestions.map((sug, idx) => (
              <li key={idx} onClick={() => handleSuggestionClick(sug)}>{sug}</li>
            ))}
          </ul>
        )}
      </div>
      <h2 className="uservideos-title">All Videos</h2>
      {category === 'all' ? (
        FIXED_CATEGORIES.filter(cat => cat.value !== 'all').map(cat => (
          groupedVideos[cat.label] && groupedVideos[cat.label].length > 0 && (
            <div key={cat.value} className="uservideos-category-block">
              <h3 className="uservideos-category-title">{cat.label}</h3>
              <div className="uservideos-row">
                {groupedVideos[cat.label].map(video => (
                  <div key={video._id} className="uservideos-card" onClick={() => handleVideoClick(video)}>
                    <h4 className="uservideos-video-title">{video.title}</h4>
                    <video width="100%" controls className="uservideos-video">
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="uservideos-description">{video.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        ))
      ) : (
        filteredVideos.length === 0 ? (
          <div className="uservideos-novideos">No videos found.</div>
        ) : (
          <div className="uservideos-category-block">
            <h3 className="uservideos-category-title">{categories.find(c => c.value === category)?.label}</h3>
            <div className="uservideos-row">
              {filteredVideos.map(video => (
                <div key={video._id} className="uservideos-card" onClick={() => handleVideoClick(video)}>
                  <h4 className="uservideos-video-title">{video.title}</h4>
                  <video width="100%" controls className="uservideos-video">
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="uservideos-description">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      <h2 className="uservideos-title">Recommended</h2>
      <div className="uservideos-row">
        {recommended.length === 0 ? (
          <div className="uservideos-novideos">No recommended videos found.</div>
        ) : (
          recommended.map(video => (
            <div key={video._id} className="uservideos-card" onClick={() => handleVideoClick(video)}>
              <h4 className="uservideos-video-title">{video.title}</h4>
              <video width="100%" controls className="uservideos-video">
                <source src={video.videoUrl} type="video/mp4" />
              </video>
              <p className="uservideos-description">{video.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserVideos;
