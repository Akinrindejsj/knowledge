import React from 'react'
import { useNavigate } from 'react-router-dom'

const My = () => {
 const navigate = useNavigate()   
  return (
    <>
    <div className='my' >
        
        <p className='icon'>i</p>
        </div>
    <div className='div33'>

    <p >Your password has been successfully changed</p>
    <p >Please click on the ok button below to proceed to the sign in page</p>
    <button onClick={() => navigate('/')} className='buttonew'><p className='text'>Ok</p></button>
    </div>
    </>
    
    
    
    
    
    
  )
}

export default My