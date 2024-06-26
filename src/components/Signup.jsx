import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Signup(){
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
      const response = await axios.post('http://localhost:7000/users/signup', formData);
      const res = response.data;
      if(res.success){
        alert("user added");
      }
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
      <p>I already have an account!<Link to="/login"> Login Now</Link></p>
      <p>
      </p>
    </form>
  );
};

export default Signup;
