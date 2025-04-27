import React from "react";

const prompts = [
  {
    title: "Freundschaft im digitalen Zeitalter",
    description: "Schreiben Sie einen kurzen Aufsatz (ca. 80–100 Wörter) zum Thema: 'Die Bedeutung von Freundschaft im digitalen Zeitalter'. Gehen Sie darauf ein, wie soziale Medien Freundschaften beeinflussen können.",
    placeholder: "Ihr Aufsatz..."
  },
  {
    title: "Umweltbewusst leben",
    description: "Schreiben Sie einen Text (ca. 80–100 Wörter) darüber, wie man im Alltag umweltbewusst handeln kann. Geben Sie mindestens zwei konkrete Beispiele.",
    placeholder: "Ihr Aufsatz..."
  },
  {
    title: "Gesunde Ernährung",
    description: "Verfassen Sie einen kurzen Aufsatz (ca. 80–100 Wörter) zum Thema: 'Gesunde Ernährung im Alltag'. Welche Rolle spielen Obst, Gemüse und Bewegung?",
    placeholder: "Ihr Aufsatz..."
  }
];

const GermanWritingTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-pencil fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>Schreiben <span className="text-muted" style={{fontSize:'1.2rem'}}>(Writing Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>Schreiben Sie zu jedem Thema einen kurzen Aufsatz.</p>
    {prompts.map((prompt, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">Schreibaufgabe {idx+1}: {prompt.title}</h5>
          <p className="card-text mb-2">{prompt.description}</p>
          <textarea className="form-control mb-3" rows={7} placeholder={prompt.placeholder} style={{maxWidth: '100%'}} />
          <button className="btn btn-primary" disabled>Aufsatz einreichen (Demo)</button>
        </div>
      </div>
    ))}
  </div>
);

export default GermanWritingTest;
