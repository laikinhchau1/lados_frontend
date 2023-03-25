import React from 'react'
import './header.css'
import logo from '../../assets/images/logo/logo.webp'
import userIcon from '../../assets/images/icon/icon-user.webp'
import searchIcon from '../../assets/images/icon/icon-search.webp'
import mainNav from '../../assets/mainNav/mainNav'
import bagIcon from '../../assets/images/icon/icon-bag.webp'
import { Link } from 'react-router-dom'
export const Header = () => {

  console.log('xin chao nhe', mainNav)
  const renderMenuItems = data => {
    return data.map((item, index) =>
        (item?.children && item?.children.length) ? (<li key={index}><Link to={'#'}>{item.display}</Link><ul>
            {renderMenuItems(item.children)}
        </ul></li>
        ) : <li key={index}><Link to={item.path}>{item.display}</Link></li>
    )
}
  return (
    <div className='header'>
      <div className='header-wrap'>
        
        <div className='menu-bar-mobile'>
          <div className='mobile-bar-icon'>
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>
          
          <div className='header-icon'>
            <img src={searchIcon} alt=''/>
          </div>
        </div>
        <div className='mobile-logo'><img src={logo} alt='logo' /></div>
        <div className='header-left'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='header-main'>
          {renderMenuItems(mainNav)}
          </div>
        </div>
        <div className='header-right'>
          <div className='header-icons'>
            <div className='header-icon'>
              <i className="fa-regular fa-user"></i>
            </div>
            <div className='header-icon mobile-search'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='header-icon'>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}
