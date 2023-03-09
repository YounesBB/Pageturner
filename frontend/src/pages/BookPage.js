
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getBookByISBN } from "../api/books";
import { DisplayBook } from "../components/DisplayBook"

export const BookPage = () => {
    const { isbn } = useParams()
  
    const [book, setBook] = useState(null)

    

    useEffect(() => {
      const fetchData = async () => {
        const book = await getBookByISBN(isbn);
        setBook(book);
        console.log(book)
      };
      fetchData();
    }, [])
  
    const element = book? <DisplayBook book = {book}/> :null


    return (
      <div>
      
        {element}
        
      </div>
    );
  }