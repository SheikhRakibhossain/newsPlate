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


    //use state practice
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const addToList = () => {

        list.push(item)
        setList([...list])
    }


    return (
        <div>
            <p className='text-md font-bold'>{number}</p>
            <button onClick={() => { setNumber(number + 1) }} className='btn btn-info'>Number</button>
            <button onClick={newsData} type="button" className='btn btn-success'>news data</button>
            <button onClick={showNews} type="button" className='btn btn-warning'>show data</button>
            <p ref={mypTag}>show data here</p>

            {/* list and item add with using useState */}
            <div className='py-8 border-spacing-1'>

                <table className='table-fixed'>

                    <tbody>

                        {
                            list.length !== 0 ? (
                                list.map((element, index) => {
                                    return (
                                        <tr className='block border-2 bottom-3'>
                                            <td>{element}</td>
                                            <td><button className='btn btn-success'>Remove Item</button></td>
                                        </tr>
                                    )

                                })
                            ) : (<tr>No Items Added</tr>)
                        }

                    </tbody>


                </table>

                <input onChange={(e) => { setItem(e.target.value) }} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Write the number or text' />
                <input onClick={addToList} type="submit" value="Add Item" className='btn btn-danger' />
                <p>{list.length}</p>
            </div>
        </div>
    );
};

export default Practice;