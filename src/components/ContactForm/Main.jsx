//import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { MdOutlineContactPhone } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';

import { Container, PageTitle, SectionTitle } from './Main.module.jsx';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        'contacts-list',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  componentDidMount() {
    if (localStorage.getItem('contacts-list')) {
      const dataFromLocalStorage = localStorage.getItem('contacts-list');
      const parsedDataFromLocalStorage = JSON.parse(dataFromLocalStorage);
      this.setState({
        contacts: parsedDataFromLocalStorage,
      });
    }
  }

  checkDuplicateName = value => {
    let isUnique = true;
    this.state.contacts.map(item => {
      if (item.name.toLowerCase() === value.toLowerCase()) {
        isUnique = false;
      }
      return isUnique;
    });
    return isUnique;
  };
  handleDelete = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemId),
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (this.checkDuplicateName(name) === true) {
      this.setState({
        contacts: [
          ...this.state.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      });
      form.reset();
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <Container>
        <PageTitle>
          Phonebook <MdOutlineContactPhone />
        </PageTitle>
        <ContactForm onSubmit={this.handleSubmit}></ContactForm>

        {this.state.contacts.length !== 0 ? (
          <>
            <SectionTitle>
              Contacts <FcContacts></FcContacts>
            </SectionTitle>
            <Filter filter={this.handleFilter}></Filter>
            <ContactList
              listArray={this.state.contacts}
              filter={this.state.filter}
              onDelete={this.handleDelete}
            ></ContactList>
          </>
        ) : (
          false
        )}
      </Container>
    );
  }
}
