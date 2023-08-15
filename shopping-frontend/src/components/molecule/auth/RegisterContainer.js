import React from 'react'
import AuthItem from '../../atomic/auth/AuthItem'
// import "../../../css/Register.css"
import RegisterForm from '../../atomic/auth/RegisterForm'
import "../../../css/auth/RegisterContainer.css"

const RegisterContainer = () => {
  const signupHeading = "Signup";
  const signupParagraph = "We do not share your personal information with anyone.";

  return (
    <div className='Register-container'>
      <AuthItem heading={signupHeading} paragraph={signupParagraph}/>
      <RegisterForm />
    </div>
  )
}

export default RegisterContainer
