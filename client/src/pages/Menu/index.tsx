import React, { useCallback, FormEvent, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import ListSelect from '../../components/ListSelect';
import { Container, Form } from './styles';
import api from '../../services/api';
import Placeholder from '../../components/Placeholder';
import DrinkCard from '../../components/DrinkCard';

export type Drink = {
  id: string;
  name: string;
  category: string;
  fruit: string;
  description: string;
  pictureUrl?: string;
  price: number;
};

const Menu: React.FC = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [content, setContent] = useState('');
  const [fruit, setFruit] = useState('');

  const searchDrinks = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const response = await api.get('menu', {
        params: {
          content,
          fruit,
        },
      });

      setDrinks(
        response.data.filter(
          (drink: Drink) => drink.category === content && drink.fruit === fruit,
        ),
      );
    },
    [content, fruit],
  );

  return (
    <Container>
      <PageHeader title="Menu">
        <Form onSubmit={searchDrinks}>
          <ListSelect
            name="content"
            label="Content"
            options={[
              { value: 'Beer', label: ' Beer' },
              { value: 'Brandy', label: 'Brandy' },
              { value: 'Gin', label: 'Gin' },
              { value: 'Rum', label: 'Rum' },
              { value: 'Tequila', label: 'Tequila' },
              { value: 'Vodka', label: 'Vodka' },
              { value: 'Whisky', label: 'Whisky' },
              { value: 'Wine', label: 'Wine' },
            ]}
            onChange={e => setContent(e.target.value)}
          />

          <ListSelect
            name="fruit"
            label="Fruit"
            options={[
              { value: 'Blueberry', label: 'Blueberry' },
              { value: 'Strawberry', label: 'Strawberry' },
              { value: 'Lime', label: 'Lime' },
              { value: 'Orange', label: 'Orange' },
            ]}
            onChange={e => setFruit(e.target.value)}
          />

          <button type="submit">Search</button>
        </Form>
      </PageHeader>

      <main>
        {drinks.length !== 0 ? (
          drinks.map(drink => (
            <DrinkCard
              key={drink.id}
              name={drink.name}
              category={drink.category}
              fruit={drink.fruit}
              description={drink.description}
              pictureUrl={drink.pictureUrl}
              price={drink.price}
              drinks={drinks}
              setDrinks={setDrinks}
            />
          ))
        ) : (
          <Placeholder type="menu" />
        )}
      </main>
    </Container>
  );
};

export default Menu;
