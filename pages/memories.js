import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/Navbar";
import MemoryCard from "../components/MemoryCard";

export default function Memories() {
  const memories =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("memories") || "[]")
      : [];

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="page">
        <h2>Things you should remember</h2>

        {memories.length === 0 && (
          <p style={{ color: "#6e6e73" }}>
            Nothing saved yet. That’s okay. We’ll start together.
          </p>
        )}

        <div className="section">
          {memories.map((m, i) => (
            <MemoryCard key={i} memory={m} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
