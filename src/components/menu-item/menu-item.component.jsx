import React from 'react';
import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl,size}) =>(
    <div 
    className = {`${size} menu-item`}>
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