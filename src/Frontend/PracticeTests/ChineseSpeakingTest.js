import React from "react";

const speakingTasks = [
  {
    title: "自我介绍",
    questions: [
      "请做一个简短的自我介绍。你叫什么名字？来自哪里？",
      "你是做什么工作的，还是学生？",
      "你业余时间喜欢做什么？"
    ]
  },
  {
    title: "话题：旅行",
    questions: [
      "你最近一次旅行去了哪里？请介绍一下。",
      "你梦想的旅行目的地是哪里？为什么？",
      "你认为旅行有哪些好处？"
    ]
  },
  {
    title: "话题：健康",
    questions: [
      "你平时如何保持健康？",
      "运动对你来说有多重要？",
      "你认为健康饮食意味着什么？"
    ]
  }
];

const ChineseSpeakingTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-mic fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>口语 <span className="text-muted" style={{fontSize:'1.2rem'}}>(Speaking Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>请用中文口头回答下列问题（Demo：无法录音）。</p>
    {speakingTasks.map((task, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">口语任务 {idx+1}：{task.title}</h5>
          <ol className="mb-3">
            {task.questions.map((q, qidx) => <li key={qidx}>{q}</li>)}
          </ol>
          <div className="alert alert-info">Demo：暂不支持录音。</div>
        </div>
      </div>
    ))}
  </div>
);

export default ChineseSpeakingTest;
