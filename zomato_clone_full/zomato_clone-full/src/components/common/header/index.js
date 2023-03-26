import React from 'react';
import './header.css';

const Header = () => {
  return ( 
    <div className='max-width header'>
      <img 
      src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' 
      alt='Zomato-logo' 
      className='header-logo' 
      />
      <div className='header-left'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i className='fas fa-map-marker-alt'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
