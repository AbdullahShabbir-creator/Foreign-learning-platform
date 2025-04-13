import React from "react";
import { Link, Outlet } from "react-router-dom"; 
import './IeltsPage.css'; 

// Import all chapter components
import IELTSChapter1 from './Chapters/Chapter1';
import IELTSChapter2 from './Chapters/Chapter2';
import IELTSChapter3 from './Chapters/Chapter3';
import IELTSChapter4 from './Chapters/Chapter4';
import IELTSChapter5 from './Chapters/Chapter5';
import IELTSChapter6 from './Chapters/Chapter6';
import IELTSChapter7 from './Chapters/Chapter7';
import IELTSChapter8 from './Chapters/Chapter8';
import IELTSChapter9 from './Chapters/Chapter9';
import IELTSChapter10 from './Chapters/Chapter10';

const IeltsPage = () => {
  const chapters = Array.from({ length: 10 }, (_, i) => `Chapter ${i + 1}`);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-md-3 ielts-sidebar">
          <h4 className="text-primary mb-3">Chapters</h4>
          <ul className="list-group">
            {chapters.map((chapter, index) => (
              <li key={index} className="list-group-item border-0">
                <Link to={`/ielts/chapter${index + 1}`} className="text-dark">
                  {chapter}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 ielts-content">
          <div className="p-4">
            <h1 className="text-center text-primary mb-4">Learn IELTS</h1>
            <p className="lead text-center mb-4">Welcome to our comprehensive IELTS preparation course. Select a chapter to begin your learning journey.</p>
            
            {/* Outlet for rendering chapter content */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeltsPage;
