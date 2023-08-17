import moment from 'moment';

const Header = () => {
    return (
        <>
            <div>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </div>
        </>
    );
};

export default Header;