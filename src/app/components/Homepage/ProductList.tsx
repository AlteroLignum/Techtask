'use client'
import React, { useEffect, useRef, useState } from 'react';
import ProductTable from './ProductTable';
import { Typography } from '@mui/material';
import { Product } from '@/interfaces/interfaces';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '@/redux/slices/cardSlice';

const ProductList: React.FC = () => {
  
  const dispatch = useDispatch<AppDispatch>()
    const flag = useRef(false)

    useEffect(() => {
        if (flag.current === false) {
            dispatch(fetchCards())
        }

        return () => {
            flag.current = true
        }
    }, [])


    const product = useSelector((state: RootState) => state.card.cards as Product[]);

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      <ProductTable products={product} />
    </div>
  );
};

export default ProductList;