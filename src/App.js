import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { FaStreetView, FaGem } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import Loading from "./components/Loading";
const defaultImage = 'https://res.cloudinary.com/dljezd6qv/image/upload/v1631577257/react-birthday-reminder/avatar-placeholder.png'
function App() {

  //state for storing person after fetch
  const [person, setPerson] = useState(null)
  //state for value of hovered element and state for value of current person element
  const [title, setTitle] = useState(null);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);

  //display property of data attribute on every mouse over
  const handleMouseOver = (e) => {

    //need to use currentTarget since we have icons inside buttons
    const title = e.currentTarget.dataset.property;
    setTitle(title);
    //get value based on current hovered title from person state
    const value = person[title];
    setValue(value);
  }

  //fetch person, we getting array with single object as response in data.results
  const fetchPersons = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    //transform result to good looking object
    const newPerson = data.results.map(item => {
      const { email, phone } = item;
      const { age } = item.dob;
      const { number, name } = item.location.street;
      const street = `${number} ${name}`;
      const { password } = item.login;
      const { first, last } = item.name;
      const fullName = `${first} ${last}`;
      const { thumbnail } = item.picture;
      return {
        name: fullName,
        email,
        phone,
        age,
        street,
        password,
        thumbnail
      }
    })
    setPerson(newPerson[0])
    //also show default value and title to name
    setTitle('name');
    console.log(newPerson)
    setValue(newPerson[0].name);
    setLoading(false);
  }
  useEffect(() => {
    fetchPersons();

  }, [])


  //component for display info of person after loading
  const PersonInfo = () => {
    return (
      <>
        <img src={person.thumbnail ? person.thumbnail : defaultImage} alt="random user" className="user-img" />
        <p className="user-title">My {title} is</p>
        <p className="user-value">{value}</p>
        <div className="values-list">
          <button className="icon" data-property="name" onMouseOver={handleMouseOver}><BsFillPersonFill /></button>
          <button className="icon" data-property="email" onMouseOver={handleMouseOver}><AiOutlineMail /></button>
          <button className="icon" data-property="age" onMouseOver={handleMouseOver}><FaGem /></button>
          <button className="icon" data-property="street" onMouseOver={handleMouseOver}><FaStreetView /></button>
          <button className="icon" data-property="phone" onMouseOver={handleMouseOver}><AiFillPhone /></button>
          <button className="icon" data-property="password" onMouseOver={handleMouseOver}><RiLockPasswordFill /></button>
        </div>
        <button onClick={() => fetchPersons()} className="btn">choose random</button>
      </>
    )
  }

  return (
    <main>
      <div className="block bcg-black">
      </div>
      <div className="block">
        <div className="container">
          {loading ? <Loading /> : <PersonInfo />}
        </div>
      </div>
    </main>
  );


}



export default App;
