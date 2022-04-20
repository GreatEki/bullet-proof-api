import express from 'express';
import { getAllBooks, createBook, getBookById } from '../controllers/books';

const router = express.Router();

router.route('/getAllBooks').get(getAllBooks)

router.route('/createBook').post(createBook)

router.route('/:id').get(getBookById)


export default router;