import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import constants from '../auth/constants';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Guest User',
    email: 'guest@example.com'
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('jwtToken');
    navigate('/login');
  };

  const handleRemove = () => {
    // Clear user data
    setUser({ name: '', email: '', loggedIn: false });
    // Optionally clear any other user-related data
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>Your Profile</h1>
      
      <div style={{ 
        margin: '2rem 0',
        padding: '1.5rem',
        background: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Name:</strong> {user.name}
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Email:</strong> {user.email}
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Status:</strong> {user.loggedIn ? "Logged In" : "Logged Out"}
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={handleLogout}
          style={{
            background: '#2ec4b6',
            color: '#fff',
            border: 'none',
            borderRadius: '22px',
            padding: '0.5rem 1.5rem',
            fontWeight: 600,
            cursor: 'pointer',
            minWidth: '120px'
          }}
        >
          Logout
        </button>

        <button 
          onClick={handleRemove}
          style={{
            background: '#e74c3c',
            color: '#fff',
            border: 'none',
            borderRadius: '22px',
            padding: '0.5rem 1.5rem',
            fontWeight: 600,
            cursor: 'pointer',
            minWidth: '120px'
          }}
        >
          Remove Account
        </button>
      </div>
    </div>
  );
};

export default Profile;