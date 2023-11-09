import React from "react";
import { useState } from "react";

const List = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound Cocoa Covered Almonds",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 1,
      checked: false,
      item: "Item 3",
    },
  ]);

  return (
  
  <main>
      <ul>
        {items.map((item) => (
          <li className="item">
            <input type="checkbox"
            checked={item.checked} />
            <label>{item.item}</label>
          </li>
        ))}
      </ul>
  </main>
  )
};

export default List;
