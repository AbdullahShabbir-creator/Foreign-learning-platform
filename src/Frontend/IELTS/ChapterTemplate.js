import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/animations.css";
import { handleScrollAnimation, handleScrollProgress, initializeDarkMode, toggleDarkMode } from "../utils/animationUtils";

const ChapterTemplate = ({ 
  chapterNumber, 
  title, 
  content, 
  hasNextChapter = true 
}) => {
  // Calculate the next chapter number
  const nextChapterNumber = chapterNumber + 1;
  
  useEffect(() => {
    // Initialize animations when component mounts
    const cleanupScrollAnimation = handleScrollAnimation();
    const cleanupScrollProgress = handleScrollProgress();
    initializeDarkMode();
    
    // Clean up event listeners when component unmounts
    return () => {
      cleanupScrollAnimation();
      cleanupScrollProgress();
    };
  }, []);

  return (
    <div className="chapter-wrapper animate-fade-in">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      
      {/* Chapter Header */}
      <div className="chapter-header mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center animate-slide-right">
            <div className="chapter-number-badge">{chapterNumber}</div>
            <h2 className="display-5 ms-3 mb-0 text-gradient">{title || `Chapter ${chapterNumber}`}</h2>
          </div>
          <button 
            className="btn btn-sm btn-outline-dark rounded-circle animate-float" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <i className="bi bi-moon-stars"></i>
          </button>
        </div>
        <div className="progress mt-3 animate-grow-width" style={{ height: "4px" }}>
          <div 
            className="progress-bar bg-primary" 
            role="progressbar" 
            style={{ width: `${(chapterNumber / 10) * 100}%` }} 
            aria-valuenow={(chapterNumber / 10) * 100} 
            aria-valuemin="0" 
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="chapter-content animate-fade-in-up">
        <div className="chapter-body">
          {content}
        </div>
        
        {/* Navigation Buttons */}
        <div className="d-flex justify-content-between mt-5 pt-4 border-top animate-slide-up">
          {chapterNumber > 1 ? (
            <Link 
              to={`/ielts/chapter${chapterNumber - 1}`} 
              className="btn btn-outline-primary btn-lg rounded-pill shadow-sm animate-on-hover"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Previous Chapter
            </Link>
          ) : (
            <Link 
              to="/ielts" 
              className="btn btn-outline-secondary btn-lg rounded-pill shadow-sm animate-on-hover"
            >
              <i className="bi bi-house-door me-2"></i>
              Course Home
            </Link>
          )}
          
          {hasNextChapter && (
            <Link 
              to={`/ielts/chapter${nextChapterNumber}`} 
              className="btn btn-primary btn-lg rounded-pill shadow-sm animate-on-hover"
            >
              Next Chapter
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          )}
        </div>
        
        {/* Chapter Footer */}
        <div className="chapter-footer text-center mt-5 pt-4 border-top text-muted animate-fade-in">
          <p>
            <i className="bi bi-book me-2"></i>
            IELTS Course - Chapter {chapterNumber} of 10
          </p>
          <div className="chapter-dots">
            {[...Array(10)].map((_, i) => (
              <Link 
                key={i} 
                to={`/ielts/chapter${i + 1}`} 
                className={`chapter-dot ${i + 1 === chapterNumber ? 'active' : ''}`}
                aria-label={`Go to Chapter ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="floating-action-button animate-pulse">
        <button 
          className="btn btn-primary rounded-circle shadow-lg" 
          style={{ width: "60px", height: "60px" }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="bi bi-arrow-up-short fs-3"></i>
        </button>
      </div>
    </div>
  );
};

export default ChapterTemplate;
