import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter10 = () => {
  const chapterContent = (
    <>
      <p>Congratulations on reaching Chapter 10! In this final chapter, we'll learn about hobbies and leisure activities in Chinese.</p>
      
      <h3 className="mt-4">Hobby Vocabulary</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>爱好 (Àihào)</strong> - Hobby</p>
              <p><strong>兴趣 (Xìngqù)</strong> - Interest</p>
              <p><strong>看书 (Kàn shū)</strong> - Reading books</p>
              <p><strong>听音乐 (Tīng yīnyuè)</strong> - Listening to music</p>
              <p><strong>看电影 (Kàn diànyǐng)</strong> - Watching movies</p>
            </div>
            <div className="col-md-6">
              <p><strong>旅游 (Lǚyóu)</strong> - Traveling</p>
              <p><strong>游泳 (Yóuyǒng)</strong> - Swimming</p>
              <p><strong>唱歌 (Chàng gē)</strong> - Singing</p>
              <p><strong>跳舞 (Tiào wǔ)</strong> - Dancing</p>
              <p><strong>打球 (Dǎ qiú)</strong> - Playing ball sports</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Sports</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>足球 (Zúqiú)</strong> - Football/Soccer</p>
              <p><strong>篮球 (Lánqiú)</strong> - Basketball</p>
              <p><strong>网球 (Wǎngqiú)</strong> - Tennis</p>
              <p><strong>乒乓球 (Pīngpāngqiú)</strong> - Table tennis</p>
            </div>
            <div className="col-md-6">
              <p><strong>羽毛球 (Yǔmáoqiú)</strong> - Badminton</p>
              <p><strong>跑步 (Pǎobù)</strong> - Running</p>
              <p><strong>健身 (Jiànshēn)</strong> - Working out/Fitness</p>
              <p><strong>太极拳 (Tàijíquán)</strong> - Tai Chi</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Talking About Hobbies</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>你有什么爱好？ (Nǐ yǒu shénme àihào?)</strong> - What hobbies do you have?</p>
          <p><strong>我喜欢... (Wǒ xǐhuān...)</strong> - I like...</p>
          <p><strong>我的爱好是... (Wǒ de àihào shì...)</strong> - My hobby is...</p>
          <p><strong>你会...吗？ (Nǐ huì... ma?)</strong> - Can you/Do you know how to...?</p>
          <p><strong>我会... (Wǒ huì...)</strong> - I can/I know how to...</p>
        </div>
      </div>

      <h3 className="mt-4">Practice Dialogue: Discussing Hobbies</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>A: 你有什么爱好？ (Nǐ yǒu shénme àihào?)</strong> - What hobbies do you have?</p>
          <p><strong>B: 我喜欢打篮球和听音乐。你呢？ (Wǒ xǐhuān dǎ lánqiú hé tīng yīnyuè. Nǐ ne?)</strong> - I like playing basketball and listening to music. What about you?</p>
          <p><strong>A: 我喜欢旅游和看书。 (Wǒ xǐhuān lǚyóu hé kàn shū.)</strong> - I like traveling and reading books.</p>
          <p><strong>B: 你最近看了什么书？ (Nǐ zuìjìn kàn le shénme shū?)</strong> - What books have you read recently?</p>
          <p><strong>A: 我最近看了一本中国历史的书，很有意思。 (Wǒ zuìjìn kàn le yì běn Zhōngguó lìshǐ de shū, hěn yǒu yìsi.)</strong> - I recently read a book about Chinese history, it was very interesting.</p>
        </div>
      </div>

      <h3 className="mt-4">Places for Leisure Activities</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>电影院 (Diànyǐngyuàn)</strong> - Movie theater</p>
          <p><strong>博物馆 (Bówùguǎn)</strong> - Museum</p>
          <p><strong>图书馆 (Túshūguǎn)</strong> - Library</p>
          <p><strong>公园 (Gōngyuán)</strong> - Park</p>
          <p><strong>咖啡馆 (Kāfēiguǎn)</strong> - Café</p>
          <p><strong>健身房 (Jiànshēnfáng)</strong> - Gym</p>
        </div>
      </div>

      <h3 className="mt-4">Cultural Note</h3>
      <div className="alert alert-info">
        <p>Traditional Chinese leisure activities include calligraphy (书法, Shūfǎ), painting (绘画, Huìhuà), and playing traditional instruments like the guzheng (古筝) or erhu (二胡). Tai Chi and other martial arts are also popular forms of exercise that combine physical activity with mental discipline.</p>
      </div>

      <h3 className="mt-4">Course Completion</h3>
      <div className="alert alert-success">
        <h4>Congratulations!</h4>
        <p>You've completed all 10 chapters of our Chinese language course! You now have a solid foundation in basic Chinese vocabulary and phrases for everyday situations.</p>
        <p>Remember that language learning is a continuous journey. Keep practicing, expanding your vocabulary, and most importantly, don't be afraid to use what you've learned in real conversations!</p>
        <p>继续加油！(Jìxù jiāyóu!) - Keep up the good work!</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={10}
      title="Hobbies and Leisure Activities"
      content={chapterContent}
      hasNextChapter={false}
    />
  );
};

export default Chapter10;
