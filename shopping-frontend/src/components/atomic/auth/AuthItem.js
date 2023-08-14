import React from 'react'
import "../../../css/Signin.css"

const AuthItem = ({heading, paragraph}) => {
  return (
    <div className='auth-item'>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
    </div>
  )
}

export default AuthItem
