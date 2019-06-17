const express = require('express');
const app = express();
const port = 5000;
var proxy = require('http-proxy-middleware');
var cors = require('cors');
app.use(cors());

app.use('/:id', express.static('client'));
app.use('/hundred/:id', proxy({ target: 'http://localhost:4554', changeOrigin: true }));
app.use('/productInfo', proxy({ target: 'http://localhost:4000', changeOrigin: true }));
app.use('/productBuyerService/:id', proxy({ target: 'http://localhost:4554', changeOrigin: true }));
app.use('/productQtyInfo', proxy({ target: 'http://localhost:4000', changeOrigin: true }));
app.use('/Priya/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }));


app.listen(port, () => console.log(`NordStorm is running on port 127.0.0.1:${port}`));

