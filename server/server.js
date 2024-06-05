const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/UserRoutes');

const app = express();

app.use(express.json());
app.use(userRoutes);

mongoose.connect('mongodb://localhost:2717/otx_db', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => console.log('Server started on port 3000'));