import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <h2 className="text-xl"> All Categories</h2>
            {
                categories.map(category =><p 
                    key={category.id} 
                    
                    > <Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default Categories;