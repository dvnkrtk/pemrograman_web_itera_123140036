import React from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter";

export default function Home() {
  return (
    <div>
      <h1>📚 Aplikasi Manajemen Buku Pribadi</h1>
      <BookForm />
      <BookFilter />
      <BookList />
    </div>
  );
}
