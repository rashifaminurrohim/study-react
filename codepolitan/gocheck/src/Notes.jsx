import React, { useState } from "react";

// Main App
export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleAdd(note) {
    if (!note.trim()) return
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), note: note }]);
    setNote("");
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="app">
      <h1>Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={() => handleAdd(note)}>Add</button>
      </form>

      <div className="list">
        <ul>
          {notes.map((note) => (
            <li>
              <span>{note.note}</span>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
