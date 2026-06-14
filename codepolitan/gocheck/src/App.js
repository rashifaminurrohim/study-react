import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((prev) => [...prev, item])
  }

  function handleDeleteItem(id) {
    setListItems((listItems) => listItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setListItems((listItems) => listItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done
        };
      }
      return item
    }))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <CheckList items={listItems} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">📝GoCheck✅</span>
}

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return

    onAddItem({
      id: Date.now(),
      title,
      done: false,
    });

    setTitle("");
  }

  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>Ada yang mau dicatat? 🤔</h3>
    <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button>Add</button>
  </form>
}

function CheckList({ items, onDeleteItem, onToggleItem }) {
  return <div className="list">
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
      ))}
    </ul>
  </div>
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return <li>
    <input type="checkbox" value={item.done} onChange={() => onToggleItem(item.id)} />
    <span style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
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
