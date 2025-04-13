import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter4 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 4! In this chapter, we'll learn about family members and relationships in Chinese.</p>
      
      <h3 className="mt-4">Immediate Family</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>父亲 (Fùqīn)</strong> - Father (formal)</p>
              <p><strong>爸爸 (Bàba)</strong> - Dad (informal)</p>
              <p><strong>母亲 (Mǔqīn)</strong> - Mother (formal)</p>
              <p><strong>妈妈 (Māma)</strong> - Mom (informal)</p>
              <p><strong>兄弟 (Xiōngdì)</strong> - Brother</p>
            </div>
            <div className="col-md-6">
              <p><strong>哥哥 (Gēge)</strong> - Older brother</p>
              <p><strong>弟弟 (Dìdi)</strong> - Younger brother</p>
              <p><strong>姐妹 (Jiěmèi)</strong> - Sister</p>
              <p><strong>姐姐 (Jiějie)</strong> - Older sister</p>
              <p><strong>妹妹 (Mèimei)</strong> - Younger sister</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Extended Family</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>祖父 (Zǔfù)</strong> - Grandfather (paternal)</p>
              <p><strong>爷爷 (Yéye)</strong> - Grandpa (paternal, informal)</p>
              <p><strong>外祖父 (Wàizǔfù)</strong> - Grandfather (maternal)</p>
              <p><strong>外公 (Wàigōng)</strong> - Grandpa (maternal, informal)</p>
            </div>
            <div className="col-md-6">
              <p><strong>祖母 (Zǔmǔ)</strong> - Grandmother (paternal)</p>
              <p><strong>奶奶 (Nǎinai)</strong> - Grandma (paternal, informal)</p>
              <p><strong>外祖母 (Wàizǔmǔ)</strong> - Grandmother (maternal)</p>
              <p><strong>外婆 (Wàipó)</strong> - Grandma (maternal, informal)</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Cultural Note</h3>
      <div className="alert alert-info">
        <p>Chinese family titles are very specific. Unlike English, Chinese has different words for older and younger siblings. Additionally, maternal and paternal grandparents have different titles. This reflects the importance of family hierarchy and lineage in Chinese culture.</p>
      </div>

      <h3 className="mt-4">Practice Dialogue</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>A: 这是你的家人照片吗？ (Zhè shì nǐ de jiārén zhàopiàn ma?)</strong> - Is this a photo of your family?</p>
          <p><strong>B: 是的。这是我爸爸，这是我妈妈。 (Shì de. Zhè shì wǒ bàba, zhè shì wǒ māma.)</strong> - Yes. This is my dad, this is my mom.</p>
          <p><strong>A: 这是谁？ (Zhè shì shéi?)</strong> - Who is this?</p>
          <p><strong>B: 这是我姐姐和我弟弟。 (Zhè shì wǒ jiějie hé wǒ dìdi.)</strong> - This is my older sister and my younger brother.</p>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={4}
      title="Family Members and Relationships"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter4;
