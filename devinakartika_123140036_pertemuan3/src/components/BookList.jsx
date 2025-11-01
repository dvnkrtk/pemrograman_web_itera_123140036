import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookList() {
  const { books, deleteBook } = useContext(BookContext);

  if (!books.length) return <p>Tidak ada buku.</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> - {book.author} ({book.status})
          <button onClick={() => deleteBook(book.id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}
