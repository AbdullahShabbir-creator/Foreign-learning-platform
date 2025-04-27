import React from "react";

const prompts = [
  {
    title: "数字时代的友谊",
    description: "请写一篇80-100字的短文，谈谈‘数字时代友谊的重要性’，并说明社交媒体如何影响友谊。",
    placeholder: "你的作文..."
  },
  {
    title: "环保生活",
    description: "请写一篇80-100字的短文，介绍日常生活中如何做到环保。请举出至少两个具体例子。",
    placeholder: "你的作文..."
  },
  {
    title: "健康饮食",
    description: "请写一篇80-100字的短文，谈谈‘健康饮食在日常生活中的作用’。水果、蔬菜和运动有何意义？",
    placeholder: "你的作文..."
  }
];

const ChineseWritingTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-pencil fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>写作 <span className="text-muted" style={{fontSize:'1.2rem'}}>(Writing Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>请根据每个主题写一篇短文。</p>
    {prompts.map((prompt, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">写作任务 {idx+1}：{prompt.title}</h5>
          <p className="card-text mb-2">{prompt.description}</p>
          <textarea className="form-control mb-3" rows={7} placeholder={prompt.placeholder} style={{maxWidth: '100%'}} />
          <button className="btn btn-primary" disabled>提交作文 (Demo)</button>
        </div>
      </div>
    ))}
  </div>
);

export default ChineseWritingTest;
