'use client'
import { Product, ProductCart } from '@/interfaces/interfaces'
import { addItem } from '@/redux/slices/cartSlice'
import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

interface ButtonProps{
    product:ProductCart
}


const ButtonBasket:React.FC<ButtonProps> = ({product}) => {
    const dispatch = useDispatch()
     
    const handleAddBasket = (product:ProductCart) => {
        dispatch(addItem(product))
    }
    
  return (
    <Button sx={{ backgroundColor: 'rgba(42, 37, 75, 1)', color: 'white', paddingY: 2, paddingX: 3, textTransform: 'none' ,"&:hover": {
      backgroundColor: 'rgba(42, 37, 75, 1)', color: 'white'
    }}} onClick={() => handleAddBasket(product)}>Add to cart</Button>
  ) 
}

export default ButtonBasket