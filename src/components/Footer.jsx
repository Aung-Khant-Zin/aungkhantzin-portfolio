import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aung Khant Zin. Crafted with React & love for UI.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
