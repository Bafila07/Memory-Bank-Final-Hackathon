import { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/Navbar";

export default function AddMemory() {
  const [text, setText] = useState("");

  const saveMemory = () => {
    const memories = JSON.parse(localStorage.getItem("memories") || "[]");
    memories.push({ text, date: new Date().toISOString() });
    localStorage.setItem("memories", JSON.stringify(memories));
    setText("");
    alert("Memory saved");
  };

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="container">
        <h2>Add Memory</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={saveMemory}>Save</button>
      </div>
    </ProtectedRoute>
  );
}
