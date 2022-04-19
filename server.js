const express = require('express');
const { appendFile } = require('fs');
const app = express();

const port = process.env.PORT || 3000;
 
app.set('view engine', 'ejs');

//home route
app.get('/', (req, res)=> {
    res.render('base', {title: "Login System"})
})

app.listen(port, ()=> {
    console.log("Listining on the server on port: ", port)
})