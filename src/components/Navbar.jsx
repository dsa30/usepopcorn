import React, { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import Numresults from "./Numresults";

const Navbar = ({ movies }) => {
  const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} />
      <Numresults movies={movies} />
    </nav>
  );
};

export default Navbar;
