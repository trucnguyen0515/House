
// import '../scss/layouts/header.scss'
import Logo from '../../../public/images/houzz_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faBriefcase, faSearch} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import MyRouter from '../../const/routes';


const Header = () => {
    return (
        <header id="Header">
           <div className="container">
               {/* Logo */}
               <Link href={MyRouter.Home.href}>
                    <a className="item item1 logo">
                        <Logo style={{width:'114px'}}/>
                    </a>
                </Link>
                {/* Search */}
                <div className="item item2">
                    <FontAwesomeIcon className="isearch" icon={faSearch} /> 
                    <input className="search" placeholder="Search Photos, Products, Pros & More.."/>
                </div>
                {/* Sale */}
                <div className="item item3">
                <div id="special-header-promo">
                    <div className="sale-rectangle">
                        <div className="sale-upper-tri"></div>
                        <div className="sale-bottom-tri"></div>
                        <div className="sale-hole"></div>
                        <div className="sale-label headerPromoBanner__small sale-label--no-icon">SALE</div>
                        <div className="sale-label headerPromoBanner__large sale-label--no-icon sale-label--medium">SEMI-ANNUAL SALE</div>
                    </div>
                </div>
                </div>
                {/* Cart */}
                <div className="item item4">
                    <div className="countCart">0</div>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                {/* Login */}
                <div className="item item5">
                    <FontAwesomeIcon icon={faUser} /> 
                    <span style={{marginLeft:'4px'}}> Sign In</span>
                </div>
                {/* Pro register */}
                <div className="item item6">
                    <FontAwesomeIcon icon={faBriefcase} /> 
                    <span style={{marginLeft:'8px'}}>Join as a Pro</span>
                    
                </div>
           </div>
        </header>
    )
}

export default Header;