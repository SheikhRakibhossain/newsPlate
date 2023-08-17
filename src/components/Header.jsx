import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <>
            <div>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            <div>
                <Marquee>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis magni corrupti id exercitationem distinctio quaerat recusandae autem quae? Fuga laudantium magni veritatis nam. Recusandae nisi cupiditate voluptatum accusamus rem! I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </>
    );
};

export default Header;