import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.navbar}>
      <section className={styles.webTitle}>NEWS PORT  </section>
      <section className={`${styles.linksContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
        {[
          { title: "GLOBAL", path: "/" },
          { title: "PROGRAMMING", path: "/programming" },
          { title: "JOBS", path: "/covid-19" },
          { title: "SAVED", path: "/saved" },
        ].map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            {link.title}
          </NavLink>
        ))}
      </section>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search news..."
          className={styles.searchBar}
        />
        <button onClick={handleSearch} className={styles.searchBarBtn}>
          Search
        </button>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </button>
    </section>
  );
}

export { Navbar };
