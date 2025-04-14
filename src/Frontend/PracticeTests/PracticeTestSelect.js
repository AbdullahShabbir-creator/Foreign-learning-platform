import React, { useState } from "react";
import "../../App.css";
import "../../index.css";

const PracticeTestSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showLanguageTests, setShowLanguageTests] = useState(false);

  const languages = [
    {
      id: 1,
      name: "IELTS",
      icon: "bi bi-globe2",
      description: "International English Language Testing System"
    },
    {
      id: 2,
      name: "German",
      icon: "bi bi-flag-germany",
      description: "German Language Proficiency Test"
    },
    {
      id: 3,
      name: "Chinese",
      icon: "bi bi-flag-china",
      description: "Chinese Language Proficiency Test"
    }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguageTests(true);
  };

  const getLanguageTests = () => {
    switch (selectedLanguage) {
      case "IELTS":
        return [
          { id: 1, name: "Listening Test", path: "/practice-tests/ielts/listening" },
          { id: 2, name: "Reading Test", path: "/practice-tests/ielts/reading" },
          { id: 3, name: "Writing Test", path: "/practice-tests/ielts/writing" },
          { id: 4, name: "Speaking Test", path: "/practice-tests/ielts/speaking" }
        ];
      case "German":
        return [
          { id: 1, name: "Listening Test", path: "/practice-tests/german/listening" },
          { id: 2, name: "Reading Test", path: "/practice-tests/german/reading" },
          { id: 3, name: "Writing Test", path: "/practice-tests/german/writing" },
          { id: 4, name: "Speaking Test", path: "/practice-tests/german/speaking" }
        ];
      case "Chinese":
        return [
          { id: 1, name: "Listening Test", path: "/practice-tests/chinese/listening" },
          { id: 2, name: "Reading Test", path: "/practice-tests/chinese/reading" },
          { id: 3, name: "Writing Test", path: "/practice-tests/chinese/writing" },
          { id: 4, name: "Speaking Test", path: "/practice-tests/chinese/speaking" }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="practice-test-select-container">
      <div className="container py-5">
        <h1 className="text-center mb-5 heading-underline">选择练习测试</h1>
        
        {!showLanguageTests ? (
          <div className="language-select-grid">
            {languages.map((lang) => (
              <div 
                key={lang.id} 
                className="language-card animate-fade-in"
                onClick={() => handleLanguageSelect(lang.name)}
                style={{ cursor: "pointer" }}
              >
                <div className="language-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                  <i className={`bi ${lang.icon} fs-3`} />
                </div>
                <h3 className="mb-2">{lang.name}</h3>
                <p className="text-muted">{lang.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="language-tests-container">
            <div className="back-button mb-4">
              <button 
                className="btn btn-outline-primary"
                onClick={() => {
                  setSelectedLanguage(null);
                  setShowLanguageTests(false);
                }}
              >
                <i className="bi bi-arrow-left me-2"></i>返回
              </button>
            </div>
            
            <h2 className="mb-4">{selectedLanguage} 练习测试</h2>
            
            <div className="tests-grid">
              {getLanguageTests().map((test) => (
                <div key={test.id} className="test-card animate-fade-in">
                  <h4 className="mb-2">{test.name}</h4>
                  <button 
                    className="btn btn-primary w-100"
                    onClick={() => window.location.href = test.path}
                  >
                    开始测试
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeTestSelect;
