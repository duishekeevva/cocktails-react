import {Link} from "react-router-dom";
import Logo from './Assets/logo (2).png'

const Header = () => {
    return (
        <header className={'header'}>
            <div className="container">
                <div className="header-box">
                    <img className={'logo-img'} src={Logo} alt=""/>
                    <nav className={'nav'}>
                        <Link className={'link'} to={'/'}>Home</Link>
                        <Link className={'link'} to={'/search'}>Search</Link>
                    </nav>
                    <button className={'header-btn'}>Order</button>
                </div>
            </div>
        </header>
    )
}

export default Header;