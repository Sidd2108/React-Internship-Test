import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    setData(data);
  }

  useMemo(() => {
    getData();
  }, []);

  return (
    <div className='main'>
      <h1>TV Shows</h1>
      {data.map(item => (

        <Link key={item.show.id} className="container" to={`/post/${item.show.name}`}>
          <div className='show'>
            <h2>{item.show.name}</h2>
            <div href={item.show.url}> {item.show.url}</div>
            <span>Score : {item.score}</span>
            <span>Language : {item.show.language}</span>
            <span>Average Rating : {item.show.rating.average}</span>
          </div>
          <img src={item.show.image?.medium} alt="" />
        </Link>

      ))}
    </div>
  )
}

export default App
