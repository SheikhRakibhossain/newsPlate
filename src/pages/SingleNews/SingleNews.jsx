import React from 'react';

const SingleNews = () => {
    return (
        <div className="container mx-auto px-4 grid grid-cols-12">

            

                {/* main outlet here */}
                <div className=" col-span-6"> <Outlet /> </div>

                {/* Right side bar here */}
                <div className="col-span-3"> <h2 className="text-xl font-bold">Left nav bar</h2></div>

            </div>
    );
};

export default SingleNews;