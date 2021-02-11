import React from 'react';
import { IMonsters } from '../../@types/types';
import Card from '../card/Card';
import { StyledCardList } from './cardListStyles';

interface CardListProps {
  monsters: IMonsters[];
}

const CardList: React.FC<CardListProps> = ({ monsters }) => {
  return (
    <StyledCardList>
      {monsters.map((monster) => (
        <Card key={monster.id} {...monster} />
      ))}
    </StyledCardList>
  );
};

export default CardList;
