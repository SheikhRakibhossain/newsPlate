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
    // const [list, setList] = useState([]);
    // const [item, setItem] = useState('');

    // const addToList = () => {

    //     list.push(item)
    //     setList([...list])
    // }

    // const removeItem = (index) => {

    //     list.splice(index, 1)
    //     setList([...list])
    //     console.log(index)

    // }

    //again practice for add  item and delete item

    const [fruits, setFruits] = useState([]);
    const [fruitList, setFruitsList] = useState('');

    const addFruit = () => {
        fruits.push(fruitList)
        setFruits([...fruits])
    }

    const deleteFruits = (index) => {
        fruits.splice( index, 1)
        setFruits( [... fruits])
    }

    return (
        <div>
            <div>
                <p className='text-md font-bold'>{number}</p>
                <button onClick={() => { setNumber(number + 1) }} className='btn btn-info'>Number</button>
                <button onClick={newsData} type="button" className='btn btn-success'>news data</button>
                <button onClick={showNews} type="button" className='btn btn-warning'>show data</button>
                <p ref={mypTag}>show data here</p>
            </div>

            {/* list and item add with using useState */}
            {/* <div className='py-8 border-spacing-1'>

                <input onChange={(e) => { setItem(e.target.value) }} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Write the number or text' />
                <input onClick={addToList} type="submit" value="Add Item" className='btn btn-danger' />
                <p>{list.length}</p>
                <table className='table-fixed'>

                    <tbody>

                        {
                            list.length !== 0 ? (
                                list.map((element, index) => {
                                    return (
                                        <tr className='block border-2 bottom-3'>
                                            <td>{element}</td>
                                            <td><button onClick={() => removeItem(index)} className='btn btn-success'>Remove Item</button></td>
                                        </tr>
                                    )

                                })
                            ) : (<tr>No Items Added</tr>)
                        }

                    </tbody>


                </table>


            </div> */}


            <input onChange={(e)=>{setFruitsList(e.target.value)}} type="text" className="border border-slate-400 py-2 block px-2 placeholder-slate-300 contrast-more:border-slate-500 contrast-more:placeholder-slate-500" placeholder='write fruits here'/>
            <input onClick={() => { addFruit() }} type="submit" value="Add Fruit" className='btn btn-success' />
        
        <div>

            {
                fruits.length  !==0 ? <div>{
                    
                    fruits.map( (element, index) =>{
                        return(
                            <div key={index}>
                                <p className='flex justify-between py-3'><span className='text-xl font-mono font-bold'>{element} </span><button onClick={()=>{deleteFruits(index)}} className='btn btn-warning border-none'>Remove</button></p>
                                
                            </div>
                        )
                    })

                    } </div>
                
                : <p className='text-red-500 font-bold'>No Fruits available</p>
            }

        </div>
        
        
        
        </div>
    );
};

export default Practice;