'use client'
import { Button, Container, Dialog, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import NextLink from 'next/link'
import Link from '@mui/material/Link'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation'
import ShoppingCart from './ShoppingCart'


const Header = () => {

    const [open, setOpen] = useState(false)

    const router = useRouter()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openTwo = Boolean(anchorEl);

    const handleClickOne = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseOne = () => {
        setAnchorEl(null);
    };

    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)  
    }


    return (
        <>
            <Container maxWidth={false}>
                <Grid container justifyContent={'space-around'} sx={{ color: 'var(--purple)' }} alignItems={'center'} gap={3}>
                    <Grid item sx={{ color: 'var(--purple)' }} onClick={() => router.push('/')}>
                        <Typography variant='h3' sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 400, color: '#22202E' }}>Oodji</Typography>
                    </Grid>
                    
                    <Grid item sx={{ marginLeft: 'auto', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                        <Link href='/' component={NextLink} underline='none' sx={{ color: '#726E8D' }}>Contact us</Link>
                        <Link href='/' component={NextLink} underline='none' sx={{ marginX: 3, color: '#726E8D' }}>About</Link>
                        <Link href='/' component={NextLink} underline='none' sx={{ color: '#726E8D' }}>Blog</Link>
                        <Button color="inherit" onClick={handleClickOne} sx={{ marginX: 3, color: '#726E8D',marginY:'auto',padding:0 , textTransform:'none'}}>
                            More
                        </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openTwo}
                        onClose={handleCloseOne}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseOne}>Profile</MenuItem>
                        <MenuItem onClick={handleCloseOne}>My account</MenuItem>
                        <MenuItem onClick={handleCloseOne}>Logout</MenuItem>
                    </Menu>
                    </Grid>
                    <Grid item sx={{ color: 'inherit', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                        <IconButton onClick={() => router.push('/')}>
                            <SearchIcon sx={{ backgroundColor: 'var(--purple)' }}></SearchIcon>
                        </IconButton>
                        <IconButton onClick={() => router.push('/basket')}>
                            
                            <ShoppingCart />
                                
                        </IconButton>
                        <IconButton>
                            <PersonOutlineIcon></PersonOutlineIcon>
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ color: 'inherit', display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
                        <IconButton onClick={handleClick}>
                            <MenuIcon>

                            </MenuIcon>
                        </IconButton>

                    </Grid>
                    <Dialog fullScreen
                        open={open}
                        onClose={handleClose}
                    >
                        <Container maxWidth={'lg'} sx={{ height: '80%' }}>
                            <Grid container direction={'column'} justifyContent={'space-around'} textAlign={'center'} sx={{ height: '100%' }}>
                                <Grid item sx={{ flexDirection: 'column', display: 'flex' }}>
                                    <Link href='/' variant='h4' component={NextLink} underline='none' sx={{ color: '#726E8D' }}>Contact us</Link>
                                    <Link href='/' variant='h4' component={NextLink} underline='none' sx={{ marginX: 3, color: '#726E8D' }}>About</Link>
                                    <Link href='/' variant='h4' component={NextLink} underline='none' sx={{ color: '#726E8D' }}>Blog</Link>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={handleClose}>
                                        <CloseIcon></CloseIcon>
                                    </IconButton>
                                </Grid>
                            </Grid>

                        </Container>
                    </Dialog>
                </Grid>
            </Container>
        </>
    )
}

export default Header