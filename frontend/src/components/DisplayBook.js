

export const DisplayBook = ({ book }) => {

    if (book === null) {
        return null
    }

    return (
        <section style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'left', alignItems: 'left', paddingRight: '500px' }}>
            
            <img src={book.coverImage} alt={book.title} style={{ width: 160, height: 250 }} />
            <div style={{ padding: '20px',  justifyContent: 'left', alignItems: 'left', borderRadius: '10px', maxWidth: '500px', display: 'flex', flexDirection: 'column'}}>
                <div>
                <h2 style={{ marginBottom: '10px' }}>{book.title}</h2>
                <p style={{ marginBottom: '5px' }}>By {book.author}</p>
                <p style={{ marginBottom: '5px' }}>Release Year: {book.releaseYear}</p>
                <p style={{ marginBottom: '10px' }}>{book.description}</p>
                <p style={{ marginBottom: '10px' }}>Pages: {book.pages}</p>
                {/* <p style={{ marginBottom: '10px' }}>Average rating: </p> */}
                </div>
            </div>
        </section>
    )
}
