export default function MemoryCard({ memory }) {
  return (
    <div className="card">
      <p>{memory.text}</p>
      <small>{new Date(memory.date).toDateString()}</small>
    </div>
  );
}
