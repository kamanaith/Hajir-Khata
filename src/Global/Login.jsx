import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroPage from '../components/HeroPage';


function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


const handleLogin =() => {
    const userstorage = JSON.parse(localStorage.getItem("user"));
    if (userstorage && userstorage.username === username && userstorage.password === password) {
        localStorage.setItem("isAuthenticated", "true");
        alert("Login successful!");
        navigate("/HeroPage");
      } else {
        alert("Invalid input");
      }
};


  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-green-500 text-white p-2 rounded" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
    
    </>
  )
}

export default Login