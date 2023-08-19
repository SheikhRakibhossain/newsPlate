import React, { useState } from 'react';
import { useRef } from "react";

const Practice = () => {
// this page only for using practice purpose. Thank you
    let apiNewsData = useRef(null);
    let mypTag = useRef();

    const [number, setNumber] = useState(0);

    const newsData = async () => {

        const response = await fetch('http://localhost:5000/news')
        apiNewsData.current = await response.json()

    }

    const showNews = () => {
        mypTag.current.innerText = JSON.stringify(apiNewsData.current)
    }
    return (
        <div>
            <p className='text-md font-bold'>{number}</p>
            <button onClick={()=>{setNumber(number + 1)}} className='btn btn-info'>Number</button>


            <button onClick={newsData} type="button" className='btn btn-success'>news data</button>
            <button onClick={showNews} type="button" className='btn btn-warning'>show data</button>
            <p ref={mypTag}>show data here</p>
        </div>
    );
};

export default Practice;