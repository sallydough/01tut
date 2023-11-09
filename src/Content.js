import React from "react";
import { useState } from "react";

const Content = () => {
  // declare all of your functions here

    // useState hook to preserve and change name
    // name is the current state name at any given time (getter)
    // setName is used to set the state (setter)
    const [name, setName] = useState("Josh")

    const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const name = ["Sally", "Kevin", "Myles"];
    const int = Math.floor(Math.random() * 3);
    // setName will be pick a name from array above and push that name into current spot of "Josh"
    setName(name[int]);
  };

  const handleClick = () => {
    console.log(count);
     const counting = count + 1;
     setCount(counting);

  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }
  const handleClick3 = (event) => {
    // console logs event target aka event element
    console.log(event.target);
  }

  return (
    // calling your function expressions below under the Content() return statement
    <main>
      <p> Hello {name}</p>
      <button onClick={handleNameChange}>setState Name Change</button>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Count Click</button>
      {/* use anonymous function "()=>" for indication of function being called only when button is clicked */}
      <button onClick={() => handleClick2("Anita")}>Click Name</button>
      {/* passes event in and returns event target element */}
      <button onClick={(event) => handleClick3(event)}>Click Event</button>

    </main>
  );
};

export default Content;
