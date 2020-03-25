import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Container, LogoRestaurant, OpenOrClosed } from './styles';

export default function RestaurantList({ restaurants }) {
  // console.log('Restaurant', restaurants);
  return (
    <Container>
      {restaurants.map(restaurant => (
        <Link
          to={`/restaurants/${restaurant.id_restaurant}`}
          key={restaurant.id_restaurant}
        >
          <li>
            <LogoRestaurant
              backgroundImage={
                restaurant.id_picture ? restaurant.picture.url : logo
              }
            />

            <div>
              <strong>{restaurant.name}</strong>
              {restaurant.address.map(add => (
                <span key={add.id_address}>{`${add.street}, ${
                  add.number === null ? 'S/N' : add.number
                }, ${add.district}, ${add.city}, ${add.state}`}</span>
              ))}
            </div>

            <OpenOrClosed status={restaurant.schedule[0]?.isOpen}>
              {restaurant.schedule[0]?.isOpen ? (
                <p>Aberto agora</p>
              ) : (
                <p>Fechado</p>
              )}
            </OpenOrClosed>
          </li>
        </Link>
      ))}
    </Container>
  );
}
