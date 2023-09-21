import React from 'react'
import { useNavigate } from 'react-router-dom'
const Newpass = () => {
    const navigate = useNavigate()
  return (
    <div className='main-container'>
    <div className='right'>

<div className='welcome'>
<h1 className='textwelcome'>Change Password</h1>

   </div>
 <div className='left'>  
 <div className='div3'>
 <div className='div1'> 
 <img src="./images/Knowledge Base Logo (1).jpg"  alt=''/>
 <h1 className='div2'>Knowledge Base</h1>
 <p className='div13'>Reset</p>
  <p className='div11'>Password</p>
 </div>
 <form className='div9'>

   <label>

     <p>Password</p>

     <input className='div6' type="password" />
     

   </label>

   <label>

     <p> Confirm Password</p>



     <input className='div6' type="password" />
     
   </label>
  
  <div>
  <button onClick={() => navigate('/Forgot password/New Password/Confirm')} className ="button2" type="submit"><p className='text'>Change Password</p></button>
  </div>
 </form>
 </div>

 </div>
</div>
</div>
  )
}

export default Newpass