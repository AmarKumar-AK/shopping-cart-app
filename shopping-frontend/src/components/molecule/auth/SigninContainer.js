import React from 'react'
// import "../../../css/Signin.css"
import AuthItem from '../../atomic/auth/AuthItem'
import SigninForm from '../../atomic/auth/SigninForm'
import "../../../css/auth/SigninContainer.css"

const SigninContainer = () => {
  const signinHeading = "Login";
  const signinParagraph = "Get access to your Orders, Wishlist and Recommendations.";
  
  return (
    <div className='Signin-container'>
        <AuthItem heading={signinHeading} paragraph={signinParagraph}/>
        <SigninForm />
    </div>
  )
}

export default SigninContainer
