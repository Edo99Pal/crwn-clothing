import React from 'react';

import './ts-item.styles.scss';

import SHOP_DATA from '../../pages/shop/shop.data';

import CollectionItem from '../../components/collection-item/collection-item.component';

import Carousel from 'react-elastic-carousel';

const TSItem = () => {
    let items = SHOP_DATA[0].items.concat(SHOP_DATA[1].items, SHOP_DATA[2].items, SHOP_DATA[3].items, SHOP_DATA[4].items);
    let filteredItems = items.filter(item => item.topSeller === true);
    
    return(
        <div class="ts-item">
        
            <Carousel itemsToShow={4} itemsToScroll={4} enableAutoPlay={true} autoPlaySpeed={5000}>
                {
                    filteredItems.map(item => <CollectionItem id={item.id} item={item}/>)
                }
            </Carousel>
        </div>
    );
}

export default TSItem;