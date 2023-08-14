const express = require('express');
const fs = require('fs/promises');
const path = require('path');
var cors = require('cors');

const app = express();
const port = 5000;

const productsFilePath = path.join(__dirname, 'products', 'index.get.json');
const categoriesFilePath = path.join(__dirname,  'categories', 'index.get.json');
const bannersFilePath = path.join(__dirname, 'banners', 'index.get.json');
const addToCartFilePath = path.join(__dirname, 'addToCart', 'index.post.json');

app.use(cors())

app.get('/addToCart', async (req, res) => {
    try {
      const data = await fs.readFile(addToCartFilePath, 'utf8');
      const addToCartResponse = JSON.parse(data);
      res.json(addToCartResponse);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/banners', async (req, res) => {
    try {
      const data = await fs.readFile(bannersFilePath, 'utf8');
      const banners = JSON.parse(data);
      res.json(banners);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/categories', async (req, res) => {
  try {
    const data = await fs.readFile(categoriesFilePath, 'utf8');
    const categories = JSON.parse(data);
    res.json(categories);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get all products
app.get('/products', async (req, res) => {
    try {
      const data = await fs.readFile(productsFilePath, 'utf8');
      const products = JSON.parse(data);
      res.json(products);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// get product by category id
app.get('/products/categoryId/:categoryId', async (req, res) => {
  const categoryId = req.params.categoryId;

  if (!categoryId) {
    return res.status(400).json({ error: 'Invalid product category' });
  }

  try {
    const data = await fs.readFile(productsFilePath, 'utf8');
    const products = JSON.parse(data);

    const filteredProducts = products.filter(product => product.category == categoryId);
    res.json(filteredProducts);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get product by category name
app.get('/products/category/:categoryName', async (req, res) => {
  const categoryKey = req.params.categoryName;

  try {
    const data1 = await fs.readFile(categoriesFilePath, 'utf8');
    const categories = JSON.parse(data1);

    const filteredCategory = categories.filter(category => category.key == categoryKey);

    const data2 = await fs.readFile(productsFilePath, 'utf8');
    const products = JSON.parse(data2);

    const filteredProducts = products.filter(product => product.category == filteredCategory[0].id);
    res.json(filteredProducts);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});













// const http = require('http');

// const hostname = "127.0.0.1";
// const port = 5000;
// import products from "./server/products"

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if(url === "/") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello World\n');
//     } else if(url === "/products") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(JSON.stringify(products));
//     } else if(url === "banners") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Banners\n');
//     } else if(url === "categories") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Categories\n');
//     } else if(url === "addToCart") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Add to cart\n');
//     } else {
//         res.statusCode = 400;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Invalid Request\n');
//     }
    
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })