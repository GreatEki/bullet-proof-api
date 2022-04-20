import IBooks from "../interfaces/books";
import mongoose, { Schema } from 'mongoose';



const BooksSchema: Schema = new Schema<IBooks>(
    {
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    extraInformation: {
        type: String,

    }
}, {
    timestamps: true
}
);

BooksSchema.post<IBooks>('save', function () {
    this.extraInformation = 'This is some extra information we want to push onto this entry after we save'
})

const Book = mongoose.model<IBooks>("Book", BooksSchema);

export default Book;