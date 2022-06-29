import Article from './Article';

function Dashboard() {
  const showGlobalFeed = () => {};

  return (
    <>
      {!localStorage.getItem('token') && (
        <div className='banner'>
          <h2 className='conduit'>Conduit</h2>
          <span className='item'>A place to share your knowledge</span>
        </div>
      )}
      <div className='global-Feed'>
        <span
          style={{
            color: '#5cb85c',
            cursor: 'pointer',
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}
          onClick={showGlobalFeed}
        >
          Global Feed
        </span>
      </div>

      <hr
        style={{
          marginTop: '60px',
          width: '65%',
          marginLeft: '15%',
          color: 'black',
          height: '0.5px',
        }}
      />
      {localStorage.getItem('loggedInStatus') && (
        <div className='global-article'>
          <Article />
        </div>
      )}
    </>
  );
}

export default Dashboard;
