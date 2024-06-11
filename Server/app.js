const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/notes');
const port = 5000;

app.use(bodyParser.json());

app.use('/notes',noteRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
}) 