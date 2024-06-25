'use client'
import { CartState, ProductCart } from '@/interfaces/interfaces'
import { clearCart } from '@/redux/slices/cartSlice'
import { RootState } from '@/redux/store'
import { Button, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SubtotalCount = () => {

  const router = useRouter()
  const cartState: CartState = useSelector((state: RootState) => state.cart);
  const cartItems: ProductCart[] = cartState?.items;
  const dispatch = useDispatch()


  const calculateTotal = (items: any[]): number =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Grid container justifyContent={'space-between'}>
        <Grid item>
          <Typography variant='subtitle1' sx={{ color: 'rgba(78, 77, 147, 1)' }}>Taxes and shipping are calculated at checkout</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' sx={{ color: 'rgba(78, 77, 147, 1)' }}>Subtotal £{calculateTotal(cartItems).toFixed(2)}</Typography>
          <Button onClick={() => dispatch(clearCart())} sx={{
            backgroundColor: 'rgba(42, 37, 75, 1)',marginX:4, color: 'white', paddingY: 2, paddingX: 3, textTransform: 'none', marginTop: 2, "&:hover": {
              backgroundColor:'rgba(42, 37, 75, 1)', color: 'white',
            }
          }}>Clear basket</Button>
          <Button onClick={() => router.push('/')} sx={{
            backgroundColor: 'rgba(42, 37, 75, 1)', color: 'white', paddingY: 2, paddingX: 3, textTransform: 'none', marginTop: 2, "&:hover": {
              backgroundColor:'rgba(42, 37, 75, 1)', color: 'white',
            }
          }}>Go to checkout</Button>
          <Button sx={{
            backgroundColor: 'rgba(42, 37, 75, 1)',marginX:4, color: 'white', paddingY: 2, paddingX: 3, textTransform: 'none', marginTop: 2, "&:hover": {
              backgroundColor:'rgba(42, 37, 75, 1)', color: 'white',
            }
          }}>Order</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default SubtotalCount