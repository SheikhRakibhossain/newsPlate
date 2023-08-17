import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categories from "../components/categories/Categories";

const Main = () => {
    return (
        <>
            
            <Header />
            <Navbar />
            <div className="container mx-auto px-4 grid grid-cols-12">

                {/* left sidebar */}
                <div className=" col-span-3 "> <Categories/></div>

                {/* main outlet here */}
                <div className=" col-span-6"> <Outlet /> </div>

                {/* Right side bar here */}
                <div className="col-span-3"> <h2 className="text-xl font-bold">Left nav bar</h2></div>

            </div>

            <Footer />

            
        </>
    );
};

export default Main;