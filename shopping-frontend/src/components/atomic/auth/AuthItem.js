import React from 'react'
// import "../../../css/Signin.css"
import "../../../css/auth/AuthItem.css"

const AuthItem = ({heading, paragraph}) => {
  return (
    <div className='AuthItem-container'>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
    </div>
  )
}

export default AuthItem
