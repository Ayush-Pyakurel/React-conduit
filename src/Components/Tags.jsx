import { useEffect, useState } from 'react';

let tagValue;
function Tags() {
  const [tag, setTag] = useState([]);

  const getTags = async () => {
    await fetch('https://api.realworld.io/api/tags', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTag(() => data.tags);
        tagValue = tag;
        console.log(tagValue);
      });
  };

  useEffect(() => {
    getTags();
  }, []);

  return <div className='tags'>{tagValue}</div>;
}

export default Tags;
