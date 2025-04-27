import React from "react";

const audios = [
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "环境与交通",
    questions: [
      { q: "音频的主要内容是什么？", placeholder: "你的答案..." },
      { q: "音频中提到了哪些细节？", placeholder: "你的答案..." }
    ]
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    title: "工作与数字化",
    questions: [
      { q: "音频描述了哪些工作变化？", placeholder: "你的答案..." },
      { q: "根据音频，员工应该如何应对变化？", placeholder: "你的答案..." }
    ]
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    title: "健康与饮食",
    questions: [
      { q: "音频中给出了哪些健康饮食建议？", placeholder: "你的答案..." },
      { q: "为什么运动很重要？", placeholder: "你的答案..." }
    ]
  }
];

const ChineseListeningTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-headphones fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>听力理解 <span className="text-muted" style={{fontSize:'1.2rem'}}>(Listening Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>请听下面的音频并回答问题。</p>
    {audios.map((audio, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">听力任务 {idx+1}：{audio.title}</h5>
          <audio controls className="mb-3" style={{width:'100%'}}>
            <source src={audio.src} type="audio/mpeg" />
            您的浏览器不支持音频播放。
          </audio>
          {audio.questions.map((q, qidx) => (
            <div className="mb-3" key={qidx}>
              <strong>问题 {qidx+1}：</strong> {q.q}
              <input type="text" className="form-control mt-2 mb-3" placeholder={q.placeholder} style={{maxWidth:400}} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ChineseListeningTest;
