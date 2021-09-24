import React, { useEffect, useState } from "react";
const defaultImage = 'https://res.cloudinary.com/dljezd6qv/image/upload/v1631577257/react-birthday-reminder/avatar-placeholder.png'
function App() {


  //display property of data attribute on every mouse over
  const handleMouseOver = (e) => {
    console.log(e.target.dataset.property)
  }

  return (
    <main>
      <div className="block bcg-black">
      </div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="random user" className="user-img" />
          <p className="user-title">title</p>
          <p className="user-value">value</p>
          <div className="values-list">
            <button className="icon" data-property="name" onMouseOver={handleMouseOver}>1</button>
            <button className="icon" data-property="email" onMouseOver={handleMouseOver}>2</button>
            <button className="icon" data-property="age" onMouseOver={handleMouseOver}>3</button>
            <button className="icon" data-property="street" onMouseOver={handleMouseOver}>4</button>
            <button className="icon" data-property="phone" onMouseOver={handleMouseOver}>5</button>
            <button className="icon" data-property="password" onMouseOver={handleMouseOver}>6</button>
          </div>
          <button className="btn">random</button>
        </div>
      </div>
    </main>
  );
}

export default App;
