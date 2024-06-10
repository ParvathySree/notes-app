require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/notes')

app.use(bodyParser.json());

app.use('/notes',noteRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`)
}) 