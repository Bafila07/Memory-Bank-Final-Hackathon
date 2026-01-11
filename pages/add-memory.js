import { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/Navbar";

export default function AddMemory() {
  const [text, setText] = useState("");

  const saveMemory = () => {
    if (!text) return;
    const memories = JSON.parse(localStorage.getItem("memories") || "[]");
    memories.push({ text, date: new Date().toISOString() });
    localStorage.setItem("memories", JSON.stringify(memories));
    setText("");
    alert("Saved safely.");
  };

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="page">
        <h2>Save something important</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something you don’t want to forget…"
        />

        <button onClick={saveMemory}>Save memory</button>
      </div>
    </ProtectedRoute>
  );
}
