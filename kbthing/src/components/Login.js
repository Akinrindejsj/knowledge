import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [firstName,setfirstName] = useState('')
  const [lastName,setlastName] = useState('') 
  const [error,seterror]=useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(firstName,lastName)
     if (firstName.length===0||lastName.length===0){
      seterror(true)
     }
  }
  return (
    <div className='main-container'>
       <div className='right'>

<div className='welcome'>
  <h1 className='textwelcome'>Welcome</h1>

      </div>
    <div className='left'>  
    <div className='div3'>
    <div className='div1'> 
    <img src="./images/Knowledge Base Logo (1).jpg"  alt=''/>
    <h1 className='div2'>Knowledge Base</h1>
    <p className='div4'>Sign In</p>
    </div>
    <form onClick={handleSubmit} >


        <p>Username</p>

        <input onChange={e=>setfirstName(e.target.value)} className='div5' type="text" />
        {error&&firstName.length<=0?
      <p className='error'>
      Username cannot be emptied

      </p>:""}

      <label>

        <p>Password</p>



        <input  onChange={e=>setlastName(e.target.value)} className='div6' type="password" />
        {error&&lastName.length<=0?
      <p className='error'>
      Password cannot be empty  

      </p>:""}
      </label>
     <div className='remember'>
      <input  className='check'type='checkbox' id='Remember me' name='Remember me '/>
      <span><label for='Remember me' >Remember me</label>
     
      
      <Link  to ='Forgot password'className='forgotpass'>
      Forgot Password?</Link>
      </span>
      </div>
     <div>
     <button  className ="button" type="submit"><p className='text'>Sign In</p></button>
     </div>
    </form>
    </div>
   
    </div>
  </div>
  </div>
  )

}


export default Login