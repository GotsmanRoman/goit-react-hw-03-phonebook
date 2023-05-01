import React from 'react';

import { Title, Input, Container } from './Filter.module';
import { AiOutlineSearch } from 'react-icons/ai';

const Filter = ({ filter }) => {
  return (
    <Container>
      <Title>
        Find Contacts by name <AiOutlineSearch />
        <Input onChange={event => filter(event)}></Input>
      </Title>
    </Container>
  );
};

export { Filter };
