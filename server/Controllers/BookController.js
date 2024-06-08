const BookServices = require('../services/BookServices');

exports.books = async (req, res) => {
    const books = await BookServices.getAllBooks();
    return res.json(books);
}

exports.show_book = async (req, res) => {
    const book = await BookServices.getBookById(req.params.id);
    return res.json(book);
}

exports.create = async (req, res) => {
    const book = await BookServices.createBook(req.body);
    return res.json(book);
}

exports.update = async (req, res) => {
    const updatedbook = await BookServices.updateBook(req.params.id, req.body);
    return res.json(updatedbook);
}

exports.delete = async (req, res) => {
    await BookServices.deleteBook(req.params.id);
    return res.json({ message: 'book deleted' });
}

exports.popular = async (req, res) => {
    try {
        const books = await BookServices.getPopularBooks();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.searchByCategory = async (req, res) => {
    try {
        const books = await BookServices.getBooksByCategory(req.params.category);
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.search = async (req, res) => {
    try {
        const books = await BookServices.searchBooks(req.params.titleOrAuthor);
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};