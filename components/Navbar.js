import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/add-memory">Add Memory</Link>
      <Link href="/memories">Memories</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
