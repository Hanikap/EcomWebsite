import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';


const Compare = () => {
  const compareItems = useSelector((state) => state?.Product?.products?.filter((product) => product));
  //2nd step
  const [selectedCategory, setSelectedCategory] = useState('');


  //3rd step
  const filteredItems = selectedCategory === 'All' ? compareItems : compareItems.filter(item => item.category === selectedCategory);
  //2nd step
  const uniqueCategories = [...new Set(compareItems?.map(item => item.category))];

  //4th step step
  const compareData = filteredItems?.filter(item => item.isCompare);
  return (
    <Container>
    
      <Typography variant="h4" align="center" gutterBottom>
        Compare product
      </Typography>
      <Select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
        label="Category"
      >
        <MenuItem value="All">All</MenuItem>
        {uniqueCategories.map(category => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      {compareData.length === 0 ? (
        <Typography variant="body1" align="center" gutterBottom>
          No products to compare.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {compareData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell align="right">
                    <img src={item.image} width="100" height="100" alt={item.title} />
                  </TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">{item.category}</TableCell>
                  <TableCell align="right">{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Compare;