import React from 'react';
import ListSelect from '../ListSelect';

import { Article, Footer, Header } from './styles';

const ItemCard: React.FC = () => {
  return (
    <Article>
      <Header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Barry Allen"
        />
        <div>
          <strong>drink.name</strong>
          <span>drink.category</span>
        </div>
      </Header>
      <p>
        drink.description - Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eveniet nemo veritatis ad aliquam expedita eum modi, labore,
        obcaecati beatae illum inventore soluta dignissimos eligendi voluptates
        sapiente, ex dolorem tempora fuga.
      </p>

      <Footer>
        <p>
          <strong>$24.00</strong>
        </p>
        <ListSelect
          name="quantity"
          label=""
          isQuantityCounter
          options={[
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
          ]}
        />
        <button type="button">Place order</button>
      </Footer>
    </Article>
  );
};

export default ItemCard;
