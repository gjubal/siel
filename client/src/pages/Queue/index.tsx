import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router';
import OrderCard from '../../components/OrderCard';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Nav, Main } from './styles';

type DrinkProps = {
  name: string;
  quantity: number;
  price: number;
};

type OrderProps = {
  drinks: DrinkProps[];
};

const Queue: React.FC = () => {
  const { signOut } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const [orders, setOrders] = useState<OrderProps[]>([]);

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
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </Main>
    </Container>
  );
};
export default Queue;
