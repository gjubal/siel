import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory, useParams } from 'react-router';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { Container, Content, Section } from './styles';

import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { DrinkProps } from '../../components/DrinkCard';
import { Form } from '@unform/web';
import Input from '../../components/Input';

const MenuForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [fruit, setFruit] = useState('');
  const [description, setDescription] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const { signOut } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { id } = useParams<{ id: string }>();

  const onSubmit = useCallback(
    async (data: DrinkProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Drink name is required'),
          category: Yup.string().required('Category is required'),
          fruit: Yup.string().required('Fruit is required'),
          description: Yup.string().required('Description is required'),
          pictureUrl: Yup.string(),
          price: Yup.number().required('Price is required'),
        });

        await schema.validate(data, { abortEarly: false });

        if (id) {
          const response = await api.get(`menu/${id}`);

          if (!response.data) {
            history.push('/menu');

            addToast({
              type: 'error',
              title: 'Unable to find drink to update',
              description: 'Please try again.',
            });
          } else {
            const formData = {
              name,
              price: parseFloat(price),
              category,
              fruit,
              description,
              pictureUrl,
            };

            await api.put(`/menu/${id}`, formData);

            history.push('/menu');

            addToast({
              type: 'success',
              title: 'Drink updated successfully!',
              description: 'The menu has been updated.',
            });
          }
        } else {
          await api.post('/menu', data);

          history.push('/menu');

          addToast({
            type: 'success',
            title: 'Drink added successfully!',
            description: 'The menu has been updated.',
          });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Unable to add new drink',
          description: 'Please try again.',
        });
      }
    },
    [
      addToast,
      history,
      id,
      name,
      category,
      price,
      description,
      fruit,
      pictureUrl,
    ],
  );

  useEffect(() => {
    if (id) {
      api.get(`menu/${id}`).then(response => {
        const { name, category, fruit, price, description, pictureUrl } =
          response.data;

        setName(name);
        setPrice(price);
        setCategory(category);
        setFruit(fruit);
        setDescription(description);

        if (pictureUrl) setPictureUrl(pictureUrl);
      });
    }
  }, [id]);

  return (
    <Container>
      <Sidebar signOut={signOut} />

      <Header type="form" subtitle={id ? 'Edit Drink' : 'Add Drink'} />

      <Content>
        <Section>
          <main>
            <Form onSubmit={onSubmit} ref={formRef}>
              <fieldset>
                <legend>Drink details</legend>
                <Input
                  name="name"
                  label="Name"
                  value={id && name}
                  onChange={e => setName(e.target.value)}
                />

                <Input
                  name="price"
                  label="Price"
                  value={id && price}
                  onChange={e => setPrice(e.target.value)}
                />

                <Select
                  name="category"
                  label="Category"
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
                  value={id && category}
                  onChange={e => setCategory(e.target.value)}
                />

                <Select
                  name="fruit"
                  label="Fruit"
                  options={[
                    { value: 'Blueberry', label: 'Blueberry' },
                    { value: 'Strawberry', label: 'Strawberry' },
                    { value: 'Lime', label: 'Lime' },
                    { value: 'Orange', label: 'Orange' },
                  ]}
                  value={id && fruit}
                  onChange={e => setFruit(e.target.value)}
                />

                <Input
                  name="pictureUrl"
                  label="Picture Link"
                  value={id && pictureUrl}
                  onChange={e => setPictureUrl(e.target.value)}
                />

                <Textarea
                  name="description"
                  label="Description"
                  value={id && description}
                  onChange={e => setDescription(e.target.value)}
                />
              </fieldset>

              <footer>
                <p>Please fill out every field</p>
                <div>
                  {id ? (
                    <button type="submit">Update drink</button>
                  ) : (
                    <button type="submit">Create drink</button>
                  )}
                </div>
              </footer>
            </Form>
          </main>
        </Section>
      </Content>
    </Container>
  );
};
export default MenuForm;
