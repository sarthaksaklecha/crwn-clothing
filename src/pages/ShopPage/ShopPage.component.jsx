import React from 'react';
import SHOP_DATA from './SHOP_DATA.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collections : SHOP_DATA
        }
    }
    render(){
        const collections = this.state.collections ;
        return <div className='shop-page'>
            <div className='collection-preview'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
            </div>
        </div>
    }
}

export default ShopPage