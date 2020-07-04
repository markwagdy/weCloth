import React from 'react';
import SignIn from '../../Components/Sign-In/Sign-in.component';
import './sign-in-and-sign-up.styles.scss';
import SignUp from '../../Components/Sign-Up/Sign-up.component';
 const SignInSignUp =()=>
 (
    <div className='sign-in-sign-up'>
        <SignIn/>
        <SignUp/>

    </div>

 );
 export default SignInSignUp;