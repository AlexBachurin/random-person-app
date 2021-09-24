import React, { useEffect, useState } from "react";
const defaultImage = 'https://res.cloudinary.com/dljezd6qv/image/upload/v1631577257/react-birthday-reminder/avatar-placeholder.png'
function App() {

  //state for storing person after fetch
  const [person, setPerson] = useState(null)

  //display property of data attribute on every mouse over
  const handleMouseOver = (e) => {
    console.log(e.target.dataset.property)
  }

  //fetch person, we getting array with single object as response in data.results
  const fetchPersons = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results);
    //transform result to good looking object
    const newPerson = data.results.map(item => {
      const { email, phone } = item;
      const { age } = item.dob;
      const { number, name } = item.location.street;
      const streetName = `${number} ${name}`;
      const { password } = item.login;
      const { first, last } = item.name;
      const fullName = `${first} ${last}`;
      return {
        fullName,
        email,
        phone,
        age,
        streetName,
        password
      }
    })
    console.log(newPerson)
    setPerson(newPerson[0])
  }
  useEffect(() => {
    fetchPersons();

  }, [])

  console.log(person)
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
            <button className="icon" data-property="name" onMouseOver={handleMouseOver}>name</button>
            <button className="icon" data-property="email" onMouseOver={handleMouseOver}>email</button>
            <button className="icon" data-property="age" onMouseOver={handleMouseOver}>age</button>
            <button className="icon" data-property="street" onMouseOver={handleMouseOver}>street</button>
            <button className="icon" data-property="phone" onMouseOver={handleMouseOver}>phone</button>
            <button className="icon" data-property="password" onMouseOver={handleMouseOver}>password</button>
          </div>
          <button className="btn">random</button>
        </div>
      </div>
    </main>
  );
}

export default App;
