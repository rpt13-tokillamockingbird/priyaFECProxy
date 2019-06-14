const express = require('express');
const app = express();
const port = 5000;
var proxy = require('http-proxy-middleware');

app.use('/productBuyerInfo/:id', express.static('client'));
app.use('/hundred', proxy({ target: 'http://localhost:4554', changeOrigin: true }));
app.use('/productBuyerService', proxy({ target: 'http://localhost:4554', changeOrigin: true }));
app.use('/productInfo', proxy({ target: 'http://localhost:4000', changeOrigin: true }));
app.use('/productQtyInfo', proxy({ target: 'http://localhost:4000', changeOrigin: true }));


app.listen(port, () => console.log(`NordStorm is running on port 127.0.0.1:${port}`));

