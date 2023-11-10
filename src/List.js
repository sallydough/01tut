import React from "react";
import { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa'

const List = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One 1/2 pound Cocoa Covered Almonds",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    console.log('clicked')
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(listItems);
    // stores the rendered information so when you close and open app again, it will pop up with all changed info
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))

  }

  return (
  
  <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked} />
            <label
            onDoubleClick={() => handleCheck(item.id)}
            style={(item.checked) ? {textDecoration: 'line-through'} :null }
            >{item.item}</label>
            <FaTrashAlt role="button" taxIndex="0"/>
          </li>
        ))}
      </ul>
  </main>
  )
};

export default List;
