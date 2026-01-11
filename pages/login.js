import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login(email);
    router.push("/dashboard");
  };

  return (
    <div className="center">
      <h1>Memory Bank</h1>
      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
