import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserVideos.css";

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all videos and set current and recommended
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => {
        const found = data.find(v => v._id === id);
        setVideo(found);
        setRecommended(data.filter(v => v._id !== id).slice(0, 6));
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="uservideos-loading">Loading...</div>;
  if (!video) return <div className="uservideos-novideos">Video not found.</div>;

  return (
    <div className="uservideos-player-layout">
      <div className="uservideos-player-main">
        <video
          src={video.videoUrl}
          controls
          autoPlay
          className="uservideos-player-video"
          style={{ width: "100%", borderRadius: 8, background: "#f2f6fa" }}
        />
        <h2>{video.title}</h2>
        <div className="uservideos-channel-row">
          <div className="uservideos-channel-avatar">
            {video.author ? video.author[0] : "?"}
          </div>
          <div className="uservideos-channel-info">
            <span className="uservideos-channel-name">{video.author || "Unknown Author"}</span>
          </div>
        </div>
        <p style={{marginTop: 18}}>{video.description}</p>
        <button className="uservideos-back-btn" onClick={() => navigate("/videos")}>Back to Videos</button>
      </div>
      <div className="uservideos-player-recommend">
        <h3>Recommended</h3>
        <div className="uservideos-yt-recommend-list">
          {recommended.length === 0 ? (
            <div className="uservideos-novideos">No recommended videos found.</div>
          ) : (
            recommended.map(rec => (
              <div key={rec._id} className="uservideos-yt-recommend-card" onClick={() => navigate(`/videos/${rec._id}`)}>
                <video
                  src={rec.videoUrl}
                  className="uservideos-yt-thumb"
                  muted
                  preload="metadata"
                  style={{width: 128, height: 72, borderRadius: 7, background: '#222'}}
                />
                <div className="uservideos-yt-info">
                  <span className="uservideos-yt-title">{rec.title}</span>
                  <span className="uservideos-yt-channel">{rec.author || "Unknown Author"}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
