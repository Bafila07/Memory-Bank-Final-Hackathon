import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <Navbar />
      <div className="container">
        <h2>Dashboard</h2>
        <p>Your memories, safe and simple.</p>
      </div>
    </ProtectedRoute>
  );
}
