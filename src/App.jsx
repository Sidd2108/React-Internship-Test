import { useMemo, useState } from 'react'

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
    <>
      <h1>TV Shows</h1>
      {data.map(item => (
        <div key={item.show.id} className="container">
          <div className='show'>
            <h2>{item.show.name}</h2>
            <a href={item.show.url}> {item.show.url}</a>
            <span>Score : {item.score}</span>
            <span>Language : {item.show.language}</span>
            <span>Average Rating : {item.show.rating.average}</span>

          </div>
          <img src={item.show.image?.medium} alt="" />
        </div>
      ))}
    </>
  )
}

export default App
