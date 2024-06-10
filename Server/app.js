const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const noteRoutes = require('./routes/notes')

app.use(bodyParser.json());

app.use('/notes',noteRoutes)

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})