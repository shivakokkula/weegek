import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await register(name, email, password);
      navigate("/profile");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        (err?.message?.toLowerCase().includes("network") ? "Network error. Please try again." : "Registration failed")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.registerRoot}>
        <form onSubmit={handleSubmit} className={styles.registerCard} aria-label="Registration form">
          <div className={styles.registerTitle}>Register</div>
          {error && <div className={styles.errorMsg} role="alert" aria-live="polite">❌ {error}</div>}
          <label htmlFor="register-name" className={styles.inputLabel}>Name</label>
          <input
            id="register-name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            required
            autoComplete="name"
            className={styles.inputField}
          />
          <label htmlFor="register-email" className={styles.inputLabel}>Email</label>
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            autoComplete="email"
            className={styles.inputField}
          />
          <label htmlFor="register-password" className={styles.inputLabel}>Password</label>
          <div className={styles.passwordFieldWrapper}>
            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="new-password"
              className={styles.inputField}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: 0,
                color: "#4f8cff",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className={styles.passwordHint}>Password must be at least 6 characters.</div>
          <label htmlFor="register-confirm-password" className={styles.inputLabel}>Confirm Password</label>
          <input
            id="register-confirm-password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            autoComplete="new-password"
            className={styles.inputField}
            style={{ marginBottom: 18 }}
          />
          <button
            type="submit"
            disabled={loading}
            className={styles.registerBtn + (loading ? ' ' + styles.registerBtnLoading : '')}
            aria-busy={loading}
          >
            {loading ? <span>⏳ Registering...</span> : "Register"}
          </button>
          <div className={styles.formLinksRow}>
            Already have an account? <a href="/login" className={styles.loginLink}>Login</a>
          </div>
          <div className={styles.socialDivider}><span>OR</span></div>
        </form>
      </div>
    </>
  );
}

