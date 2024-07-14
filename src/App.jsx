import { useState } from "react";
import PropTypes from "prop-types";

// mui:
import { Button, Card, TextField } from "@mui/material";

import "./App.css";

function ListItem(props) {
  const { item } = props;
  return <li>{item}</li>;
}

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

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default App;
