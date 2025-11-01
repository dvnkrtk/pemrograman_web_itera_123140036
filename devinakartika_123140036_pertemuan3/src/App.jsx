import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/stats">📊 Statistik</Link>
      </nav>
      <main style={{ maxWidth: "800px", margin: "0 auto", background: "white", marginTop: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </Router>
  );
}
