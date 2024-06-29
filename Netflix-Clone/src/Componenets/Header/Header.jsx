import React from 'react'
import "./header.css"
import netflixLogo from "../../assets/Images/netflix-logo-0.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Header() {
  return (
    <div className='header_outer_container'>
          <div className='header_container'>
              <div className='header_left'>
                  <ul>
                      <li><img src={netflixLogo} alt="netflixlogo" /></li>
                      <li>Netflix</li>
                      <li>Home</li>
                      <li>TVshows</li>
                      <li>Movies</li>
                      <li>Latest</li>
                      <li>MyList</li>
                      <li>Browse by language</li>
                  </ul>
                  
              </div>
              <div className='header_right'>
                  <ul>
                      <li><SearchIcon /></li>
                      <li><NotificationsNoneIcon /></li>
                      <li><AccountBoxIcon /></li>
                      <li><ArrowDropDownIcon /></li>
                  </ul> 
              </div>
      </div>
    </div>
  )
}
