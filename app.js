const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const messageRoutes = require('./src/routes/MessageRotes');


const app = express();

//settings
app.use(express.json());

//middlewares
app.use(morgan('dev'));

//routes
app.use('/api/MS', messageRoutes);

app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});