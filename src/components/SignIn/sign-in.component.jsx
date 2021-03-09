import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import {SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name='email' value={this.state.email} type='email' handleChange={this.handleChange} required/>
                    <FormInput label='password' name='password' value={this.state.password} type='password' handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick = {SignInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;