import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactos, setContactos] = useState(contacts.slice(0,5));
  const wonOscar=(contact)=>{
    if (contact.wonOscar === true){
      return "🏆"
    }
  }

  return (
    <div className="App">
        <h1>Top 5 Contacts</h1>
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map(contact => (
                    <tr key={contact.id}>
                        <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: 50, height: 50 }} /></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity.toFixed(2)}</td>
                        <td>{wonOscar}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default App;
