import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const Show = () => {
    const { name } = useParams();
    const [show, setShow] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [title, setTitle] = useState("");
    const [redirect, setRedirect] = useState(false);
    const nameRef = useRef("");
    const numberRef = useRef(0);
    async function getData() {
        const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
        const data = await response.json();
        setShow(data);
    }

    useEffect(() => {
        getData();

    }, []);
    function handleClick() {
        setClicked(true);
        setTitle(show.name);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        const bookingDetails = {
            titleoFShow: title,
            name: nameRef.current.value,
            numberOfTickets: numberRef.current.value
        }
        localStorage.setItem(nameRef.current.value, JSON.stringify(bookingDetails));
        alert("Booking Successful. See Browser Local Storage for booking details");
        setRedirect(true);
    }
    if (redirect) {
        return <Navigate to={"/"} />
    }

    if (clicked) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Title of Show</label>
                    <input type="text" value={title} readOnly /> <br />

                    <label>Your Name</label>
                    <input ref={nameRef} type="text" /> <br />

                    <label> No of Tickets</label>
                    <input ref={numberRef} type="number" /> <br />
                    <button>Book your Ticket</button>

                </form>
            </div>
        )
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