import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);

  const addProfile = (profile) => {
    const finalProfile = {
      ...profile, id: nanoid()
    }
    setInputValue([finalProfile, ...inputValue]);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addProfile={addProfile}/>
      <SearchBox />
      <ContactList items={inputValue} />
    </div>
  );
}

export default App;
