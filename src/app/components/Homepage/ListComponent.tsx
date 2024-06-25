'use client'
import { ProductCart } from '@/interfaces/interfaces'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import axios from 'axios'
import ButtonBasket from './ButtonBusket'
import { useRouter } from 'next/navigation'

interface IList{
    id:string
}

const getData = async({id}:IList) =>{
    const res = await axios.get<ProductCart>('https://fakestoreapi.com/products/' + id)
    if(!res){
        throw new Error('Failed to fetch data')
    }
    
    return res.data
    
}


const ListComponent: React.FC<IList>= async ({id}) => {
    const router = useRouter()
    const product = await getData({id})
    
    return (
        <>
        <Container maxWidth={false}>
                     <Grid container spacing={5} sx={{}} marginBottom={10} marginTop={1} justifyContent={'space-around'}>
                         <Grid item xs={12} sm={9} md={6} lg={4} xl={3}>
                            

                             <img src={product.image}
                                 alt='err'
                                 
                                 
                                 width={250}
                                 height={275}></img>
                         </Grid>
                         <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', height: '100%', alignItems: 'space-around', gap: 3 }}>
                                 <Typography variant='h4'>{product?.title}</Typography>
                                 <Typography variant='h5'>£{product?.price}</Typography>
                                 <Typography variant='h6'>Product description: {product?.description}</Typography>
                                 
                                 <Box>
                                     
                                        <ButtonBasket product={product}></ButtonBasket>
                                        <Button sx={{ backgroundColor: 'rgba(42, 37, 75, 1)', marginX:4, color: 'white', paddingY: 2, paddingX: 3, textTransform: 'none' ,"&:hover": {
                                            backgroundColor: 'rgba(42, 37, 75, 1)', color: 'white'
                                            }}} onClick={() => router.push('/')}>Go to checkout</Button>
                                 </Box> 
                             </Box>
                         </Grid>
                     </Grid>
                 </Container>
        </>
    
    )
}

export default ListComponent
