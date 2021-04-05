import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss'

import { connect } from 'react-redux';
import { sectionsSelector } from '../../Redux/Directory/directory.selector'
// we need the state here because the list of the items is a state and the items sit in the directory component
// we have moved the state into our store
const Directory = ({ sections }) =>(
    <div className = 'directory-menu'>
        {
            sections.map(({id, ...otherProps})=>(
                <MenuItem key={id} {...otherProps}/>
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    sections : sectionsSelector(state)
})

export default connect(mapStateToProps)(Directory);