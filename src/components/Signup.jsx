import React, { useState } from 'react';
import axios from 'axios';

function Signup({handle}){
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData((data) => {
      return { ...data, [name]: value };
    });
    console.log(formData);
  }
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/Signup', formData);
      // Handle successful Signup
      // console.log(response.data);
      console.log(formData);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
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
      <button type="submit">Signup</button>
      <p>I already have an account! <span className='linki' onClick={handle}>Login Now</span></p>
      <p>
      </p>
    </form>
  );
};

export default Signup;
