import React from "react";

const Content = () => {
  // declare all of your functions here
  const handleNameChange = () => {
    const names = ["Sally", "Kevin", "Myles"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    // calling your function expressions below under the Content() return statement
    <main>
      <p> Hello {handleNameChange()} </p>
    </main>
  );
};

export default Content;
