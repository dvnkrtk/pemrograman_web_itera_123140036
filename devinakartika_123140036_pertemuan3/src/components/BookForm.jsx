import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("milik");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Judul dan penulis wajib diisi!");
    addBook({ id: Date.now(), title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("milik");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Judul buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Milik">Milik</option>
        <option value="Baca">Sedang Dibaca</option>
        <option value="Beli">Ingin Dibeli</option>
      </select>
      <button type="submit">Tambah Buku</button>
    </form>
  );
}
