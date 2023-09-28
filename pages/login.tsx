import React, { useState } from 'react';
import styles from '../styles/login.module.css'; // Import your CSS module
import {MdEmail} from 'react-icon/md'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform authentication here, e.g., sending a request to a server
    // with the email and password for verification.

    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles['login-box']}>
      <div className={styles['login-box2']}>
        <div></div>
         <div className={styles['login-container']}>
          <h2 className={styles['login-title']}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles['login-form-group']}>
              <input
                className={styles['login-input']}
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder='Email'
              />
            </div>
            <div className={styles['login-form-group']}>
              <input
                className={styles['login-input']}
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder='Password'
              />
            </div>
            <div className={styles['login-form-group']}>
            <button className='login-submit-button' type="submit">
              Login
            </button>
            </div>
            
          </form>
    </div> 

      </div>
    </div>
  );
};

export default LoginPage;
