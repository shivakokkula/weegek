import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import styles from "./Login.module.css";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
    //   await login(email, password);
      navigate("/");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        (err?.message?.toLowerCase().includes("network") ? "Network error. Please try again." : "Invalid credentials")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Login" description="Login to your Weegek account." url="https://Weegek.com/login" />
      <div className={styles.loginRoot}>
        <form onSubmit={handleSubmit} className={styles.loginCard} aria-label="Login form">
          <div className={styles.loginTitle}>Login</div>
          {error && <div className={styles.errorMsg} role="alert">❌ {error}</div>}
          <label htmlFor="login-email" className={styles.inputLabel}>Email</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            autoComplete="email"
            className={styles.inputField}
          />
          <label htmlFor="login-password" className={styles.inputLabel}>Password</label>
          <div className={styles.passwordFieldWrapper}>
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="current-password"
              className={styles.inputField}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className={styles.showPasswordBtn}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={styles.loginBtn + (loading ? ' ' + styles.loginBtnLoading : '')}
            aria-busy={loading}
          >
            {loading ? <span>⏳ Logging in...</span> : "Login"}
          </button>
          <div className={styles.formLinksRow}>
            <a href="/forgot-password" className={styles.forgotLink}>Forgot password?</a>
            <span className={styles.divider}>|</span>
            Don&apos;t have an account? <a href="/register" className={styles.registerLink}>Register</a>
          </div>
          <div className={styles.socialDivider}><span>OR</span></div>
        </form>
      </div>
    </>
  );
}

