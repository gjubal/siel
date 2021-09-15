import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Nav, NavContent, Content, Section } from './styles';

import Button from '../../components/Button';
import logoImg from '../../assets/logo-up-md-green.svg';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const Home: React.FC = () => {
  const { user, signOut } = useAuth();
  const { addToast } = useToast();

  return (
    <Container>
      <Nav>
        <img src={logoImg} alt="Logo" />
        <NavContent>
          {user ? (
            <button
              type="button"
              onClick={async () => {
                await signOut();
                await addToast({
                  type: 'success',
                  title: 'Successfully logged you out',
                  description: 'You may log in again at any time.',
                });
              }}
            >
              Sign out
            </button>
          ) : (
            <>
              <Link to="/signin">Log in</Link>
              <Link to="/signup">Register</Link>
            </>
          )}
        </NavContent>
      </Nav>

      <Content>
        <Section>
          <strong>Welcome to Siel</strong>
          <p>The order management system for the Osprey Bar</p>

          {user && (
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          )}
          <Link to="/menu">
            <Button>Menu</Button>
          </Link>
        </Section>
      </Content>
    </Container>
  );
};
export default Home;
