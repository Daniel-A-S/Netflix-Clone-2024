import React from 'react'
import "./Header.css"
import NetflixLogo from "../../Assets/Netflix name.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <>
       <div className='header_outer_container'>
        <div className='header_container'>
            <div className="header_left">
                <ul>
                    <li><img className='netflix-img' src={NetflixLogo} alt="NetflixLogo" width={"100"} /></li>
                    
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
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

