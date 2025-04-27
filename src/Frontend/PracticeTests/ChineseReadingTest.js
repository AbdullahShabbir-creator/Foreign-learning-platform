import React from "react";

const passages = [
  {
    text: `越来越多的人选择骑自行车作为环保的交通工具。在许多城市，已经有了专门的自行车道和租赁系统，使骑行变得更加方便和受欢迎。`,
    questions: [
      { q: "根据文章，为什么骑自行车越来越受欢迎？", placeholder: "你的答案..." },
      { q: "城市为骑自行车的人采取了哪些措施？", placeholder: "你的答案..." }
    ]
  },
  {
    text: `数字化正在彻底改变我们的工作方式。越来越多的流程实现了自动化，并且出现了许多新的职业。员工必须不断学习新知识，以适应这些变化。`,
    questions: [
      { q: "数字化带来了哪些变化？", placeholder: "你的答案..." },
      { q: "员工在数字化时代需要做什么？", placeholder: "你的答案..." }
    ]
  },
  {
    text: `健康饮食对我们的幸福感非常重要。专家建议多吃水果和蔬菜，并保持适量的运动。喝水对健康的生活方式也很重要。`,
    questions: [
      { q: "专家对健康饮食有何建议？", placeholder: "你的答案..." },
      { q: "为什么喝水很重要？", placeholder: "你的答案..." }
    ]
  }
];

const ChineseReadingTest = () => (
  <div className="container animate-fade-in" style={{maxWidth: '800px', marginTop: '100px', marginBottom: '40px'}}>
    {/* Header with icon and modern style */}
    <div className="d-flex align-items-center mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:56, height:56}}>
        <i className="bi bi-book fs-3" />
      </div>
      <div>
        <h1 className="fw-bold mb-1" style={{fontFamily:'Poppins', fontSize:'2.2rem'}}>阅读理解 <span className="text-muted" style={{fontSize:'1.2rem'}}>(Reading Test)</span></h1>
        <div style={{ height: "4px", width: "70px", background: "#f72585", borderRadius: "9999px" }}></div>
      </div>
    </div>
    <p className="lead mb-4" style={{color:'#333'}}>阅读以下短文并回答问题。</p>
    {passages.map((passage, idx) => (
      <div className="card shadow mb-5 animate-slide-up" style={{borderRadius:18}} key={idx}>
        <div className="card-body">
          <h5 className="card-title mb-3">阅读任务 {idx+1}</h5>
          <p className="card-text mb-2">短文：</p>
          <blockquote className="blockquote px-3 py-2 mb-3" style={{background:'#f8f9fa', borderLeft:'4px solid #4361ee', borderRadius:8}}>
            <p className="mb-0" style={{fontSize:'1.1rem'}}>{passage.text}</p>
          </blockquote>
          {passage.questions.map((q, qidx) => (
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

export default ChineseReadingTest;
