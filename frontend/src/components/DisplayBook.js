

export const DisplayBook = ({ book, onResetBook }) => {

    if (book === null) {
        return null
    }

    return (

        <div>

            <h1>
                {book.title}
            </h1>
            <img src={book.coverImage} width={160} height={230} />
            <body>
                <h1>
                    Author: {book.author}
                </h1>
                <h1>
                    Release Year: {book.releaseYear}
                </h1>
                <h2>
                    Genre: {book.genre}
                </h2>
                <h2>
                    <p>Description: {book.description}</p>
                </h2>
                <h2>
                    Pages: {book.pages}
                </h2>
            </body>


        </div>

    )
}
