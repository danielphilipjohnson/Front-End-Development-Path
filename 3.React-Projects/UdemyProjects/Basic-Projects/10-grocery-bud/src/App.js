import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const geLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(geLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      // add item to list
      showAlert(true, "success", "item added to the list");
      // create new item

      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    showAlert(true, "danger", "item removed");
    setList(newList);
  };
  const editItem = (id) => {
    const specficItem = list.filter((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specficItem.title);
    console.log(specficItem);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    return () => {};
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handlesubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            name="grocery"
            id="grocery"
            className="grocery"
            placeholder="eggs. eggs."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
