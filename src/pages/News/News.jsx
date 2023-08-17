
const News = (props) => {
    const { title,details,thumbnail_url, total_view} = props.news;
    console.log(props.news);

    return (
        <div className="card w-full ">
            <figure><img src={thumbnail_url} className="image-fluid" alt="news_image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                
                <p>{total_view}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default News;