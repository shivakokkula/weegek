import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import styles from './Profile.module.css';
import config from '../auth/constants';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Guest User',
    email: 'guest@example.com',
    joinDate: new Date().toLocaleDateString(),
    avatar: 'https://ui-avatars.com/api/?name=Guest+User&background=2ec4b6&color=fff&size=128',
    loggedIn: false
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('jwtToken');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${config.SERVER_URL}/user/profile`, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (response.data) {
          setUser({
            ...response.data,
            loggedIn: true,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(response.data.name || 'User')}&background=2ec4b6&color=fff&size=128`
          });
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to load profile. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    Cookies.remove('jwtToken');
    navigate('/login');
  };

  const handleRemoveAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        await axios.delete(`${config.SERVER_URL}/user/delete`, {
          headers: { Authorization: `Bearer ${Cookies.get('jwtToken')}` }
        });
        Cookies.remove('jwtToken');
        navigate('/');
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.loading}>Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.error}>
          {error}
          <button 
            onClick={() => window.location.reload()}
            className={styles.retryButton}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <img 
            src={user.avatar} 
            alt={user.name} 
            className={styles.profileAvatar}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://ui-avatars.com/api/?name=User&background=2ec4b6&color=fff&size=128';
            }}
          />
          <h1 className={styles.profileTitle}>Profile</h1>
          <p className={styles.profileSubtitle}>Manage your account settings</p>
        </div>
        
        <div className={styles.profileInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Full Name</span>
            <span className={styles.infoValue}>{user.name}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Email Address</span>
            <span className={styles.infoValue}>{user.email}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Member Since</span>
            <span className={styles.infoValue}>{user.joinDate}</span>
          </div>
          <div className={`${styles.infoItem} ${styles.statusItem}`}>
            <span className={styles.statusLabel}>Status</span>
            <span className={`${styles.statusBadge} ${user.loggedIn ? styles.statusActive : styles.statusInactive}`}>
              {user.loggedIn ? 'Active Now' : 'Offline'}
            </span>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button 
            onClick={handleLogout}
            className={`${styles.button} ${styles.logoutButton}`}
          >
            <span className={styles.buttonIcon}>🚪</span>
            Logout
          </button>
          <button 
            onClick={handleRemoveAccount}
            className={`${styles.button} ${styles.deleteButton}`}
          >
            <span className={styles.buttonIcon}>🗑️</span>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;