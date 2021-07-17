// 1. У input value привязать к state.name
// 2. Создать метод обновления состояния инпута
// 3. Привязать изменение state.name к изменению input
// 4. Получить телефон number, создать еще один label

import { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    const { value } = event.currentTarget;

    this.setState({ name: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.state.contacts.push(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li name={contact.name} id={v4()} key={v4()}>
              {contact}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
