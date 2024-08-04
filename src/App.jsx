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

  const [search, setsearch] = useState("");

  const addProfile = (profile) => {
    const finalProfile = {...profile, id: nanoid()}
    setInputValue([finalProfile, ...inputValue]);
  };

  const deleteProfile = (profileid) => {
    setInputValue(inputValue.filter(item => item.id !== profileid))
  };

  const filter = (e) => {
    const filterValue = e.target.value;
    setsearch(filterValue);
  }

  const filterItems = inputValue.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addProfile={addProfile}/>
      <SearchBox value={search} filter={filter}/>
      <ContactList items={filterItems} deleteProfile={deleteProfile} />
    </div>
  );
}

export default App;
