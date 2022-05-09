import React from 'react';

import './menu-item.styles.scss';

import SHOP_DATA from '../../pages/shop/shop.data.js';

import { useNavigate } from 'react-router';

const MenuItem = ({ title, imageUrl, size}) => {
  const navigate = useNavigate();
  return(
    <div
      className={`${size} menu-item`}
      onClick={() => {
        switch(title) {
          case 'hats':
            navigate('/' + SHOP_DATA[0].title.toLowerCase());
            break;
          case 'sneakers':
            navigate('/' + SHOP_DATA[1].title.toLowerCase());
            break;
          case 'jackets':
            navigate('/' + SHOP_DATA[2].title.toLowerCase());
            break;
          case 'womens':
            navigate('/' + SHOP_DATA[3].title.toLowerCase());
            break;
          case 'mens':
            navigate('/' + SHOP_DATA[4].title.toLowerCase());
            break;
          default: 
            return;
            
        }
      }
    }
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
