import { useState } from "react";
import SEO from "../components/SEO";

export default function Profile() {
  // Simulated user state
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@Weegek.com",
    loggedIn: true,
  });

  return (
    <>
      <SEO title="My Account" description="View and manage your Weegek account details." keywords="account, profile, user" url="https://Weegek.com/profile" />
      <section style={{ maxWidth: 460, margin: "2.5rem auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px rgba(46,196,182,0.09)", padding: "2.2rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#e3f6f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 700, color: "#2ec4b6" }}>
            <span role="img" aria-label="profile">👤</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 22 }}>{user.name}</div>
            <div style={{ color: "#4f8cff", fontSize: 15 }}>{user.email}</div>
          </div>
        </div>
        <div style={{ marginBottom: 18 }}>
          <strong>Status:</strong> {user.loggedIn ? "Logged In" : "Logged Out"}
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
          {user.loggedIn ? (
            <button style={{ background: "#2ec4b6", color: "#fff", border: 0, borderRadius: 22, padding: "0.5rem 1.5rem", fontWeight: 600, cursor: "pointer" }} onClick={() => setUser({ ...user, loggedIn: false })}>Logout</button>
          ) : (
            <>
              <button style={{ background: "#4f8cff", color: "#fff", border: 0, borderRadius: 22, padding: "0.5rem 1.5rem", fontWeight: 600, cursor: "pointer" }} onClick={() => setUser({ ...user, loggedIn: true })}>Login</button>
              <button style={{ background: "#2ec4b6", color: "#fff", border: 0, borderRadius: 22, padding: "0.5rem 1.5rem", fontWeight: 600, cursor: "pointer" }}>Register</button>
            </>
          )}
        </div>
        <div style={{ fontSize: 13, color: "#888" }}>
          Tip: This is a demo. Integrate with your auth backend for real login/logout/register.
        </div>
      </section>
    </>
  );
}
