import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className='shop-page'>
        <CollectionOverview/>
      </div>
    );
  }
}

export default ShopPage;
