'use client'
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import { Product } from '../../../interfaces/interfaces'
import { useRouter } from 'next/navigation';

interface ProductTableProps {
  products: Product[];
}  

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const router = useRouter()

  return (
    <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} onClick={() => router.push('/collection/' + product.id)}>
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">${product.price}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.rating.rate} ({product.rating.count} remained)</TableCell>
              <TableCell align="right">
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                    borderRadius: '50%',
                  }}
                  alt={product.title}
                  src={product.image}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default ProductTable;