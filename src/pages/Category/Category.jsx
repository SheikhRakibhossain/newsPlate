import { useParams } from "react-router-dom";

const Category = () => {
    let { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
};

export default Category;