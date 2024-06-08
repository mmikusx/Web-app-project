const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes');
const bookRoutes = require('./Routes/BookRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);

mongoose.connect('mongodb://root:example@localhost:27017/')
    .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
    .catch(err => console.error(err));