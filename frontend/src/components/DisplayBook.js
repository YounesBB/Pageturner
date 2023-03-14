
import { Star24Regular } from '@fluentui/react-icons'
export const DisplayBook = ({ book }) => {

    if (book === null) {
        return null
    }

    return (
        <section style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'left', alignItems: 'left', paddingRight: '500px' }}>
            
            <img src={book.coverImage} alt={book.title} style={{ width: 160, height: 250 }} />
            <div style={{ padding: '20px',  justifyContent: 'left', alignItems: 'left', borderRadius: '10px', maxWidth: '500px', display: 'flex', flexDirection: 'column', border: 'none', backgroundColor: 'rgba(128, 128, 128, 0.1)'}}>
                <div>
                <h2 style={{ marginBottom: '10px'}}>{book.title}</h2>
                <p style={{ marginBottom: '5px' }}>{book.author}</p>
                <p style={{ marginBottom: '5px' }}>{book.releaseYear}</p>
                <p style={{ marginBottom: '10px' }}>{book.description}</p>
                <p style={{ marginBottom: '10px' }}>Pages: {book.pages}</p>
                {/* <p style={{ marginBottom: '10px' }}>Average rating: </p> */}
                </div>
            </div>
        </section>
    )
}
