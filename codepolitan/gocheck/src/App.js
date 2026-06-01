import { useState } from "react";

const ListItems = [
  { id: 1, title: "Eat", done: false },
  { id: 2, title: "Sleep", done: true },
]

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">📝GoCheck✅</span>
}

function Form() {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>Ada yang mau dicatat? 🤔</h3>
    <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button>Add</button>
  </form>
}

function CheckList() {
  return <div className="list">
    <ul>
      {ListItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  </div>
}

function Item({ item }) {
  return <li>
    <input type="checkbox" />
    <span style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</span>
    <button>❌</button>
  </li>
}

function Stats() {
  return <footer className="stats">
    <span>
      Kamu punya X catatan dan baru X yang di CheckList (X%) ✅
    </span>
  </footer>
}

export default App;
