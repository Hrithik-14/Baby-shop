

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false); 
//   const [error, setError] = useState(''); 
//   const navigate = useNavigate();
  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true); 
//     setError(''); 

//     try {
    
//       const res = await axios.get(`http://localhost:4001/users?email=${email}&password=${password}`);
      
//       if (res.data.length > 0) {
        
//         localStorage.setItem('userId', res.data[0].id);

        
//         if (rememberMe) {
//           localStorage.setItem('rememberedEmail', email);
//         } else {
//           localStorage.removeItem('rememberedEmail');
//         }

//         navigate('/products');
//       } else {
//         setError('Invalid email or password.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className='image'>
//         <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/baby-shop-2108349-1773810.png?f=webp&w=512" alt="Login Icon" />
//       </div>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <div className='submit'>
//           <label className='remember'>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />{' '}
//             Remember Me
//           </label>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Logging in...' : 'Log In'}
//           </button>
//           <button onClick={()=>{
//             navigate('/register')
//           }}>Sign Up</button>
//         </div>
//         {error && <p className="error-message">{error}</p>} 
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false); 
//   const [error, setError] = useState(''); 
//   const [userName, setUserName] = useState(''); 

//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedName = localStorage.getItem('userName');
//     if (storedName) {
//       setUserName(storedName);
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.get(`http://localhost:4001/users?email=${email}&password=${password}`);
      
//       if (res.data.length > 0) {
//         const user = res.data[0];

       
//         localStorage.setItem('userId', user.id);
//         localStorage.setItem('userName', user.name);
//         localStorage.setItem('userRole', user.role); 
//         setUserName(user.name);

//         if (rememberMe) {
//           localStorage.setItem('rememberedEmail', email);
//         } else {
//           localStorage.removeItem('rememberedEmail');
//         }

       
//         if (user.role === 'admin') {
//           navigate('/admin'); 
//         } else {
//           navigate('/products'); 
//         }

//       } else {
//         setError('Invalid email or password.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className='image'>
//         <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/baby-shop-2108349-1773810.png?f=webp&w=512" alt="Login Icon" />
//       </div>

//       {userName && <h2>Welcome, {userName}!</h2>} 

//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <div className='submit'>
//           <label className='remember'>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />{' '}
//             Remember Me
//           </label>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Logging in...' : 'Log In'}
//           </button>
//           <button onClick={() => navigate('/register')}>Sign Up</button>
//         </div>
//         {error && <p className="error-message">{error}</p>} 
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.get(`http://localhost:4001/users?email=${email}&password=${password}`);

      if (res.data.length > 0) {
        const user = res.data[0];

        localStorage.setItem('userId', user.id);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userRole', user.role);
        setUserName(user.name);

        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        if (user.role === 'admin') {
          navigate('/adminnav');
        } else {
          navigate('/products');
        }
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('rememberedEmail');
    setUserName('');
    navigate('/login'); 
  };

  return (
    <div className="login-container">
      <div className='image'>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/baby-shop-2108349-1773810.png?f=webp&w=512" alt="Login Icon" />
      </div>

      {userName ? (
        <>
          <h2>Welcome, {userName}!</h2>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <>
          <form onSubmit={handleLogin}>
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
              <label className='remember'>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />{' '}
                Remember Me
              </label>
              <button type="submit" disabled={loading}> 
                {loading ? 'Logging in...' : 'Log In'}
              </button>
              <button type="button" onClick={() => navigate('/register')}>Sign Up</button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default Login;




