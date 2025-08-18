import BooksController from '../controllers/books/books-controller.js';
import ErrorController from '../controllers/error/error-controller.js';
import ImagesController from '../controllers/images/images-controller.js';

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: BooksController.getBooksList,
  },
  {
    method: 'GET',
    path: '/books/{slug}',
    handler: BooksController.getBook,
  },
  {
    method: 'GET',
    path: '/images/{file}',
    handler: ImagesController.getImage,
  },
  {
    method: 'GET',
    path: '/{any*}',
    handler: ErrorController.notFound,
  },
];

export default routes;
