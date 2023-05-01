//import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { MdOutlineContactPhone } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';

import {
  ContactForm,
  Label,
  Input,
  Button,
  Container,
  PageTitle,
  SectionTitle,
} from './ContactForm.styled';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

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
        <ContactForm onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></Input>
          </Label>
          <Label>
            Telephone
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></Input>
          </Label>

          <Button type="submit">Add contact</Button>
        </ContactForm>
        <SectionTitle>
          Contacts <FcContacts />
        </SectionTitle>
        <Filter filter={this.handleFilter}></Filter>
        <ContactList
          listArray={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.handleDelete}
        />
      </Container>
    );
  }
}
