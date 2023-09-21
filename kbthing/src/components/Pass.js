import React from 'react'
import { useNavigate} from 'react-router-dom'



const Pass = () => {
  const navigate = useNavigate()
  return (
    

    <div className='main-container'>
    <div className='right'>

<div className='welcome'>
<h1 className='textwelcome'>Forgot Password?</h1>

   </div>
        <div className='left'>

        <div className='div3'>
        <div className='div1'> 
        <img src="./images/Knowledge Base Logo (1).jpg"  alt=''/>
        <h1 className='div2'>Knowledge Base</h1>
        <p className='div13'>Forgot</p>
        <p className='div11'>Password?</p>
        </div>
        <form>
    
          <p className='div10'>Please enter the e-mail linked to your account</p>
    
    
          <label>
    
            <p>Email</p>
    
    
    
            <input className='div6' type="txt" />
            
          </label>
        
         <div>
        <button onClick={() => navigate('New Password')} className ="button" ><p className='text'>Proceed</p></button>
        
         </div>
        </form>
    
      </div>
      </div>
      </div>
        </div>
      
    
    
    
    
  )
}

export default Pass