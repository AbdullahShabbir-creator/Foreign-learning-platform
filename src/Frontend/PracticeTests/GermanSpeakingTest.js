import React from "react";

const speakingTasks = [
  {
    title: "Vorstellung",
    questions: [
      "Stellen Sie sich bitte vor. Wie heißen Sie und woher kommen Sie?",
      "Was machen Sie beruflich oder studieren Sie?",
      "Was machen Sie gern in Ihrer Freizeit?"
    ]
  },
  {
    title: "Thema: Reisen",
    questions: [
      "Wohin sind Sie zuletzt gereist? Erzählen Sie davon.",
      "Was ist Ihr Traumreiseziel und warum?",
      "Welche Vorteile hat das Reisen Ihrer Meinung nach?"
    ]
  },
  {
    title: "Thema: Gesundheit",
    questions: [
      "Was tun Sie, um gesund zu bleiben?",
      "Wie wichtig ist Sport in Ihrem Leben?",
      "Was bedeutet für Sie eine gesunde Ernährung?"
    ]
  }
];

const GermanSpeakingTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-mic fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>Sprechen <span className="text-muted" style={{fontSize:'1.2rem'}}>(Speaking Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>Beantworten Sie die unten stehenden Fragen mündlich (Demo – bitte Antworten laut sagen).</p>
    {speakingTasks.map((task, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">Sprechaufgabe {idx+1}: {task.title}</h5>
          <ol className="mb-3">
            {task.questions.map((q, qidx) => <li key={qidx}>{q}</li>)}
          </ol>
          <div className="alert alert-info">Demo: Antworten können nicht aufgenommen werden.</div>
        </div>
      </div>
    ))}
  </div>
);

export default GermanSpeakingTest;
