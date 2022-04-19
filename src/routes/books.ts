import express from 'express';
import { getAllBooks } from '../controllers/books';

const router = express.Router();

router.route('/getAllBooks').get(getAllBooks)


export default router;