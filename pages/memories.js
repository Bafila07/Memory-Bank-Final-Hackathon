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
      <div className="container">
        <h2>Memories</h2>
        {memories.map((m, i) => (
          <MemoryCard key={i} memory={m} />
        ))}
      </div>
    </ProtectedRoute>
  );
}
