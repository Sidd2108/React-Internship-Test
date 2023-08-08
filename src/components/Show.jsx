import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    const { name } = useParams();
    const [show, setShow] = useState([]);
    async function getData() {
        const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
        const data = await response.json();
        setShow(data);
    }

    useEffect(() => {
        getData();
    }, []);
    function handleClick() {
        alert("Your Ticket is booked");
    }
    return (
        <div className='individual-show'>
            <h1>Title : {show.name}</h1>
            <h3>Language : {show.language}</h3>
            <img style={{ width: "min-content" }} src={show?.image?.medium} alt="" />
            <span>Summary :</span>
            <div>{show.summary}</div>
            <span>Link : </span>
            <a href={show.url}>{show.url}</a>
            <button onClick={handleClick}>Book Ticket</button>
        </div>
    )
}

export default Show;