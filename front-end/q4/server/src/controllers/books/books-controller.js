import Boom from '@hapi/boom';
import BooksService from '../../services/books/books-service.js';

function getBook(request, h) {
  const booksList = BooksService.getAllBooks(request);
  const book = booksList.books.find(b => b.slug === request.params.slug);
  if (!book) {
    throw Boom.notFound();
  }

  return book;
}

function getBooksList(request, h) {
  const books = BooksService.getAllBooks(request);
  return books;
}

export default {
  getBook,
  getBooksList,
};
