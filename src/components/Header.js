import {Link} from "react-router-dom";

const Header =()=> {
    return (
        <header>
            <Link className={'link'} to={'/'}>Home</Link>
            <Link className={'link'}  to={'/search'}>Search</Link>
        </header>
    )
}

export default Header;