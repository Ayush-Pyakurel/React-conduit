import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Article() {
  const [article, setArticle] = useState([]);
  // const [readMore, setReadMore] = useState(false);

  let articles;
  const getGlobalArticle = async () => {
    await fetch('https://api.realworld.io/api/articles?limit=10&offset=0', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.articles);
        articles = data.articles;
        //console.log(articles);
        //article.map((item, index) => console.log(item));
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getGlobalArticle();
  }, []);

  return (
    <div className='article-container'>
      {article.map((item, index) => (
        <div className='article' key={index}>
          <h3>
            <img
              style={{
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                marginRight: '0.5rem',
              }}
              src={item.author.image}
              alt='userImage'
            />
            <Link
              to={`/user/${localStorage.getItem('loggedInUser')}`}
              style={{ color: ' #5cb85c', textDecoration: 'none' }}
            >
              {item.author.username}
            </Link>{' '}
          </h3>
          <h6 style={{ opacity: ' 0.3' }}>{item.createdAt}</h6>
          <h3 style={{ fontSize: '1.5rem' }}>{item.title}</h3>
          <p className='article-body'>{item.body}</p>
          <hr
            style={{
              marginTop: '60px',
              width: '65%',
              marginLeft: '15%',
              color: 'black',
              height: '0.5px',
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Article;
