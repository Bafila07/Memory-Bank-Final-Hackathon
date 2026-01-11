import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (!email) return;
    login(email);
    router.push("/dashboard");
  };

  return (
    <div className="center">
      <div className="page" style={{ maxWidth: "420px" }}>
        <h1>Memory Bank</h1>
        <p style={{ color: "#6e6e73", marginBottom: "12px" }}>
          A calm place to keep what matters most.
        </p>

        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin} style={{ width: "100%" }}>
          Continue
        </button>
      </div>
    </div>
  );
}
