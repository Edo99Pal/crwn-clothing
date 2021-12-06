import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './category.styles.scss';

import SHOP_DATA from '../../pages/shop/shop.data.js';


const MensPage = () => {
    const { title, items } = SHOP_DATA[4];
    return (
        <div className='collection-page'>
        <div className='title'><h2>{title.toUpperCase()}</h2></div>
            <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
            </div>
        </div>
    );
}


export default MensPage;