import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { SearchContact } from './SearchContact/SearchContact';

import css from './App.module.css';
import { nanoid } from 'nanoid';

export class App extends Component {
  INITIAL_STATE = {
    contacts: [
      { name: 'Vasil', number: '+380123456789', id: nanoid() },
      { name: 'Stepan', number: '+382342348737', id: nanoid() },
      { name: 'Oleh', number: '+382634174942', id: nanoid() },
    ],
    filter: '',
  };
  state = { ...this.INITIAL_STATE };
  addToContact = item => {
    let isInList = this.state.contacts.some(
      itemContact =>
        itemContact.name.toLocaleLowerCase() === item.name.toLocaleLowerCase()
    );

    console.log(item.name.toLocaleLowerCase());

    isInList
      ? alert(`${item.name} is already in contacts!`)
      : this.setState({
          contacts: [...this.state.contacts, { ...item, id: nanoid() }],
        });
  };
  filterContact = searchWords => {
    this.setState({ filter: searchWords });
  };
  removeItem = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
    console.log(id);
  };
  visibleContacts = () => {
    const newContacts = this.state.contacts.filter(item =>
      item.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
    return this.state.filter === '' ? this.state.contacts : newContacts;
  };
  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parseContacts =
      JSON.parse(stringifiedContacts) ?? this.INITIAL_STATE.contacts;
    this.setState({ contacts: parseContacts });
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  render() {
    return (
      <div className={css.main_container}>
        <Form addToContact={this.addToContact} />
        <SearchContact
          value={this.state.filter}
          filterContact={this.filterContact}
        />
        <ContactList
          contacts={this.visibleContacts()}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}
