import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import constants from '../auth/constants';
import styles from './Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Guest User',
    email: 'guest@example.com',
    joinDate: new Date().toLocaleDateString(),
    avatar: 'https://ui-avatars.com/api/?name=Guest+User&background=2ec4b6&color=fff&size=128',
    loggedIn: false
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data if logged in
    const fetchUserData = async () => {
      const token = Cookies.get('jwtToken');
      if (token) {
        try {
          // Replace with your actual API endpoint
          // const response = await axios.get(`${constants.BASE_URL}/api/user`, {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // setUser({
          //   ...response.data,
          //   avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(response.data.name)}&background=2ec4b6&color=fff&size=128`
          // });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
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
        // Replace with your actual API endpoint
        // await axios.delete(`${constants.BASE_URL}/api/user/delete`, {
        //   headers: { Authorization: `Bearer ${Cookies.get('jwtToken')}` }
        // });
        Cookies.remove('jwtToken');
        navigate('/');
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <img 
            src={user.avatar} 
            alt={user.name} 
            className={styles.profileAvatar}
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