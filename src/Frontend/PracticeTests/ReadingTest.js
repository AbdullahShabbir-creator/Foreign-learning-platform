import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/animations.css";

const ReadingTest = () => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [hasStarted, setHasStarted] = useState(false);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start timer when user begins the test
  useEffect(() => {
    let timer;
    if (hasStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Auto-submit when time runs out
      alert("Time's up! Your answers have been submitted.");
    }

    return () => clearInterval(timer);
  }, [hasStarted, timeLeft]);

  // Sample reading passages
  const passages = [
    {
      id: 1,
      title: "The Impact of Technology on Modern Education",
      text: `The rapid advancement of technology has revolutionized numerous aspects of our lives, including the way we approach education. Traditional classrooms with blackboards and textbooks are increasingly being supplemented, if not replaced, by digital learning tools and online platforms. This shift has accelerated dramatically in recent years, particularly following the global pandemic that forced educational institutions worldwide to adopt remote learning methods.

Digital tools now allow for personalized learning experiences tailored to individual students' needs and learning paces. Adaptive learning software can identify areas where students struggle and provide targeted exercises to strengthen those specific skills. Virtual reality (VR) and augmented reality (AR) technologies create immersive learning environments that can make abstract concepts more tangible and engaging. For instance, history students can virtually "walk through" ancient civilizations, while chemistry students can manipulate molecular structures in three dimensions.

Furthermore, the internet has democratized access to information. Students from diverse socioeconomic backgrounds can access vast repositories of knowledge that were previously available only to those with access to well-stocked libraries. Massive Open Online Courses (MOOCs) offered by prestigious universities allow learners from around the world to access high-quality educational content without the need for physical presence or prohibitive tuition fees.

Collaborative tools have also transformed how students interact and work together. Cloud-based platforms enable real-time collaboration on projects, fostering teamwork and communication skills that are highly valued in today's workforce. Discussion forums and social learning platforms provide spaces for students to share ideas, ask questions, and learn from each other's perspectives.

However, the technological transformation of education is not without challenges. The "digital divide" – the gap between those who have ready access to technology and those who do not – threatens to exacerbate existing educational inequalities. Some students lack reliable internet connections or adequate devices, potentially leaving them behind in increasingly digital learning environments. Additionally, concerns about screen time, digital distractions, and online privacy present ongoing issues that educational systems must address.

The role of teachers is also evolving in this technology-enhanced landscape. Rather than serving primarily as purveyors of information, educators increasingly function as guides who help students navigate the overwhelming sea of available information, discerning credible sources and making meaningful connections between concepts. Professional development is crucial to ensure that teachers can effectively integrate technology into their pedagogical approaches.

Looking ahead, emerging technologies like artificial intelligence promise to further personalize and enhance educational experiences. AI tutors could provide one-on-one assistance at scale, while learning analytics might offer unprecedented insights into how students learn most effectively. Blockchain technology could revolutionize credentialing, allowing for more granular recognition of skills acquired through various learning experiences.

The most effective educational approaches will likely combine the best aspects of traditional and technology-enhanced methods. The human connection and mentorship provided by dedicated teachers remain irreplaceable, while thoughtfully implemented technology can expand opportunities and enhance engagement. As we navigate this transformative period in education, maintaining focus on equitable access and pedagogical effectiveness rather than technology for its own sake will be essential to ensuring that advancements truly benefit all learners.`,
      questions: [
        {
          question: "According to the passage, what has accelerated the shift toward digital learning tools?",
          options: [
            "Reduced cost of technology",
            "The global pandemic",
            "Government mandates",
            "Student preferences"
          ],
          correctAnswer: 1
        },
        {
          question: "How do adaptive learning software systems help students?",
          options: [
            "By replacing traditional teachers",
            "By creating immersive virtual reality experiences",
            "By identifying struggle areas and providing targeted exercises",
            "By connecting students to tutors online"
          ],
          correctAnswer: 2
        },
        {
          question: "What is mentioned as a benefit of the internet for education?",
          options: [
            "It eliminates the need for teachers",
            "It democratizes access to information",
            "It reduces the cost of building physical schools",
            "It makes textbooks obsolete"
          ],
          correctAnswer: 1
        },
        {
          question: "What challenge is mentioned regarding the technological transformation of education?",
          options: [
            "Increasing cost of technology",
            "Resistance from traditional educators",
            "The 'digital divide'",
            "Reduced social interaction among students"
          ],
          correctAnswer: 2
        },
        {
          question: "How is the role of teachers evolving according to the passage?",
          options: [
            "Teachers are becoming less important",
            "Teachers are focusing more on technical skills",
            "Teachers are functioning more as guides through information",
            "Teachers are creating more digital content"
          ],
          correctAnswer: 2
        },
        {
          question: "Which technology does the passage suggest could revolutionize credentialing?",
          options: [
            "Virtual reality",
            "Artificial intelligence",
            "Blockchain technology",
            "Cloud computing"
          ],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 2,
      title: "Marine Bioluminescence: Nature's Light Show",
      text: `Beneath the ocean's surface, far from human observation, an enchanting phenomenon occurs: marine bioluminescence, the production and emission of light by living organisms in the sea. This captivating natural light show results from a chemical reaction where the compound luciferin reacts with oxygen, catalyzed by the enzyme luciferase, producing light with minimal heat generation - a process called "cold light."

Bioluminescence serves diverse functions across marine species. For some, it acts as a defense mechanism; when threatened, certain creatures release glowing clouds of bioluminescent chemicals to distract or temporarily blind predators. The deep-sea squid can even detach its luminescent arm, which continues to glow as it escapes. Conversely, predators like the anglerfish use bioluminescence as a lure, dangling a light-emitting appendage to attract unsuspecting prey.

Communication represents another critical function of this biological light. Some species use specific patterns of flashing lights to attract mates or coordinate group behaviors. The flashlight fish, for instance, can control the bacteria-filled light organs beneath their eyes, creating a distinct communication signal to others of their kind. This ability to "speak" through light patterns becomes particularly valuable in the ocean depths where visibility is severely limited.

Perhaps the most common producers of bioluminescence are dinoflagellates, single-celled organisms that create the "phosphorescent" effect sometimes visible when waves break on beaches at night or when boats cut through tropical waters. These microscopic creatures emit light when disturbed, possibly as a "burglar alarm" strategy - their flash might attract larger predators that would eat whatever is disturbing them.

The geographic distribution of bioluminescence reveals fascinating patterns. While the phenomenon occurs throughout the world's oceans, it proves especially prevalent in the deep sea, where over 90% of organisms possess this capability. This prevalence is unsurprising considering that below 200 meters, sunlight becomes negligible, making bioluminescence an invaluable tool for survival in this perpetual darkness.

Beyond its natural functions, bioluminescence has provided valuable scientific applications. Researchers have harnessed bioluminescent proteins, particularly Green Fluorescent Protein (GFP) discovered in jellyfish, as biological markers to track protein expression and cellular processes otherwise invisible to the human eye. These applications have revolutionized fields ranging from cancer research to neuroscience, earning the scientists who developed GFP-based applications the Nobel Prize in Chemistry in 2008.

Emerging studies also suggest potential medical and environmental applications. Certain bioluminescent compounds show promise in developing sophisticated drug delivery systems and imaging techniques. Additionally, bioluminescent organisms might serve as sensitive bioindicators of ocean health, as their presence or absence often correlates with specific environmental conditions.

As climate change and ocean acidification continue to alter marine ecosystems, scientists are monitoring how these changes might affect bioluminescent species. Some research indicates that warming ocean temperatures could influence the distribution and abundance of bioluminescent organisms, potentially altering the prevalence of this natural light display. Understanding these changes may provide valuable insights into broader ecological shifts occurring within our oceans.

Despite significant scientific advances, much about marine bioluminescence remains unexplored. New bioluminescent species continue to be discovered, particularly in the deep sea, one of Earth's least explored environments. Each discovery not only enhances our understanding of this remarkable phenomenon but also highlights how much of our ocean's biodiversity remains to be discovered and understood.`,
      questions: [
        {
          question: "What chemical compound reacts with oxygen to produce bioluminescence?",
          options: [
            "Luciferase",
            "Luciferin",
            "Green Fluorescent Protein",
            "Phosphorescent"
          ],
          correctAnswer: 1
        },
        {
          question: "Why is bioluminescence referred to as 'cold light'?",
          options: [
            "Because it only occurs in cold water",
            "Because it produces light with minimal heat",
            "Because it appears blue or green in color",
            "Because it's most common in the cold deep sea"
          ],
          correctAnswer: 1
        },
        {
          question: "What percentage of deep-sea organisms possess bioluminescent capabilities according to the passage?",
          options: [
            "Less than 50%",
            "About 75%",
            "Over 90%",
            "100%"
          ],
          correctAnswer: 2
        },
        {
          question: "Which of the following is NOT mentioned as a function of bioluminescence?",
          options: [
            "Defense mechanism",
            "Attracting prey",
            "Navigation during migration",
            "Communication with others of the same species"
          ],
          correctAnswer: 2
        },
        {
          question: "What are dinoflagellates?",
          options: [
            "A type of deep-sea fish",
            "Single-celled organisms",
            "A species of jellyfish",
            "Bioluminescent bacteria"
          ],
          correctAnswer: 1
        },
        {
          question: "Which scientific achievement related to bioluminescence was recognized with a Nobel Prize?",
          options: [
            "Discovery of luciferin",
            "Applications based on Green Fluorescent Protein",
            "Development of bioluminescent drug delivery systems",
            "Using bioluminescent organisms as environmental indicators"
          ],
          correctAnswer: 1
        }
      ]
    }
  ];

  // Handle starting the test
  const handleStart = () => {
    setHasStarted(true);
  };

  // Handle answer selection
  const handleAnswerSelect = (questionIdx, optionIdx) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentPassage * 10 + questionIdx]: optionIdx
    });
  };

  // Navigate to next passage
  const nextPassage = () => {
    if (currentPassage < passages.length - 1) {
      setCurrentPassage(currentPassage + 1);
      // Scroll to top when changing passages
      window.scrollTo(0, 0);
    }
  };

  // Navigate to previous passage
  const prevPassage = () => {
    if (currentPassage > 0) {
      setCurrentPassage(currentPassage - 1);
      // Scroll to top when changing passages
      window.scrollTo(0, 0);
    }
  };

  // Submit test
  const handleSubmit = () => {
    // Calculate score
    let score = 0;
    let totalQuestions = 0;
    
    passages.forEach((passage, passageIdx) => {
      passage.questions.forEach((question, questionIdx) => {
        totalQuestions++;
        const questionKey = passageIdx * 10 + questionIdx;
        if (selectedAnswers[questionKey] === question.correctAnswer) {
          score++;
        }
      });
    });
    
    const percentage = Math.round((score / totalQuestions) * 100);
    alert(`Your score: ${score}/${totalQuestions} (${percentage}%)`);
  };

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">IELTS Reading Practice Test</h1>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-info-circle me-2 text-primary"></i>Test Information</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div>
                      <strong>Duration:</strong> 60 minutes
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-list-ol me-3 text-primary"></i>
                    <div>
                      <strong>Format:</strong> 3 reading passages with 40 questions total
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-journal-text me-3 text-primary"></i>
                    <div>
                      <strong>Passage Difficulty:</strong> Progressively more difficult from passage 1 to passage 3
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div>
                      <strong>Important:</strong> You must manage your time carefully (about 20 minutes per passage)
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold"><i className="bi bi-lightbulb me-2 text-primary"></i>Tips for Success</h5>
                <ul>
                  <li>Skim the passage first to get a general idea of the content</li>
                  <li>Read the questions carefully to understand what information you need to find</li>
                  <li>Underline key words in the questions to help you locate the answers</li>
                  <li>Don't spend too much time on any single question</li>
                  <li>Answer all questions - there's no penalty for incorrect answers</li>
                  <li>Check your spelling when transferring answers to the answer sheet</li>
                </ul>
              </div>
            </div>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleStart}
                style={{
                  borderRadius: "var(--border-radius-full)",
                  padding: "12px 40px",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="bi bi-play-fill me-2"></i>
                Start Practice Test
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="heading-underline m-0">Reading Passage {currentPassage + 1}</h2>
            <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
              <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="row">
            {/* Left side - Reading passage */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="content-wrapper h-100 stagger-item stagger-item-visible">
                <h4 className="fw-bold mb-3">{passages[currentPassage].title}</h4>
                <div className="reading-passage" style={{ lineHeight: "1.8", fontSize: "15px" }}>
                  {passages[currentPassage].text.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right side - Questions */}
            <div className="col-lg-6">
              <div className="content-wrapper stagger-item stagger-item-visible stagger-delay-1">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-question-circle me-2 text-primary"></i>
                  Questions
                </h4>
                
                {passages[currentPassage].questions.map((question, idx) => (
                  <div key={idx} className="question-container mb-4 p-3 border-bottom">
                    <p className="fw-bold mb-2">Question {idx + 1}: {question.question}</p>
                    <div className="ms-3">
                      {question.options.map((option, optIdx) => (
                        <div className="form-check mb-2" key={optIdx}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`question-${currentPassage}-${idx}`}
                            id={`question-${currentPassage}-${idx}-option-${optIdx}`}
                            checked={selectedAnswers[currentPassage * 10 + idx] === optIdx}
                            onChange={() => handleAnswerSelect(idx, optIdx)}
                          />
                          <label 
                            className="form-check-label" 
                            htmlFor={`question-${currentPassage}-${idx}-option-${optIdx}`}
                          >
                            {String.fromCharCode(65 + optIdx)}. {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={prevPassage}
              disabled={currentPassage === 0}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Previous Passage
            </button>
            
            {currentPassage < passages.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={nextPassage}
              >
                Next Passage
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            ) : (
              <button 
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit Test
                <i className="bi bi-check-circle ms-2"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadingTest;
