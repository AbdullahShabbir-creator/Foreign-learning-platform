import React, { useEffect, useState } from "react";

const MyCourses = ({ showPlaylists }) => {
  const [courses, setCourses] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const [coursesRes, playlistsRes] = await Promise.all([
          fetch("http://localhost:5000/api/courses/instructor", { headers: { Authorization: `Bearer ${token}` } }),
          showPlaylists ? fetch("http://localhost:5000/api/courses/playlists", { headers: { Authorization: `Bearer ${token}` } }) : Promise.resolve({ ok: false })
        ]);
        const coursesData = await coursesRes.json();
        const playlistsData = showPlaylists && playlistsRes.ok ? await playlistsRes.json() : [];
        if (coursesRes.ok) setCourses(coursesData);
        else setError(coursesData.message || "Failed to fetch courses");
        if (showPlaylists && playlistsRes.ok) setPlaylists(playlistsData);
      } catch {
        setError("Server error. Try again later.");
      }
      setLoading(false);
    };
    fetchData();
  }, [showPlaylists]);

  const handleDeleteCourse = async (courseId) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setCourses(courses.filter(c => c._id !== courseId));
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to delete course');
      }
    } catch {
      alert('Server error. Try again later.');
    }
  };

  return (
    <div className="my-courses-container">
     
      {loading && <p>Loading...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      {showPlaylists && playlists.length > 0 && (
        <div className="my-playlists-preview">
          <h3>My Playlists</h3>
          <ul>
            {playlists.map(pl => (
              <li key={pl._id} style={{marginBottom: 24, paddingBottom: 10, borderBottom: '1px solid #e3e9f3'}}>
                <b style={{fontSize: '1.13rem', color: '#007bff'}}>{pl.title}</b>
                {pl.videos && pl.videos.length > 0 && (
                  <ul style={{marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '24px'}}>
                    {pl.videos.map((vid, idx) => (
                      <li key={vid.videoUrl} style={{marginLeft: 0, background: '#f8fafc', borderRadius: 8, padding: '10px 12px', minWidth: 170, boxShadow: '0 1px 4px rgba(0,0,0,0.04)'}}>
                        <span style={{display: 'block', fontWeight: 500, marginBottom: 10, color: '#444'}}>{vid.videoTitle}</span>
                        <video width="120" controls style={{display: 'block', borderRadius: 4, border: '1px solid #d1e3f7', background: '#f5f8fa'}}>
                          <source src={vid.videoUrl} type="video/mp4" />
                        </video>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!loading && !error && (
        <table className="my-courses-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Language</th>
              <th>Video</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          <h2>My Uploaded Courses</h2>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.title}</td>
                <td>{course.language}</td>
                <td>
                  <video width="200" controls>
                    <source src={course.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </td>
                <td>
                  <button className="course-delete-btn" onClick={() => handleDeleteCourse(course._id)} title="Delete Course">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyCourses;
