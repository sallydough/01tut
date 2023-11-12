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
      item: "1/2 pound Ground Deer Meat",
    },
    {
      id: 3,
      checked: false,
      item: "Parmesan Cheese",
    },
  ]);

  const handleCheck = (id) => {
    console.log('clicked')
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(listItems);
    // stores the rendered information so when you close and open app again, it will pop up with all changed info
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  return (
  
  <main>
    {items.length ? (
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
            <FaTrashAlt 
            onClick={() => handleDelete(item.id)}
            role="button" 
            taxIndex="0"/>
          </li>
        ))}
      </ul>
    ): (
      <p style={{marginTop: '2rem'}}>Your List is Empty</p>
    )}
  </main>
  )
};

export default List;
