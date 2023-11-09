import React from "react";

const Content = () => {
  // declare all of your functions here
  const handleNameChange = () => {
    const names = ["Sally", "Kevin", "Myles"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
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
      <p> Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click Here</button>
      {/* use anonymous function "()=>" for indication of function being called only when button is clicked */}
      <button onClick={() => handleClick2("Anita")}>Click Name</button>
      {/* passes event in and returns event target element */}
      <button onClick={(event) => handleClick3(event)}>Click Event</button>

    </main>
  );
};

export default Content;
