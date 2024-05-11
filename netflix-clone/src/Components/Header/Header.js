import React, {useState,useEffect} from 'react';
import "./Header.css";
import NetflixLogo from "../../Assets/NetflixLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
    }, []);
  return (
    <>
       {/* <div className='header_outer_container'> */}
       <div className={`header_outer_container ${show && 'nav_black'}`}>
        <div className='header_container'>
            <div className="header_left">
                <ul>
                    <li><img className='netflix-img' src={NetflixLogo} alt="NetflixLogo" width={"100"} /></li>
                  <a href="https://www.netflix.com/browse"><li >Home</li></a>  
                    <a href="https://www.netflix.com/browse/genre/83"><li>TVShows</li></a>
                    <a href="https://www.netflix.com/browse/genre/34399"><li>Movies</li></a>
                    <a href="https://www.netflix.com/latest"><li>New & Popular</li></a>
                   <a href="https://www.netflix.com/latest"> <li>MyList</li> </a> 
                    <a href="https://www.netflix.com/browse/my-list"><li>Browse by Languages</li></a>
                </ul>
            </div>
            <div className="header_right">
                <ul className="Headericons">
                    <li > <SearchIcon /> </li>
                    <li> <NotificationsActiveIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header

