import { Container, Grid } from '@mui/material'
import React from 'react'
import BasketTable from './BasketTable'
import SubtotalCount from './SubtotalCount'


const MainBasket = () => {
  return (
    <>
    <Container maxWidth={false} disableGutters sx={{backgroundColor:'rgba(249, 249, 249, 1)',height:'fit-content',paddingTop:10}}>
        <Container maxWidth={'lg'} sx={{backgroundColor:'rgba(255, 255, 255, 1)',height:'90%',paddingTop:6}}>
          <Grid container direction={'row'} sx={{height:'100%'}} alignItems={'space-between'} justifyContent={'space-between'}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{dispaly:{xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'}}}>
              <BasketTable></BasketTable>
            </Grid>
            
            <Grid item sx={{marginBottom:6}} xs={12} sm={12} md={12} lg={12} xl={12} marginTop={3}>
              <SubtotalCount></SubtotalCount>
            </Grid>
          </Grid>
          
          
        </Container>
    </Container>
    </>
  )
}

export default MainBasket