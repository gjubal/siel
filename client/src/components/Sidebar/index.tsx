import React from 'react';

import { Link } from 'react-router-dom';
import { BiDrink, BiFoodMenu } from 'react-icons/bi';
import { FiHome, FiPower } from 'react-icons/fi';
import { Container, SidebarContent } from './styles';

import logoImg from '../../assets/logo-up-dashboard.svg';

interface AuthProps {
  signOut(): void;
}

const Sidebar: React.FC<AuthProps> = ({ signOut }) => {
  return (
    <Container>
      <SidebarContent>
        <Link to="/">
          <img src={logoImg} alt="Siel" />
        </Link>

        <div>
          <Link to="/">
            <FiHome />
          </Link>

          <Link to="/menu">
            <BiFoodMenu />
          </Link>

          <Link to="/dashboard/orders">
            <BiDrink />
          </Link>
        </div>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </SidebarContent>
    </Container>
  );
};

export default Sidebar;
