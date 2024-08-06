const express = require('express');
const routes=require('./routes/routing')
const bodyParser=require('body-parser');
app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

app.use('/', routes);
app.listen(3000,(req,res)=>{
console.log('running');

})

