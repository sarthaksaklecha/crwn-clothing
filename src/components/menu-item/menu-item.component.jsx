import React from 'react';
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, match,linkUrl }) =>(
    <div 
    className = {`${size} menu-item`}
    onClick = {()=>history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className = 'background-image'
            style = {{
                backgroundImage : `url(${imageUrl})`,
                width:'100%',
                height : '100%',
                backgroundSize : 'cover',
                backgroundPosition: 'center',
            }}
        />
        <div className='content'>
            <div className = 'title'>{ title }</div>
            <div className = 'subtitle'>SHOP NOW</div>
        </div>
    </div>
)

export default withRouter(MenuItem);