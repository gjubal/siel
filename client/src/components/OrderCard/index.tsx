import React, { useCallback, useRef } from 'react';
import { useToast } from '../../hooks/toast';
import { OrderProps } from '../../pages/Queue';
import api from '../../services/api';

import { Article, Footer, Header } from './styles';

export type Order = {
  id: string;
  name: string;
  quantity: number;
};

const OrderCard: React.FC<OrderProps> = ({
  name,
  category,
  fruit,
  pictureUrl,
  price,
  quantity,
  orders,
  setOrders,
}) => {
  const nameRef = useRef<HTMLElement>(null);
  const { addToast } = useToast();

  const markOrderAsComplete = useCallback(() => {
    api.get('orders').then(async response => {
      const findOrder: Order = response.data.find(
        (o: OrderProps) => o.name === nameRef.current?.innerText,
      );

      if (findOrder) {
        setOrders(orders.filter(order => order.id !== findOrder.id));
        await api.delete(`orders/${findOrder.id}`);

        addToast({
          type: 'success',
          title: 'Drink completed!',
          description: 'The queue has been updated.',
        });
      }
    });
  }, [orders, setOrders, addToast]);

  return (
    <Article>
      <Header>
        <img src={pictureUrl} alt={name} />
        <div>
          <strong ref={nameRef}>{name}</strong>
          <span>
            {category} - {fruit}
          </span>
        </div>
      </Header>

      <Footer>
        <p>
          <strong>${price}</strong>
        </p>
        <p>
          Quantity: <span>{quantity}</span>
        </p>
        <p>
          Total: $ <span>{(price * quantity).toFixed(2)}</span>
        </p>
        <button type="button" onClick={markOrderAsComplete}>
          Mark as complete
        </button>
      </Footer>
    </Article>
  );
};

export default OrderCard;
