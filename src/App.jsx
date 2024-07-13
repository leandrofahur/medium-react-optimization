import { useState } from "react";

// mui:
import { Button, Card, TextField } from "@mui/material";

// custom:
import ListItem from "./components/ListItem/ListItem";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const filteredItems = items.filter((item) => item.includes(filter));

  return (
    <Card className="app">
      <h1>Item List</h1>
      <TextField
        variant="standard"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
        className="textField"
      />
      <Button variant="contained" onClick={handleAddItem}>
        Add Item
      </Button>
      <TextField
        variant="standard"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items"
        className="textField"
      />

      <ul>
        {filteredItems.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </Card>
  );
}

export default App;
