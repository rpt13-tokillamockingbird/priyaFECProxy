const express = require('express');
const app = express();
const port = 5000;
var proxy = require('http-proxy-middleware');
var cors = require('cors');
app.use(cors());

console.log("pp");

app.use('/:id', express.static('client'));
app.use('/hundred/:id', proxy({ target: 'http://ec2-54-175-0-74.compute-1.amazonaws.com', changeOrigin: true }));
app.use('/productInfo/:id', proxy({ target: 'http://ec2-3-86-76-90.compute-1.amazonaws.com', changeOrigin: true }));
app.use('/productBuyerService/:id', proxy({ target: 'http://ec2-54-175-0-74.compute-1.amazonaws.com', changeOrigin: true }));
app.use('/productQtyInfo', proxy({ target: 'http://ec2-3-86-76-90.compute-1.amazonaws.com', changeOrigin: true }));
app.use('/Priya/:id', proxy({ target: 'http://ec2-54-196-121-70.compute-1.amazonaws.com', changeOrigin: true }));
app.use('/review/:id', proxy({ target: 'http://ec2-54-196-121-70.compute-1.amazonaws.com', changeOrigin: true }));

app.listen(port, () => console.log(`NordStorm is running on port 127.0.0.1:${port}`));

