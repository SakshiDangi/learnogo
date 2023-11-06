import React, { useState } from 'react'

export default function Signup() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const signupUser = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={signupUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter your name here..' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label>Email</label>
        <input type='email' placeholder='Enter your email here..' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type='password' placeholder='Enter your password here..' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
