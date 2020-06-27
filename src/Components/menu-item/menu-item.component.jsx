import React from 'react';
import './menu-item.styles.scss';
const MenuItem=({title,imageurl,size})=>
(
<div className={`${size} menu-item`}>
    <div className='background-image' style={{
    backgroundImage: `url(${imageurl})`
        }}/>    
    <div className='content'>
            <div className='title'><h1>{title.toUpperCase()}</h1></div>
            <div className='subtitle'><span>SHOP NOW</span></div>
     </div>
</div>

)
export default MenuItem;