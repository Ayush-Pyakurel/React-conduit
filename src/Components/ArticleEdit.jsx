import React from 'react';

function ArticleEdit() {
  const getArticleSlug = async () => {
    await fetch('https://api.realworld.io/api/articles');
  };

  return (
    <div className='banner'>
      <h2 className='conduit'>Conduit</h2>
      <span className='item'>A place to share your knowledge</span>
    </div>
  );
}

export default ArticleEdit;
