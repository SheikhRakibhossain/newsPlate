import { useEffect, useState} from "react";
import News from "./News";

const Newses = () => {

    const [newses, setNews] = useState([]);
    console.log(newses);
    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data =>setNews(data))
        .catch(error =>console.log(error))

    },[])

    return (
        <div>
            {
                newses.map( news => <News key={news._id} news={news}> </News> )
            }
        </div>
    );
};

export default Newses;