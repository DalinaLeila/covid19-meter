import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <div>
        <Link href="#home">React-Bootstrap</Link>
      </div>
      <div className="nav-links">
        <Link href="#home">How can I help</Link>
        <Link href="#link">Resources</Link>
      </div>
    </nav>
  );
};

export default Navigation;
