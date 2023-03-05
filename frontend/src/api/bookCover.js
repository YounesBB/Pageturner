
export const fetchBookCover = async (bookTitle, author) => {
    const encodedTitle = encodeURIComponent(bookTitle);
    const encodedAuthor = encodeURIComponent(author);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}+inauthor:${encodedAuthor}&fields=items(volumeInfo(imageLinks(thumbnail)))`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.items && data.items.length > 0) {
            return data.items[0].volumeInfo.imageLinks.thumbnail
        }
        return ""
    } catch (error) {
        console.error(error)
        return ""
    }
}

