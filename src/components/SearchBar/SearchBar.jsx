import React from "react";
import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <header className={s.header}>
      <form className={s.form}>
        <img
          className={s.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/640px-Unsplash_wordmark_logo.svg.png"
          alt="Unsplash logo"
          width="200"
        />
        <input
          className={s.search_imput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button className={s.search_btn} type="submit">
          <CiSearch size={24} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
