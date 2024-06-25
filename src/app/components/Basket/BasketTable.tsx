'use client'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { addItem, deleteItem, removeItem } from '@/redux/slices/cartSlice';
import { CartState, ProductCart } from '@/interfaces/interfaces';
import { TableContainer, Paper, Typography, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const BasketTable = () => {


  const dispatch = useDispatch()
  const cartState: CartState = useSelector((state: RootState) => state.cart);
  const cartItems: ProductCart[] = cartState?.items;
  const router = useRouter()
 
  return (
    <TableContainer component={Paper} >
      <Table sx={{ }} aria-label="shopping cart table">
        <TableHead>
          <TableRow sx={{display:{xs:'none',sm:'none',md:'table-row',lg:'table-row',xl:'table-row'}}}>
            <TableCell>Product</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.length === 0 ? (
            <TableRow>
            <TableCell colSpan={3} align="center">
              <Typography variant='h6'>Your basket is empty!</Typography>
            </TableCell>
          </TableRow>)
            :(
            cartItems.map((item) => (
              <TableRow key={item.id} sx={{display:{xl:'table-row',lg:'table-row',md:'table-row',sm:'flex',xs:'flex'},flexDirection:{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}}}>
                <TableCell component="th" scope="row">
                  <Grid container direction={'row'} onClick={() => router.push('/collection/' + item.id)}>
                    <Grid item lg={2} xl={2} md={3} sm={3} xs={3}>
                      <img src={item.image} width={100} height={100} alt='err' style={{ width: '100px', height: '100px' }}></img>
                    </Grid>
                    <Grid item lg={10} xl={10} md={9} sm={9} xs={9} sx={{ display: 'flex', flexDirection: 'column' }} textAlign={'right'}>
                      <Typography variant='h6'>{item.title.substring(0, 20)} {item.title.length >= 30 && '...'}</Typography>
                      <Typography variant='body1'>{item.description.substring(0, 20)} {item.description.length >= 20 && '...'}</Typography>
                      <Typography variant='body1' sx={{display:{xs:'flex',sm:'flex',md:'none',lg:'none',xl:'none'},alignItems:'end',marginLeft:{xs:'auto',sm:'auto',md:'none',lg:'none',xl:'none'}}} textAlign={'right'}>£{item.price}</Typography>
                    </Grid>
                  </Grid>


                </TableCell>
                <TableCell align="right" sx={{ display: 'table-cell', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Grid container alignItems={'center'} justifyContent={'center'}>
                    <Button onClick={() => dispatch(addItem(item))} sx={{ backgroundColor: 'rgba(249, 249, 249, 1)', color: 'black' }}>+</Button>
                  <Typography variant='body1'>{item.quantity}</Typography>

                  <Button onClick={() => dispatch(removeItem(item.id))} sx={{ backgroundColor: 'rgba(249, 249, 249, 1)', color: 'black' }}>-</Button>

                  </Grid>
                  <Grid container alignItems={'center'} justifyContent={'center'} sx={{marginTop:3}}>
                    <Grid item>
                    <Button onClick={() => dispatch(deleteItem(item.id))} sx={{ backgroundColor: 'rgba(249, 249, 249, 1)', color: 'black',textTransform:'none' }}>Delete item</Button>
                    </Grid>
                  </Grid>
                  
                </TableCell>
                <TableCell align="right" sx={{display:{xs:'none',sm:'none',md:'table-cell',lg:'table-cell',xl:'table-cell'}}}>£{(item.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>)
            ))}

        </TableBody>
      </Table>


    </TableContainer>
  );
};

export default BasketTable