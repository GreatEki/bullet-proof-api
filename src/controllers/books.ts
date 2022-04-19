import { NextFunction, Request, Response } from 'express';
import { Book } from '../models';

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const allBooks = await Book.find()

        return res.status(200).json({
            success: true,
            message: 'All Books fetched successfully',
            books: allBooks,
            count: allBooks.length
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            error: err
        })
    }

  
}
export  { getAllBooks }