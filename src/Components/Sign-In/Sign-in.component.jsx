import React from 'react';
import './Sign-in.styles.scss';
import FormInput from '../Form/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';
import {auth,signInWithGoogle} from '../../Firebase/firebase.utils';

class SignIn extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
        email:'',
        password:''

      };
    
    }
    handleSubmit = async event=>
    {
        event.preventDefault();
        const {email,password}=this.state;

    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'',password:''});
    }catch(err)
    {
      console.log(err);
    }

        

    };
    handleChange=event=>
    {
        const  {value,name}=event.target;
        this.setState({[name]:value});
    };
    
    render()
    {
        return (<div className='sign-in'>
        <h2>I alredy have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput 
        name='email'
         type='email' 
         label='email'
         handleChange={this.handleChange} value={this.state.email} required />
       
        <FormInput name='password' type='password' 
        label='password'
        handleChange={this.handleChange} value={this.state.password} required />
        
        <div className='buttons'>
        <CustomButton type ='submit'>Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
        </form>

        </div>
        );
    }

}
export default SignIn;