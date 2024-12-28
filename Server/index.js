const express = require('express');
const Connect = require('./DB');
const app = express();

/// Connect to MongoDB
Connect();


app.get('/', (req, res) => {    
    res.send('Hello World');
});     

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});