'use client'
import { Badge} from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const ShoppingCart = () => {
    
    const quantity:number = useSelector((state: RootState) => state.cart.items.length)

  return (
    <>
    
      <Badge badgeContent={quantity} color="success">
        <AddShoppingCartIcon />
      </Badge>
    
    </>
  )
}

export default ShoppingCart