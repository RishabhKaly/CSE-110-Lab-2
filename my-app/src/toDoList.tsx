
import React, { ChangeEventHandler } from "react";
import "./App.css";
import { useState } from "react";
import { GroceryItem } from "./types";
import { dummyGroceryList } from "./constants";
import { useParams } from "react-router-dom";

// export function ToDoList() {
//   const [numRemainingItems, setNumRemainingItems] = useState(0);
//   const [newTask, setNewTask] = useState("");
//   const { name } = useParams();
//   let [items, setItems] = useState(dummyGroceryList);

//   function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
//     const checkbox = e.target;
//     const itemName = checkbox.name;
//     const itemIndex = items.findIndex((item) => item.name === itemName);
//     items[itemIndex] = { name: itemName, isPurchased: checkbox.checked };

//     const uncheckedItems = items.filter((item) => !item.isPurchased);
//     const checkedItems = items.filter((item) => item.isPurchased);
//     const newItems = uncheckedItems.concat(checkedItems);

//     setItems(newItems);

//     const diff = checkbox.checked ? 1 : -1;
//     setNumRemainingItems(numRemainingItems + diff);
//   }

//   function handleAddTask() {
//     if (newTask.trim()) {
//       setItems([...items, { name: newTask, isPurchased: false }]);
//       setNewTask("");
//     }
//   }

//   return (
//     <div className="App">
//       <div className="App-body">
//         Items bought: {numRemainingItems}
//         <form action=".">
//           {items.map((item, index) => (
//             <ListItem
//               key={index}
//               item={item}
//               changeHandler={handleCheckboxClick}
//               index={index}
//             />
//           ))}
//         </form>
//         <input
//           type="text"
//           placeholder="Add new task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//       <h1>{name}'s To Do List</h1>
//     </div>
//   );
// }

// function ListItem({
//   item,
//   changeHandler,
//   index,
// }: {
//   item: GroceryItem;
//   changeHandler: ChangeEventHandler;
//   index: number;
// }) {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         onChange={changeHandler}
//         checked={item.isPurchased}
//         name={item.name}
//         data-testid={`checkbox-${index}`}  // Now using index for test purposes
//       />
//       {item.name}
//     </div>
//   );
// }


export function ToDoList() {
  const [numRemainingItems, setNumRemainingItems] = useState(0);
  const [newTask, setNewTask] = useState("");
  const { name } = useParams();
  let [items, setItems] = useState(dummyGroceryList);

  function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
    const checkbox = e.target;
    const itemName = checkbox.name;
    const itemIndex = items.findIndex((item) => item.name === itemName);
    items[itemIndex] = { name: itemName, isPurchased: checkbox.checked };

    const uncheckedItems = items.filter((item) => !item.isPurchased);
    const checkedItems = items.filter((item) => item.isPurchased);
    const newItems = uncheckedItems.concat(checkedItems);

    setItems(newItems);

    const diff = checkbox.checked ? 1 : -1;
    setNumRemainingItems(numRemainingItems + diff);
  }

  function handleAddTask() {
    if (newTask.trim()) {
      setItems([...items, { name: newTask, isPurchased: false }]);
      setNewTask("");
    }
  }

  return (
    <div className="App">
      <div className="App-body">
        <span data-testid="items-bought">Items bought: {numRemainingItems}</span>
        <form action=".">
          {items.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              changeHandler={handleCheckboxClick}
              index={index}
            />
          ))}
        </form>
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <h1>{name}'s To Do List</h1>
    </div>
  );
}

function ListItem({
  item,
  changeHandler,
  index,
}: {
  item: GroceryItem;
  changeHandler: ChangeEventHandler;
  index: number;
}) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={changeHandler}
        checked={item.isPurchased}
        name={item.name}
        data-testid={`checkbox-${index}`}  // Now using index for test purposes
      />
      {item.name}
    </div>
  );
}
