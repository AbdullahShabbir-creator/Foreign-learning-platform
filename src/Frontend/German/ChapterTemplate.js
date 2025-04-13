import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChapterTemplate.css";
import "../styles/animations.css";

const ChapterTemplate = ({ children, content, chapterNumber, title, totalChapters = 10, hasNextChapter = true }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Navigation functions
  const navigateToChapter = (chapter) => {
    navigate(`/german/chapter${chapter}`);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Initialize animations
  useEffect(() => {
    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    // Update progress bar on scroll
    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);
      const progressBar = document.querySelector(".progress-bar");
      if (progressBar) {
        progressBar.style.width = scrollPercentRounded + "%";
      }
    };

    // Add event listeners
    window.addEventListener("scroll", animateOnScroll);
    window.addEventListener("scroll", updateProgressBar);
    animateOnScroll();
    updateProgressBar();

    // Check for dark mode preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }

    // Clean up
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return (
    <div className={`chapter-template-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

      {/* Sidebar */}
      <nav className="chapter-sidebar animate-on-scroll">
        <div className="chapter-sidebar-header">
          <h4 className="text-gradient mb-4">German Course</h4>
          <div className="chapter-progress">
            <div className="progress-bar-wrapper">
              <div
                className="progress-bar"
                style={{ width: `${(chapterNumber / totalChapters) * 100}%` }}
              />
            </div>
            <small className="text-muted">
              Chapter {chapterNumber} of {totalChapters}
            </small>
          </div>
        </div>

        <div className="chapter-links">
          {Array.from({ length: totalChapters }, (_, i) => i + 1).map((chapter) => (
            <button
              key={chapter}
              className={`chapter-link ${chapter === chapterNumber ? "active" : ""}`}
              onClick={() => navigateToChapter(chapter)}
            >
              <span className="chapter-number">{chapter}</span>
              <span className="chapter-title">Chapter {chapter}</span>
              {chapter === chapterNumber && (
                <i className="bi bi-check-lg text-success ms-auto"></i>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="chapter-content">
        <div className="chapter-wrapper animate-fade-in">
          {/* Chapter Header */}
          <div className="chapter-header mb-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center animate-slide-right">
                <div className="chapter-number-badge">{chapterNumber}</div>
                <h2 className="display-5 ms-3 mb-0 text-gradient">{title || `German - Chapter ${chapterNumber}`}</h2>
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
                style={{ width: `${(chapterNumber / totalChapters) * 100}%` }}
                aria-valuenow={(chapterNumber / totalChapters) * 100}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          {/* Chapter Content */}
          <div className="chapter-body animate-on-scroll">
            {content || children}
          </div>

          {/* Chapter Navigation */}
          <div className="chapter-footer mt-5">
            <div className="chapter-dots">
              {Array.from({ length: totalChapters }, (_, i) => i + 1).map((chapter) => (
                <span
                  key={chapter}
                  className={`chapter-dot ${chapter === chapterNumber ? "active" : ""}`}
                  onClick={() => navigateToChapter(chapter)}
                />
              ))}
            </div>

            <div className="chapter-navigation mt-4">
              {chapterNumber > 1 && (
                <button
                  className="btn btn-outline-primary me-2 animate-slide-right"
                  onClick={() => navigateToChapter(chapterNumber - 1)}
                >
                  <i className="bi bi-arrow-left me-1"></i> Previous
                </button>
              )}
              {hasNextChapter && chapterNumber < totalChapters && (
                <button
                  className="btn btn-primary animate-slide-left"
                  onClick={() => navigateToChapter(chapterNumber + 1)}
                >
                  Next <i className="bi bi-arrow-right ms-1"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChapterTemplate;
