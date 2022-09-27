import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAllProducts } from '../../../../redux/actions/index';
import CardProduct from './CardProduct';

import { useEffect } from 'react';

const CardsProduct = () => {

  let dispatch = useDispatch();

  let products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      {
        products && products.map(p => (
          <CardProduct
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            image={p.image}
            disable={p.disable}
            like={p.like}
            stock={p.stock}
            sale_count={p.sale_count}
            cost={p.cost}
            margin={p.margin}
            // diets={p.diets}
            // categories={p.categories}
            // providers={p.providers}
          ></CardProduct>
        ))
      }
    </div>
  );
};

export default CardsProduct