
import './App.css';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'
import Pass from './components/Pass';
import Newpass from './components/Newpass';

import My from './components/My';
//import Welcome from './Welcome';


function App() {
  return (
    <>
    <div>
    <Routes>
    <Route  path='/' element={<Login/>}></Route>
      <Route path='Forgot password' element={<Pass/>}></Route>
      <Route path='/Forgot password/New Password' element={<Newpass/>}></Route>
      <Route path='/Forgot password/New Password/Confirm' element={<My/>}></Route>
    </Routes>
    
    
      
      
         {/*<img src="./images/Vector (2).jpg"  alt=''/>
        <img src="./images/Vector (3).jpg"  alt=''/>
        <img src="./images/Vector (4).jpg"  alt=''/>
        <img src="./images/Vector.jpg"  alt=''/> */}
      
      </div>
  
  </>
  );
}

export default App;
