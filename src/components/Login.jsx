import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Login() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      console.log('Token found:', token);    }
  }, [location]);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleGoogle = ()=>{
    window.open(`http://localhost:7000/auth/google`, '_self');
  }


  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData((data) => {
      return { ...data, [name]: value };
    });
    console.log(formData);
  }
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/users/signin', formData);
      const {token}=response.data;
      if(token){
        localStorage.setItem('token',token);
      window.open('/home','_self');
      }
      else{
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormData}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
          required
        />
      </div>
      <button type="submit">Login</button>
      <p>I don't have an account!<Link to="/signup"> Signup Now</Link></p>
      <p>
      </p>
      <span className='linki' onClick={handleGoogle}>Connect With Google</span>
    </form>
  );
};

export default Login;
