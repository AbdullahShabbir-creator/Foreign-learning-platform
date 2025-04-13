import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter10 = () => {
  const chapterContent = (
    <>
      <p>Welcome to the final chapter of your IELTS preparation journey! In this chapter, we'll help you understand your IELTS score, interpret your results, and provide guidance on next steps after taking the test.</p>
      
      <h3 className="mt-4">Understanding the IELTS Scoring System</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The IELTS test is scored on a band scale from 1 to 9, with half-band scores (e.g., 6.5) possible. Each of the four skills (Listening, Reading, Writing, and Speaking) receives an individual band score, and these are averaged to provide an Overall Band Score.</p>
          
          <table className="table table-bordered mt-3">
            <thead className="table-light">
              <tr>
                <th>Band Score</th>
                <th>Skill Level</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9</td>
                <td>Expert</td>
                <td>Full operational command; appropriate, accurate and fluent with complete understanding</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Very Good</td>
                <td>Fully operational command with only occasional inaccuracies or misunderstandings</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Good</td>
                <td>Operational command with occasional inaccuracies and misunderstandings</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Competent</td>
                <td>Generally effective command with some inaccuracies and misunderstandings</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Modest</td>
                <td>Partial command with many inaccuracies and misunderstandings</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Limited</td>
                <td>Basic competence limited to familiar situations</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Extremely Limited</td>
                <td>Very limited ability to communicate</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Intermittent</td>
                <td>Great difficulty understanding spoken and written English</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Non-user</td>
                <td>No ability to use the language beyond a few isolated words</td>
              </tr>
              <tr>
                <td>0</td>
                <td>Did not attempt</td>
                <td>No assessable information provided</td>
              </tr>
            </tbody>
          </table>
          
          <div className="alert alert-info mt-3">
            <p><strong>How Overall Band Score Is Calculated:</strong></p>
            <ol>
              <li>Your scores for each section (Listening, Reading, Writing, Speaking) are added together</li>
              <li>The sum is divided by 4</li>
              <li>The result is rounded to the nearest whole or half band</li>
            </ol>
            <p className="mb-0"><strong>Rounding rules:</strong> If the average ends in .25, it is rounded up to the next half band. If it ends in .75, it is rounded up to the next whole band.</p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Interpreting Your Score</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Score Analysis by Skill</h5>
          
          <div className="mt-3">
            <h6><strong>Listening Score</strong></h6>
            <p>Your Listening score reflects your ability to understand main ideas, specific details, implied meanings, opinions, and attitudes in spoken English.</p>
            <ul>
              <li><strong>Band 6+:</strong> You can follow extended speech and complex arguments</li>
              <li><strong>Band 7+:</strong> You can understand detailed technical discussions in your field</li>
              <li><strong>Band 8+:</strong> You have a near-native ability to understand spoken English in various contexts</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <h6><strong>Reading Score</strong></h6>
            <p>Your Reading score indicates your ability to understand written texts, including main ideas, details, implied meanings, and authorial attitudes.</p>
            <ul>
              <li><strong>Band 6+:</strong> You can understand the main ideas in complex texts</li>
              <li><strong>Band 7+:</strong> You can understand detailed arguments and implicit meanings</li>
              <li><strong>Band 8+:</strong> You can understand virtually all reading material, including complex texts and subtle distinctions</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <h6><strong>Writing Score</strong></h6>
            <p>Your Writing score reflects your ability to present information, construct arguments, and use appropriate language and organization.</p>
            <ul>
              <li><strong>Band 6+:</strong> You can write clearly on most subjects with minimal errors</li>
              <li><strong>Band 7+:</strong> You can write complex texts with good organization and few errors</li>
              <li><strong>Band 8+:</strong> You can write sophisticated texts with precision and style</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <h6><strong>Speaking Score</strong></h6>
            <p>Your Speaking score indicates your ability to communicate orally in English, including fluency, vocabulary range, grammatical accuracy, and pronunciation.</p>
            <ul>
              <li><strong>Band 6+:</strong> You can speak at length with some coherence</li>
              <li><strong>Band 7+:</strong> You can speak fluently with good grammatical control</li>
              <li><strong>Band 8+:</strong> You can speak fluently with only occasional errors</li>
            </ul>
          </div>
          
          <div className="alert alert-warning mt-3">
            <p><strong>Important Note on Score Profiles:</strong></p>
            <p>Many test takers have an uneven profile (e.g., stronger in Speaking but weaker in Writing). This is normal! Understanding your strengths and weaknesses helps you focus future study efforts.</p>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Common Score Requirements</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Different organizations have different IELTS score requirements. Here are some common thresholds:</p>
          
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Purpose</th>
                  <th>Typical Minimum Overall Band Score</th>
                  <th>Additional Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>University Undergraduate Programs</td>
                  <td>6.0 - 6.5</td>
                  <td>Often requires no band below 5.5 or 6.0</td>
                </tr>
                <tr>
                  <td>University Postgraduate Programs</td>
                  <td>6.5 - 7.0</td>
                  <td>Often requires no band below 6.0 or 6.5</td>
                </tr>
                <tr>
                  <td>Medical Professionals (UK)</td>
                  <td>7.0 - 7.5</td>
                  <td>Often requires 7.0 in each band</td>
                </tr>
                <tr>
                  <td>Immigration to Australia</td>
                  <td>Varies by visa type</td>
                  <td>Skilled migration often requires 7.0+ overall</td>
                </tr>
                <tr>
                  <td>Immigration to Canada</td>
                  <td>Varies by program</td>
                  <td>Express Entry typically requires CLB 7 (IELTS 6.0-7.5 depending on skill)</td>
                </tr>
                <tr>
                  <td>Immigration to New Zealand</td>
                  <td>6.5+</td>
                  <td>Skilled migration requires overall 6.5+</td>
                </tr>
                <tr>
                  <td>Immigration to UK</td>
                  <td>Varies by visa type</td>
                  <td>Tier 2 visas often require B1 level (IELTS 4.0-5.0)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="alert alert-info mt-3">
            <p><strong>Always check the specific requirements of your target institution or immigration program, as these can change and vary significantly.</strong></p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Next Steps After Receiving Your Score</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>If You Achieved Your Target Score</h5>
          <ol>
            <li><strong>Request Additional Test Report Forms (TRFs)</strong>
              <ul>
                <li>You receive one original TRF, but can request up to five additional copies be sent directly to institutions</li>
                <li>These must be requested within two years of your test date</li>
              </ul>
            </li>
            <li><strong>Verify how long your results are valid</strong>
              <ul>
                <li>Most institutions consider scores valid for 2 years</li>
                <li>Some immigration authorities may have different rules</li>
              </ul>
            </li>
            <li><strong>Continue practicing English</strong>
              <ul>
                <li>Maintain and improve your skills by using English regularly</li>
                <li>Consider taking advanced English courses</li>
              </ul>
            </li>
          </ol>
          
          <h5 className="mt-3">If You Did Not Achieve Your Target Score</h5>
          <ol>
            <li><strong>Analyze your performance</strong>
              <ul>
                <li>Identify which skills and question types gave you the most trouble</li>
                <li>Review your test preparation and approach</li>
              </ul>
            </li>
            <li><strong>Consider a remark (Enquiry on Results)</strong>
              <ul>
                <li>If you believe your score doesn't reflect your ability, you can request a remark</li>
                <li>This must be done within six weeks of your test date</li>
                <li>There is a fee, which is refunded if your score changes</li>
              </ul>
            </li>
            <li><strong>Make a targeted study plan</strong>
              <ul>
                <li>Focus on your weakest areas</li>
                <li>Consider taking preparation courses or getting a tutor</li>
                <li>Use official IELTS practice materials</li>
              </ul>
            </li>
            <li><strong>Retake the test</strong>
              <ul>
                <li>You can take the test as many times as you wish</li>
                <li>There's no mandatory waiting period between tests</li>
                <li>However, significant improvement usually requires at least 4-6 weeks of focused study</li>
              </ul>
            </li>
            <li><strong>Explore alternatives</strong>
              <ul>
                <li>Some institutions accept alternative English tests (TOEFL, PTE, etc.)</li>
                <li>Some universities offer conditional acceptance with additional language support</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <h3 className="mt-4">Improving Your English Beyond IELTS</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>Continuing Your English Learning Journey</h5>
          <p>IELTS is not the end of your language learning journey, but rather a milestone. Here are ways to continue improving your English:</p>
          
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-light">For Academic Purposes</div>
                <div className="card-body">
                  <ul>
                    <li>Take academic English courses at universities</li>
                    <li>Join academic writing workshops</li>
                    <li>Read academic journals in your field</li>
                    <li>Attend lectures and seminars in English</li>
                    <li>Participate in academic discussions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-light">For Professional Purposes</div>
                <div className="card-body">
                  <ul>
                    <li>Take business English courses</li>
                    <li>Learn industry-specific terminology</li>
                    <li>Practice workplace communication</li>
                    <li>Join professional organizations with English activities</li>
                    <li>Attend conferences and networking events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-light">For Everyday Communication</div>
                <div className="card-body">
                  <ul>
                    <li>Join language exchange meetups</li>
                    <li>Find conversation partners</li>
                    <li>Watch movies and TV shows in English</li>
                    <li>Listen to podcasts and radio programs</li>
                    <li>Read books and articles for pleasure</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-light">Digital Resources</div>
                <div className="card-body">
                  <ul>
                    <li>Use language learning apps (Duolingo, Babbel, etc.)</li>
                    <li>Take online courses (Coursera, edX, etc.)</li>
                    <li>Join online forums and communities</li>
                    <li>Follow English teachers on social media</li>
                    <li>Use voice assistants to practice speaking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-success mt-4">
        <h4>Congratulations!</h4>
        <p>You've completed all ten chapters of our IELTS preparation course! Here's a quick recap of what you've learned:</p>
        <ul>
          <li><strong>Chapter 1:</strong> Introduction to the IELTS Exam</li>
          <li><strong>Chapter 2:</strong> Listening Skills</li>
          <li><strong>Chapter 3:</strong> Reading Skills</li>
          <li><strong>Chapter 4:</strong> Writing Skills</li>
          <li><strong>Chapter 5:</strong> Speaking Skills</li>
          <li><strong>Chapter 6:</strong> Vocabulary Building</li>
          <li><strong>Chapter 7:</strong> Grammar Skills</li>
          <li><strong>Chapter 8:</strong> Time Management Strategies</li>
          <li><strong>Chapter 9:</strong> Test Day Strategies</li>
          <li><strong>Chapter 10:</strong> Understanding Scores and Next Steps</li>
        </ul>
        <p>Remember that language learning is a lifelong journey. The skills you've developed during this course will serve you well beyond just the IELTS test. Keep practicing, stay curious, and continue to engage with English in all aspects of your life.</p>
        <p className="mb-0">We wish you the very best in your IELTS test and all your future endeavors!</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={10}
      title="Understanding Your IELTS Score and Next Steps"
      content={chapterContent}
      hasNextChapter={false}
    />
  );
};

export default Chapter10;
