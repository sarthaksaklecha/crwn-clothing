import React from 'react';

import { connect } from 'react-redux';

import { shopDataSelector } from '../../Redux/shop/shop.selector.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { SearchBar } from '../searchBar/searchbar.component'
import CollectionItem from '../Collection-item/CollectionItem.component';

import './collection-overview.styles.scss';


class CollectionOverview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search : '',
            searchResults : []
        }
    }
    handleChange = (event) => {
        this.setState({
            search : event.target.value
        })
        const search = event.target.value;
        let data = this.props.SHOP_DATA;
        console.log(data)
        let searchResults = [];
        if(search.length){
            Object.values(data).forEach(category => {
                category.items.forEach(item=>{
                    if(item.name.toLowerCase().search(search.toLowerCase())!==-1){
                        searchResults.push(item)
                        console.log('run')
                    }
                })
            })
        }
        this.setState({
            searchResults : searchResults
        },()=>console.log("state changed"))

    }

    render(){
        const { searchResults, search } = this.state
        return(
            <div className='container'>
                <SearchBar handleChange = {this.handleChange} />
                {
                    searchResults.length 
                    ?
                    <div className='search-results-container'>
                        {
                            searchResults.map(item => 
                                <CollectionItem key={item.id} item={item} />
                            )
                        }
                    </div>
                    :
                    search.length ?
                    <h1> No Items Found</h1>
                    :
                    <div className='collection-overview'>
                    {
                        Object.values(this.props.SHOP_DATA).map(({ id, ...otherProps }) => (
                            <CollectionPreview key={id} {...otherProps} />
                        ))
                    }
                    </div>   
                }                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    SHOP_DATA : shopDataSelector(state)
})

export default connect(mapStateToProps)(CollectionOverview)
