import { NextFunction, Request, Response } from 'express';
import { Book } from '../models';
import mongoose from 'mongoose';


const createBook = async (req: Request, res: Response) => {
    try {

        let { author, title} = req.body;

        if (!author) {
            return res.status(401).json({
                success: false,
                message: "Author field is required"
            })
        }

        if (!title) {
            return res.status(401).json({
                success: false,
                message: 'Title field is required'
            })
        }

        // post book
        const book = new Book({
            _id: new mongoose.Types.ObjectId(),
            author,
            title
        })

        const newBook = await book.save();

        return res.status(201).json({
            success: true,
            message: 'Book added successfully',
            newBook: newBook
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            error: err
        })
    }
}

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
export  { getAllBooks, createBook }