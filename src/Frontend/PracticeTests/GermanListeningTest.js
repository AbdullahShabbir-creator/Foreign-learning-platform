import React from "react";

const audios = [
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Umwelt und Verkehr",
    questions: [
      {
        q: "Was ist das Hauptthema des Audioausschnitts?",
        placeholder: "Ihre Antwort..."
      },
      {
        q: "Nennen Sie ein Detail, das im Audio erwähnt wird.",
        placeholder: "Ihre Antwort..."
      }
    ]
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    title: "Arbeit und Digitalisierung",
    questions: [
      {
        q: "Welche Veränderungen werden im Arbeitsleben beschrieben?",
        placeholder: "Ihre Antwort..."
      },
      {
        q: "Wie sollten sich Arbeitnehmer laut Audio verhalten?",
        placeholder: "Ihre Antwort..."
      }
    ]
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    title: "Gesundheit und Ernährung",
    questions: [
      {
        q: "Welche Tipps werden für eine gesunde Ernährung gegeben?",
        placeholder: "Ihre Antwort..."
      },
      {
        q: "Warum ist Bewegung wichtig?",
        placeholder: "Ihre Antwort..."
      }
    ]
  }
];

const GermanListeningTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-headphones fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>Hörverständnis <span className="text-muted" style={{fontSize:'1.2rem'}}>(Listening Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>Hören Sie sich die folgenden Audioausschnitte an und beantworten Sie die Fragen.</p>
    {audios.map((audio, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">Hörübung {idx+1}: {audio.title}</h5>
          <audio controls className="mb-3" style={{width:'100%'}}>
            <source src={audio.src} type="audio/mpeg" />
            Ihr Browser unterstützt das Audioelement nicht.
          </audio>
          {audio.questions.map((q, qidx) => (
            <div className="mb-3" key={qidx}>
              <strong>Frage {qidx+1}:</strong> {q.q}
              <input type="text" className="form-control mt-2 mb-3" placeholder={q.placeholder} style={{maxWidth:400}} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default GermanListeningTest;
