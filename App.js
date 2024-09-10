import "./styles.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        text: newTodo,
      },
    ]);
    setNewTodo("");
  };

  return (
    <div className="App">
      <h1> To do List</h1>
      <input
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        type="text"
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add</button>
      {items.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
}
