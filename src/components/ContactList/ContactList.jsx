import React from 'react';
import PropTypes from 'prop-types';

import { List, Element, Button } from './ContactList.module';

const ContactList = ({ listArray, filter, onDelete }) => {
  function filterArray() {
    const newArray = listArray.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    return newArray;
  }

  const filteredArray = filterArray();
  return (
    <List>
      {filteredArray
        ? filteredArray.map(({ name, id, number }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {number}
                <Button onClick={() => onDelete(id)} id={id}>
                  Delete
                </Button>
              </Element>
            );
          })
        : listArray.map(({ name, id, number }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {number}
                <Button onClick={() => onDelete(id)} id={id}>
                  Delete
                </Button>
              </Element>
            );
          })}
    </List>
  );
};

ContactList.propTypes = {
  listArray: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
};

export { ContactList };
