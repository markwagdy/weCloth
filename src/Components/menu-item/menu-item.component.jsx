import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';
const MenuItem=({title,imageurl,size,history,linkUrl,match})=>
(
<div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{
    backgroundImage: `url(${imageurl})`
        }}/>    
    <div className='content'>
            <div className='title'><h1>{title.toUpperCase()}</h1></div>
            <div className='subtitle'><span>SHOP NOW</span></div>
     </div>
</div>

)
export default withRouter(MenuItem);