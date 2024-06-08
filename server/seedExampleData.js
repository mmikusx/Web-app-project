const mongoose = require('mongoose');
const Book = require('./models/Book');
const User = require('./models/User');
const Comment = require('./models/Comment');
const Chapter = require('./models/Chapter');

mongoose.connect('mongodb://root:example@localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const bookData = [];
const userData = [];
const commentData = [];
const chapterData = [];

const userIds = [];
const bookIds = [];
const chapterIds = [];

for (let i = 0; i < 50; i++) {
    const userId = new mongoose.Types.ObjectId();
    const bookId = new mongoose.Types.ObjectId();
    const chapterId = new mongoose.Types.ObjectId();

    userIds.push(userId);
    bookIds.push(bookId);
    chapterIds.push(chapterId);

    userData.push({
        _id: userId,
        username: `User ${i}`,
        password: `Password ${i}`,
        // Add other user fields as needed
    });

    bookData.push({
        _id: bookId,
        title: `Book Title ${i}`,
        author: `Author ${i}`,
        description: `This is a description for Book Title ${i}`,
        categories: [`Category ${i}`],
        visits: Math.floor(Math.random() * 100),
        uploaded_by: userIds[Math.floor(Math.random() * userIds.length)],
        cover_image: `URL to image ${i}`,
        // Add other book fields as needed
    });

    chapterData.push({
        _id: chapterId,
        title: `Chapter Title ${i}`,
        content: `This is content for Chapter Title ${i}`,
        book: bookIds[Math.floor(Math.random() * bookIds.length)],
        // Add other chapter fields as needed
    });

    commentData.push({
        text: `This is a comment ${i}`,
        user: userIds[Math.floor(Math.random() * userIds.length)],
        chapter: chapterIds[Math.floor(Math.random() * chapterIds.length)],
        // Add other comment fields as needed
    });
}

const insertData = async () => {
    await User.insertMany(userData);
    await Book.insertMany(bookData);
    await Chapter.insertMany(chapterData);
    await Comment.insertMany(commentData);
}

insertData()
    .then(() => {
        console.log('Data inserted')  // Success
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error)  // Failure
        mongoose.connection.close();
    });