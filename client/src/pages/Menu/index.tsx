import React from 'react';

import PageHeader from '../../components/PageHeader';
import ItemCard from '../../components/ItemCard';
import ListSelect from '../../components/ListSelect';
import { Container, Form } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Menu">
        <Form>
          <ListSelect
            name="content"
            label="Content"
            options={[
              { value: 'beer', label: ' Beer' },
              { value: 'brandy', label: 'Brandy' },
              { value: 'gin', label: 'Gin' },
              { value: 'rum', label: 'Rum' },
              { value: 'tequila', label: 'Tequila' },
              { value: 'vodka', label: 'Vodka' },
              { value: 'whisky', label: 'Whisky' },
              { value: 'wine', label: 'Wine' },
            ]}
          />

          <ListSelect
            name="fruit"
            label="Fruit"
            options={[
              { value: 'blueberry', label: 'Blueberry' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'lemon', label: 'Lemon' },
              { value: 'lime', label: 'Lime' },
              { value: 'orange', label: 'Orange' },
            ]}
          />
        </Form>
      </PageHeader>

      <main>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </main>
    </Container>
  );
};

export default Menu;
