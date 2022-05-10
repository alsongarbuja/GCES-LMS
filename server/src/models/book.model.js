const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    secondary_title: {
        type: String,
    },
    ISBN_number: {
        type: String,
        required: true,
    },
    Barcode_number: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    borrowed_quantity: {
        type: Number,
        default: 0,
    },
    book_copies: {
        type: [
            {
                bookId: {
                    type: String,
                    required: true,
                },
                in_queue: {
                    type: [
                        {
                            name: String,
                            level: String,
                            queue_ticket_number: Number,
                        }
                    ],
                    default: [],
                }
            }
        ]
    },
    category: {
        type: {
            categoryId: mongoose.SchemaTypes.ObjectId,
            name: String,
        }
    },
    type: {
        type: String,
        enum: ['reference','text-book', 'others'],
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    edition: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Book', bookSchema);
