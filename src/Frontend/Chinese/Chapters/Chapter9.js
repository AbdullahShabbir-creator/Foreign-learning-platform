import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter9 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 9! In this chapter, we'll learn about weather and seasons in Chinese.</p>
      
      <h3 className="mt-4">Weather Vocabulary</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>天气 (Tiānqì)</strong> - Weather</p>
              <p><strong>晴天 (Qíngtiān)</strong> - Sunny day</p>
              <p><strong>阴天 (Yīntiān)</strong> - Cloudy day</p>
              <p><strong>雨 (Yǔ)</strong> - Rain</p>
              <p><strong>雪 (Xuě)</strong> - Snow</p>
            </div>
            <div className="col-md-6">
              <p><strong>风 (Fēng)</strong> - Wind</p>
              <p><strong>雾 (Wù)</strong> - Fog</p>
              <p><strong>冷 (Lěng)</strong> - Cold</p>
              <p><strong>热 (Rè)</strong> - Hot</p>
              <p><strong>温度 (Wēndù)</strong> - Temperature</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Seasons</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>春天 (Chūntiān)</strong> - Spring</p>
          <p><strong>夏天 (Xiàtiān)</strong> - Summer</p>
          <p><strong>秋天 (Qiūtiān)</strong> - Autumn/Fall</p>
          <p><strong>冬天 (Dōngtiān)</strong> - Winter</p>
        </div>
      </div>
      
      <h3 className="mt-4">Weather Expressions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>今天天气怎么样？ (Jīntiān tiānqì zěnmeyàng?)</strong> - How's the weather today?</p>
          <p><strong>下雨了。 (Xià yǔ le.)</strong> - It's raining.</p>
          <p><strong>下雪了。 (Xià xuě le.)</strong> - It's snowing.</p>
          <p><strong>刮风了。 (Guā fēng le.)</strong> - It's windy.</p>
          <p><strong>很热。 (Hěn rè.)</strong> - It's hot.</p>
          <p><strong>很冷。 (Hěn lěng.)</strong> - It's cold.</p>
          <p><strong>温暖/凉快 (Wēnnuǎn/Liángkuai)</strong> - Warm/Cool</p>
        </div>
      </div>

      <h3 className="mt-4">Temperature</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>零下/零上 (Língxià/Língshàng)</strong> - Below zero/Above zero</p>
          <p><strong>度 (Dù)</strong> - Degree</p>
          <p><strong>摄氏度 (Shèshì dù)</strong> - Celsius degree</p>
          <p><strong>Example: 零上二十五度 (Língshàng èrshíwǔ dù)</strong> - 25 degrees above zero (25°C)</p>
          <p><strong>Example: 零下十度 (Língxià shí dù)</strong> - 10 degrees below zero (-10°C)</p>
        </div>
      </div>

      <h3 className="mt-4">Practice Dialogue: Talking About Weather</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>A: 你好！今天天气怎么样？ (Nǐ hǎo! Jīntiān tiānqì zěnmeyàng?)</strong> - Hello! How's the weather today?</p>
          <p><strong>B: 今天天气很好，晴天。 (Jīntiān tiānqì hěn hǎo, qíngtiān.)</strong> - The weather is nice today, sunny.</p>
          <p><strong>A: 温度多少度？ (Wēndù duōshao dù?)</strong> - What's the temperature?</p>
          <p><strong>B: 大约二十五度，不冷也不热。 (Dàyuē èrshíwǔ dù, bù lěng yě bù rè.)</strong> - About 25 degrees, neither cold nor hot.</p>
          <p><strong>A: 明天会下雨吗？ (Míngtiān huì xià yǔ ma?)</strong> - Will it rain tomorrow?</p>
          <p><strong>B: 是的，明天可能会下雨，记得带伞。 (Shì de, míngtiān kěnéng huì xià yǔ, jìde dài sǎn.)</strong> - Yes, it might rain tomorrow, remember to bring an umbrella.</p>
        </div>
      </div>

      <h3 className="mt-4">Cultural Note</h3>
      <div className="alert alert-info">
        <p>The Chinese lunar calendar traditionally divides the year into 24 solar terms (二十四节气, Èrshísì jiéqì), which are used to guide agricultural activities and mark seasonal changes. These terms are more precise than the four seasons and reflect China's agricultural heritage.</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={9}
      title="Weather and Seasons"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter9;
