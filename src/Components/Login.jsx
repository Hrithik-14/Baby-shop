import React, { useEffect, useState } from 'react';
import './Login.css'; 
// import Register from '../pages/Register';
// import { Link } from 'react-router-dom';
import axios from 'axios'
// import { use } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email,setEmail]  = useState('')
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    

    useEffect(() => {
        axios.get("http://localhost:5000/users")
          .then(response => setProducts(response.data))
          .catch(error => console.error("Error fetching data:", error));
      }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    }

    return (
    <div className="login-container">
        <div className='image'>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/baby-shop-2108349-1773810.png?f=webp&w=512" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <input
        type="text"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <div className='submit'>
        <label>
        <div className='remember'>
        <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
        />{' '}
        Remember Me
        </div>
        </label>
        <button type="submit">Log In</button>
        </div>
        
    </form>
    </div>
);
};

export default Login;





