import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function BookFilter() {
  const { books } = useContext(BookContext);
  const [filter, setFilter] = useState("semua");

  const filtered =
    filter === "semua" ? books : books.filter((b) => b.status === filter);

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="Semua">Semua</option>
        <option value="Milik">Milik</option>
        <option value="Baca">Sedang Dibaca</option>
        <option value="Beli">Ingin Dibeli</option>
      </select>

      <ul>
        {filtered.map((b) => (
          <li key={b.id}>
            {b.title} - {b.author} ({b.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
