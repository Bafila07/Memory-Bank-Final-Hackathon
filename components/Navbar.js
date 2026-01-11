import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav>
      <strong>Memory Bank</strong>
      <Link href="/dashboard">Home</Link>
      <Link href="/add-memory">Save</Link>
      <Link href="/memories">Recall</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
