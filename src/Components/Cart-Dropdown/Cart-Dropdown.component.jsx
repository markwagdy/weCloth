import React from 'react';
import './Cart-Dropdown.styles.scss';
import CustomButton from '../Custom-Button/custom-button.component';

const CartDropdown =()=>
(
    <div className='cart-dropdown'> 
    <div className='cart-items'/>

    <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
)
export default CartDropdown;