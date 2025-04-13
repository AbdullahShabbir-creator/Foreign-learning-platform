import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import '../styles/main.css';
import './ChinesePage.css';

const ChinesePage = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const chapters = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-md-3 chinese-sidebar">
          <h4 className="text-primary mb-3">Chinese Chapters</h4>
          <ul className="list-group">
            {chapters.map((chapter) => (
              <li 
                key={chapter} 
                className={`list-group-item border-0 ${currentPath.includes(`/chinese/chapter${chapter}`) ? 'active' : ''}`}
              >
                <Link 
                  to={`/chinese/chapter${chapter}`} 
                  className={`text-decoration-none ${currentPath.includes(`/chinese/chapter${chapter}`) ? 'text-primary fw-bold' : 'text-dark'}`}
                >
                  Chapter {chapter}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 chinese-content">
          <div className="p-4">
            {!currentPath.includes('/chapter') && (
              <>
                <h1 className="text-center text-primary mb-4">Learn Chinese</h1>
                <p className="lead text-center mb-4">Welcome to our comprehensive Chinese language course. Select a chapter from the sidebar to begin your learning journey.</p>
              </>
            )}
            
            {/* Outlet for rendering chapter content */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinesePage;
