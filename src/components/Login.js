import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login request
    if (username === 'admin' && password === 'admin123') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    
<form onSubmit={handleSubmit} >
  <div className="login-form">
    <label for="exampleInputUsername1" className="form-label">UserName</label>
    <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="userNameHelp" value={username} onChange={(e) => setUsername(e.target.value)}/>
    <div id="userNamelHelp" className="form-text">We'll never share your email with anyone else.</div>
  {/* </div> */}
  {/* <div className="login-form"> */}
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>

  <button type="submit" className='button2'> Submit</button>
  </div> 
  
</form>
  );
}

export default Login;