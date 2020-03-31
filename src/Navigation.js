import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="logo-flex">
        <img
          width="40px"
          height="40px"
          src={require("./assets/virus.png")}
          alt="coronavirus"
        />
        <Link href="#home">
          <h2>Covid19Meter</h2>
        </Link>
      </div>
      {/* <div className="nav-links">
        <Link className="link" href="#home">
          How can I help
        </Link>
        <Link className="link" href="#link">
          Resources
        </Link>
      </div> */}
    </nav>
  );
};

export default Navigation;
