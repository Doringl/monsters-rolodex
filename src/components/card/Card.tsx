import React from 'react';
import { IMonsters } from '../../@types/types';
import { StyledCardContent } from './cardStyles';

const Card: React.FC<IMonsters> = ({ id, name, email }) => {
  return (
    <StyledCardContent>
      <img
        src={`https://robohash.org/${id}?set=set3&size=180x180`}
        alt='monster'
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </StyledCardContent>
  );
};

export default Card;
