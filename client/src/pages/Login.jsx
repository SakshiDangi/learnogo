import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault()
    axios.get('/')
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='Enter your email here..' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type='password' placeholder='Enter your password here..' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button type='submit'>Loign</button>
      </form>
    </div>
  )
}
