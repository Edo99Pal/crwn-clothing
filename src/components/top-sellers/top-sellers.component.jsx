import React from 'react';

import './top-sellers.styles.scss';

import TSItem from '../ts-item/ts-item.component';

const TopSellers = () => (
    <div class="top-sellers">
        <h2>TOP SELLERS</h2>
        <TSItem/>
    </div>
);

export default TopSellers;