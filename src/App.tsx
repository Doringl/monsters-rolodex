import React, { useEffect, useState } from 'react';
import { IMonsters } from './@types/types';
import { StyledApp, StyledHTag, StyledInput } from './assets/appStyles';
import CardList from './components/cardList/CardList';

const App: React.FC = () => {
  const [monsters, setMonsters] = useState<[IMonsters]>([
    { id: 0, name: '', email: '' },
  ]);

  const [searchField, setSearchField] = useState<string>('');

  useEffect(() => {
    const getMonsters = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setMonsters(data);
    };

    getMonsters();
    return () => {
      setMonsters([{ id: 0, name: '', email: '' }]);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <StyledApp>
      <StyledHTag>Monsters Rolodex</StyledHTag>
      <StyledInput
        type='search'
        placeholder='Search Monsters'
        onChange={onChange}
      />
      <CardList monsters={filteredMonsters} />
    </StyledApp>
  );
};

export default App;
