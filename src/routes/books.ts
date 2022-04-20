import express from 'express';
import { getAllBooks, createBook } from '../controllers/books';

const router = express.Router();

router.route('/getAllBooks').get(getAllBooks)

router.route('/createBook').post(createBook)


export default router;