const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            required: true // This should be true, but I'm not sure how to handle it right now
        },
        releaseYear: {
            type: Number,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pages: {
            type: Number, 
            required: true 
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema)