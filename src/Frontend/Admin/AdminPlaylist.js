import React, { useEffect, useState } from "react";
import { Trash2, Play, Calendar, User, Video } from "lucide-react";

const AdminAllPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedPlaylist, setExpandedPlaylist] = useState(null);

  const fetchPlaylists = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/courses/playlists/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        setPlaylists(data);
      } else {
        setError(data.message || "Failed to fetch playlists.");
      }
    } catch (err) {
      console.error("Error fetching playlists:", err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const handleDelete = async (playlistId) => {
    if (!window.confirm("Are you sure you want to delete this playlist?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/courses/playlists/${playlistId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        alert("Playlist deleted successfully");
        setPlaylists(playlists.filter(p => p._id !== playlistId));
      } else {
        alert(data.message || "Failed to delete playlist");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Server error while deleting playlist.");
    }
  };

  const togglePlaylistExpansion = (playlistId) => {
    setExpandedPlaylist(expandedPlaylist === playlistId ? null : playlistId);
  };

  const openVideo = (videoUrl) => {
    window.open(`http://localhost:5000${videoUrl}`, "_blank");
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        color: '#4361ee',
        fontSize: '18px',
        fontWeight: '500'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            border: '3px solid #e9ecef',
            borderTop: '3px solid #4361ee',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          Loading playlists...
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        color: '#f43f5e',
        fontSize: '18px',
        fontWeight: '500',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '12px',
        margin: '20px',
        padding: '40px'
      }}>
        {error}
      </div>
    );
  }

  if (playlists.length === 0) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        color: '#6c757d',
        fontSize: '18px',
        fontWeight: '500'
      }}>
        <Video size={64} style={{ marginBottom: '16px', opacity: 0.5 }} />
        No playlists found.
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#212529', marginBottom: '8px' }}>
            All Playlists
          </h1>
          <p style={{ fontSize: '16px', color: '#6c757d' }}>
            Manage and view all course playlists
          </p>
        </div>

        <div style={{
          display: 'grid',
          gap: '24px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
        }}>
          {playlists.map((playlist) => (
            <div key={playlist._id} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e9ecef',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#212529',
                    marginRight: '12px'
                  }}>
                    {playlist.title}
                  </h3>
                  <button
                    onClick={() => handleDelete(playlist._id)}
                    style={{
                      backgroundColor: '#f43f5e',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '16px',
                  marginBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6c757d', fontSize: '14px' }}>
                    <User size={14} /> {playlist.instructor?.name || playlist.instructor?._id || playlist.instructor}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6c757d', fontSize: '14px' }}>
                    <Calendar size={14} /> {new Date(playlist.createdAt).toLocaleDateString()}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4361ee', fontSize: '14px', fontWeight: '500' }}>
                    <Video size={14} /> {playlist.videos.length} video{playlist.videos.length !== 1 ? 's' : ''}
                  </div>
                </div>

                <button
                  onClick={() => togglePlaylistExpansion(playlist._id)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#4361ee',
                    border: '1px solid #4361ee',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    width: '100%'
                  }}
                >
                  {expandedPlaylist === playlist._id ? 'Hide Videos' : 'Show Videos'}
                </button>
              </div>

              {expandedPlaylist === playlist._id && (
                <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '20px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#212529', marginBottom: '16px' }}>
                    Videos in this playlist:
                  </h4>
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {playlist.videos.map((video, index) => (
                      <div key={video._id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '8px',
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef'
                      }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{
                              backgroundColor: '#4361ee',
                              color: 'white',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: '600'
                            }}>{index + 1}</span>
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#212529' }}>
                              {video.videoTitle}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => openVideo(video.videoUrl)}
                          style={{
                            backgroundColor: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}
                        >
                          <Play size={12} /> Play
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAllPlaylists;
