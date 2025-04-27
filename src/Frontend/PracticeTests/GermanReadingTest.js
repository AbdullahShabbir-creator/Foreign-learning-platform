import React from "react";

const passages = [
  {
    text: `Immer mehr Menschen nutzen das Fahrrad als umweltfreundliches Verkehrsmittel. In vielen Städten gibt es mittlerweile spezielle Fahrradwege und Verleihsysteme, die das Radfahren attraktiver machen.`,
    questions: [
      {
        q: "Warum wird das Fahrrad laut Text immer beliebter?",
        placeholder: "Ihre Antwort..."
      },
      {
        q: "Nennen Sie eine Maßnahme, die Städte für Radfahrer eingeführt haben.",
        placeholder: "Ihre Antwort..."
      }
    ]
  },
  {
    text: `Die Digitalisierung verändert die Arbeitswelt grundlegend. Immer mehr Prozesse werden automatisiert und neue Berufsbilder entstehen. Arbeitnehmer müssen sich ständig weiterbilden, um mit den Entwicklungen Schritt zu halten.`,
    questions: [
      {
        q: "Was ist eine der Folgen der Digitalisierung laut dem Text?",
        placeholder: "Ihre Antwort..."
      },
      {
        q: "Was wird von Arbeitnehmern im digitalen Zeitalter erwartet?",
        placeholder: "Ihre Antwort..."
      }
    ]
  },
  {
    text: `Gesunde Ernährung spielt eine wichtige Rolle für das Wohlbefinden. Experten empfehlen, viel Obst und Gemüse zu essen und auf ausreichend Bewegung zu achten. Auch das Trinken von Wasser ist für einen gesunden Lebensstil unerlässlich.`,
    questions: [
      {
        q: "Was empfehlen Experten für eine gesunde Ernährung?",
        placeholder: "Ihre Antwort..."
      },
      {
        q: "Warum ist das Trinken von Wasser wichtig?",
        placeholder: "Ihre Antwort..."
      }
    ]
  }
];

const GermanReadingTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-book fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>Leseverständnis <span className="text-muted" style={{fontSize:'1.2rem'}}>(Reading Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>Lesen Sie die folgenden Texte und beantworten Sie die Fragen.</p>
    {passages.map((passage, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">Leseaufgabe {idx+1}</h5>
          <p className="card-text mb-2">Text:</p>
          <blockquote className="blockquote px-3 py-2 mb-3" style={{background:'#f8f9fa', borderLeft:'4px solid #4361ee', borderRadius:8}}>
            <p className="mb-0" style={{fontSize:'1.1rem'}}>{passage.text}</p>
          </blockquote>
          {passage.questions.map((q, qidx) => (
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

export default GermanReadingTest;
