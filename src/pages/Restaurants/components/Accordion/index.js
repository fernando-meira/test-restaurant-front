import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { formatPrice } from '../../../../functions';
import lunch from '../../../../themes/assets/images/prato-de-restaurante-vegetariano@2x.png';

import mock from './dataMock';
import { Container, ItemRestaurant } from './styles';

export default function Example() {
  const data = mock;

  return (
    <Container>
      <Accordion
        allowMultipleExpanded={() => true}
        allowZeroExpanded={() => true}
      >
        {data.map(category => (
          <AccordionItem key={category.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{category.type}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="Panel">
                {category.products.map(product => (
                  <ItemRestaurant key={product.id}>
                    <img src={lunch} alt={product.name} />
                    <div className="PlateDetais">
                      <strong>{product.name}</strong>
                      <p>{product.description}</p>

                      <div className="ProductValues">
                        <span>{formatPrice(product.promotionalValue)}</span>
                        <p>{formatPrice(product.value)}</p>
                      </div>
                    </div>
                  </ItemRestaurant>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
