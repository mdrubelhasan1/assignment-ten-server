const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/category.json')
const chefdata = require('./data/chefdata.json')
const bannerphoto = require('./data/bannerphoto.json')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('assignment-ten is running')
})

app.get('/categories', (req, res)=>{
    res.send(categories)
})
app.get('/chefdata',(req, res)=>{
    res.send(chefdata)
})
app.get('/bannerphoto', (req, res)=>{
    res.send(bannerphoto)
})

app.listen(port, ()=> {
    console.log(`Assignment-ten is running on port: ${port}`)
})