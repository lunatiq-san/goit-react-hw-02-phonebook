import { Component } from 'react';
import { v4 } from 'uuid';
import ContactForm from './components/ContactForm';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    this.state.contacts.push(data);
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        {/* <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div> */}

        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ul>
          {visibleContacts.map(contact => (
            <li name={contact.name} id={contact.id} key={v4()}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
