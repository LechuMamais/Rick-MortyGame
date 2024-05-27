import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>
          The{" "}
          <span className="header-logo-container">
            <img
              src="/Rick-And-Morty-Logo-Transparent.png"
              alt="Rick and Morty"
            />
          </span>{" "}
          Game!
        </h1>
      </Link>
    </header>
  );
};

export default Header;
