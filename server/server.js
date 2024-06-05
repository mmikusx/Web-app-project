const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/UserRoutes');

const app = express();

app.use(express.json());
app.use(userRoutes);

mongoose.connect('mongodb://root:example@localhost:27017/')
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch(err => console.error(err));