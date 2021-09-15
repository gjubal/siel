import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router';
import OrderCard from '../../components/OrderCard';
import Placeholder from '../../components/Placeholder';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import { Container, Nav, Main } from './styles';

export type OrderProps = {
  id?: string;
  name: string;
  category: string;
  fruit: string;
  pictureUrl: string;
  quantity: number;
  price: number;
  orders: OrderProps[];
  setOrders: Dispatch<SetStateAction<OrderProps[]>>;
};

const Queue: React.FC = () => {
  const { signOut } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    api.get('orders').then(response =>
      response.data.forEach(async ({ name, quantity }: OrderProps) => {
        const r = await api.get('menu', {
          params: {
            name,
          },
        });

        const orderList = r.data.filter(
          (detailedOrder: OrderProps) => detailedOrder.name === name,
        );

        orderList.forEach((order: OrderProps) => (order.quantity = quantity));

        setOrders(orderList);
      }),
    );
  }, []);

  return (
    <Container>
      <Nav>
        <button type="button" onClick={() => history.push('/')}>
          <FiArrowLeft />
        </button>
        <button
          type="button"
          onClick={async () => {
            await signOut();
            await addToast({
              type: 'success',
              title: 'Successfully logged you out',
              description: 'You may log in again at any time.',
            });
            history.push('/');
          }}
        >
          Sign out
        </button>
      </Nav>

      <Main>
        <section>
          {orders.length !== 0 ? (
            orders.map(order => (
              <OrderCard
                key={order.id}
                name={order.name}
                category={order.category}
                fruit={order.fruit}
                quantity={order.quantity}
                pictureUrl={order.pictureUrl}
                price={order.price}
                orders={orders}
                setOrders={setOrders}
              />
            ))
          ) : (
            <Placeholder type="queue" />
          )}
        </section>
      </Main>
    </Container>
  );
};
export default Queue;
