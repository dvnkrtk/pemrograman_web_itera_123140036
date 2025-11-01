import React from "react";
import useBookStats from "../hooks/useBookStats";

export default function Stats() {
  const { total, owned, reading, wishlist } = useBookStats();

  return (
    <div>
      <h2>📊 Statistik Buku</h2>
      <p>Total Buku: {total}</p>
      <p>Milik: {owned}</p>
      <p>Sedang Dibaca: {reading}</p>
      <p>Ingin Dibeli: {wishlist}</p>
    </div>
  );
}
