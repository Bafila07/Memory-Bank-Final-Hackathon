import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <Navbar />
      <div className="page">
        <h2>Welcome back</h2>
        <p style={{ color: "#6e6e73" }}>
          This is your safe space. Everything important to you lives here.
        </p>

        <div className="section">
          <p>
            You can save memories, revisit familiar moments, and gently remind
            yourself of the things that matter.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
