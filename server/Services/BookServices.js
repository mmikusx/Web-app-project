const Book = require('../Models/Book');
const User = require('../Models/User');
const Chapter = require('../Models/Chapter');

exports.getAllBooks = async () => {
    return await Book.find({});
}

exports.getBookById = async (id) => {
    return await Book.findById(id).populate('comments');
}

exports.createBook = async (bookData) => {
    const book = new Book(bookData);
    return await book.save();
}

exports.updateBook = async (id, BookData) => {
    return await Book.findByIdAndUpdate(id, BookData, { new: true });
}

exports.deleteBook = async (id) => {
    // Delete the book
    await Book.findByIdAndDelete(id);

    // Delete all chapters associated with the book
    await Chapter.deleteMany({ book_id: id });

    // Update the User books array
    await User.updateMany({ books: id }, { $pull: { books: id } });
}

exports.getPopularBooks = async () => {
    return await Book.find().sort({ visits: -1 }).limit(10);
};

exports.getBooksByCategory = async (category) => {
    return await Book.find({ categories: category });
};

exports.searchBooks = async (titleOrAuthor) => {
    return await Book.find({
        $or: [
            { title: { $regex: titleOrAuthor, $options: 'i' } },
            { author: { $regex: titleOrAuthor, $options: 'i' } }
        ]
    });
};

exports.getBooksByUserId = async (userId) => {
    return await Book.find({ uploaded_by: userId });
}

exports.incrementVisits = async (bookId) => {
    return await Book.findByIdAndUpdate(bookId, { $inc: { visits: 0.5 } }, { new: true });
};

exports.appendBookToUser = async (book) => {
    return await User.findByIdAndUpdate(book.uploaded_by, { $push: { books: book._id } });
}