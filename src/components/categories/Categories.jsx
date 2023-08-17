import { useEffect, useState } from "react";
import Category from "./Category";
// import Category from "./Category";

const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data))
        .catch(error=> console.log(error))
    },[])

    return (
        <div>
            {
                categories.map(category =><Category 
                    key={category.id} 
                    category={category} 
                    ></Category>)
            }
        </div>
    );
};

export default Categories;