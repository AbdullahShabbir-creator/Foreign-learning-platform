import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter8 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 8! In this chapter, we'll learn about shopping and money in Chinese.</p>
      
      <h3 className="mt-4">Shopping Vocabulary</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>商店 (Shāngdiàn)</strong> - Shop/Store</p>
              <p><strong>超市 (Chāoshì)</strong> - Supermarket</p>
              <p><strong>购物中心 (Gòuwù zhōngxīn)</strong> - Shopping mall</p>
              <p><strong>市场 (Shìchǎng)</strong> - Market</p>
              <p><strong>衣服 (Yīfu)</strong> - Clothes</p>
            </div>
            <div className="col-md-6">
              <p><strong>鞋子 (Xiézi)</strong> - Shoes</p>
              <p><strong>裤子 (Kùzi)</strong> - Pants</p>
              <p><strong>售货员 (Shòuhuòyuán)</strong> - Sales clerk</p>
              <p><strong>试衣间 (Shì yī jiān)</strong> - Fitting room</p>
              <p><strong>收银台 (Shōuyíntái)</strong> - Checkout counter</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Money and Pricing</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>钱 (Qián)</strong> - Money</p>
          <p><strong>人民币 (Rénmínbì)</strong> - Chinese currency (RMB)</p>
          <p><strong>元/块 (Yuán/Kuài)</strong> - Yuan/Chinese dollar (formal/informal)</p>
          <p><strong>角/毛 (Jiǎo/Máo)</strong> - Jiao/10 cents (formal/informal)</p>
          <p><strong>分 (Fēn)</strong> - Cent (1/100 of a yuan)</p>
          <p><strong>贵 (Guì)</strong> - Expensive</p>
          <p><strong>便宜 (Piányi)</strong> - Cheap</p>
        </div>
      </div>
      
      <h3 className="mt-4">Shopping Phrases</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>多少钱？ (Duōshao qián?)</strong> - How much does it cost?</p>
          <p><strong>太贵了！ (Tài guì le!)</strong> - Too expensive!</p>
          <p><strong>可以便宜一点吗？ (Kěyǐ piányi yìdiǎn ma?)</strong> - Can you make it a bit cheaper?</p>
          <p><strong>我想买... (Wǒ xiǎng mǎi...)</strong> - I want to buy...</p>
          <p><strong>我只是看看。 (Wǒ zhǐshì kànkàn.)</strong> - I'm just looking.</p>
          <p><strong>有没有...? (Yǒu méiyǒu...?)</strong> - Do you have...?</p>
        </div>
      </div>

      <h3 className="mt-4">Practice Dialogue: At a Clothing Store</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>顾客: 你好！这件衬衫多少钱？ (Nǐ hǎo! Zhè jiàn chènshān duōshao qián?)</strong> - Hello! How much is this shirt?</p>
          <p><strong>售货员: 这件衬衫一百五十元。 (Zhè jiàn chènshān yìbǎi wǔshí yuán.)</strong> - This shirt is 150 yuan.</p>
          <p><strong>顾客: 有没有便宜一点的？ (Yǒu méiyǒu piányi yìdiǎn de?)</strong> - Do you have anything cheaper?</p>
          <p><strong>售货员: 有，这件只要九十元。 (Yǒu, zhè jiàn zhǐyào jiǔshí yuán.)</strong> - Yes, this one is only 90 yuan.</p>
          <p><strong>顾客: 我可以试穿吗？ (Wǒ kěyǐ shìchuān ma?)</strong> - May I try it on?</p>
          <p><strong>售货员: 当然可以，试衣间在那边。 (Dāngrán kěyǐ, shì yī jiān zài nàbiān.)</strong> - Of course, the fitting room is over there.</p>
        </div>
      </div>

      <h3 className="mt-4">Cultural Note</h3>
      <div className="alert alert-info">
        <p>Bargaining is common in markets and some small shops in China, but not in department stores or chain stores where prices are fixed. When bargaining, it's often effective to start at around 50-70% of the asking price. Remember to maintain a friendly attitude during negotiations.</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={8}
      title="Shopping and Money"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter8;
