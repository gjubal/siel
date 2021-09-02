import React from 'react';

import { Article, Footer, Header } from './styles';

const OrderCard: React.FC = () => {
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

      <Footer>
        <p>
          <strong>$24.00</strong>
        </p>
        <p>quantity</p>
        <p>Total: $24.00</p>
        <button type="button">Mark as complete</button>
      </Footer>
    </Article>
  );
};

export default OrderCard;
