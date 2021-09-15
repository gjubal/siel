import React, { Dispatch, SetStateAction, useCallback, useRef } from 'react';

import { Article, CardHolder, Footer, Header } from './styles';

import unavailableImage from '../../assets/unavailable.jpeg';
import ListSelect from '../ListSelect';
import CardIcon from '../CardIcon';
import api from '../../services/api';
import { Drink } from '../../pages/Menu';
import { generatePath, useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

export type DrinkProps = {
  name: string;
  category: string;
  fruit: string;
  description: string;
  pictureUrl?: string;
  price: number;
  drinks: Drink[];
  setDrinks: Dispatch<SetStateAction<Drink[]>>;
};

const DrinkCard: React.FC<DrinkProps> = ({
  name,
  category,
  fruit,
  description,
  pictureUrl,
  price,
  drinks,
  setDrinks,
}) => {
  const nameRef = useRef<HTMLElement>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { user } = useAuth();

  const findDrinkToEdit = useCallback(() => {
    api.get('menu').then(response => {
      const findDrink: Drink = response.data.find(
        (drink: DrinkProps) => drink.name === nameRef.current?.innerText,
      );

      if (findDrink) {
        api.get(`menu/${findDrink.id}`).then(response => {
          history.push(
            generatePath('/menu/:id/edit', { id: response.data.id }),
          );
        });
      }
    });
  }, [history]);

  const onDelete = useCallback(() => {
    api.get('menu').then(async response => {
      const findDrink: Drink = response.data.find(
        (drink: DrinkProps) => drink.name === nameRef.current?.innerText,
      );

      if (findDrink) {
        setDrinks(drinks.filter(drink => drink.id !== findDrink.id));
        await api.delete(`menu/${findDrink.id}`);

        addToast({
          type: 'success',
          title: 'Drink removed successfully!',
          description: 'The menu has been updated.',
        });
      }
    });
  }, [drinks, setDrinks, addToast]);

  return (
    <Article>
      <Header isUser={!!user}>
        <img src={pictureUrl ? pictureUrl : unavailableImage} alt={name} />
        <div>
          <strong ref={nameRef}>{name}</strong>
          <span>
            {category} - {fruit}
          </span>
        </div>

        {user && (
          <CardHolder>
            <CardIcon label="edit" onClick={findDrinkToEdit} />
            <CardIcon label="remove" onClick={onDelete} />
          </CardHolder>
        )}
      </Header>
      <p>{description}</p>

      <Footer>
        <p>
          <strong>${price}</strong>
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

export default DrinkCard;
