// write the book component code here
export default function Bookcard({book}){
    return(
        <>
        <img src={book.image} alt={book.name} height="250px" width="250px"></img>
        <h2>{book.name}</h2>
        <p>Genre: {book.genre}</p>
        <p>Author: {book.author}</p>
        </>
    )
}