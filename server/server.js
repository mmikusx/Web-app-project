const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes');
const bookRoutes = require('./Routes/BookRoutes');
const chapterRoutes = require('./Routes/ChapterRoutes');
const commentRoutes = require('./Routes/CommentRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);
app.use(chapterRoutes);
app.use(commentRoutes);

mongoose.connect('mongodb://root:supertajnehas%C5%82oniedozgadni%C4%99cia@172.104.249.16:27017/book_database?authSource=admin')
    .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
    .catch(err => console.error(err));