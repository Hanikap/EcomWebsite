import React from 'react';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../Slicer/productSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.Product?.products) || [];

  const wishlistItems = products.filter((product) => product.isWishlist);

  const removeFromWishlist = (product) => {
    const updatedProducts = wishlistItems.filter((item) => item.id !== product.id);
    dispatch(update(updatedProducts));
  };

  const addToCart = (product) => {
       const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, isAddedToCart: true, isWishlist: false } : item
    );
    dispatch(update(updatedProducts));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Wishlist
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlistItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell>
                  <Button onClick={() => removeFromWishlist(item)}>Remove</Button>
                  <Button onClick={() => addToCart(item)}>Add to Cart</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Wishlist;
