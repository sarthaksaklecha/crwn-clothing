import React from 'react'

import './sign-in_sign-out.styles.scss';
import '../../components/SignIn/sign-in.component'
import SignIn from '../../components/SignIn/sign-in.component';

const SigninAndSignupPage = () => (
    <div className = 'sign-in-and-sign-up' >
     <SignIn/>
    </div>
)

export default SigninAndSignupPage;