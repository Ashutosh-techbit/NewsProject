import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import NewsList from "../components/NewsList";
import { fetchMovies } from "../store/actions";
import styles from "./CommonPageLayout.module.css";

function SearchPage() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    if (query) {
      dispatch(fetchMovies({ q: query }));
    }
  }, [query, dispatch]);

  return (
    <main>
      <Navbar />
      <section className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Search Results for "{query}"</h1>
        <NewsList news={news} />
      </section>
    </main>
  );
}

export default SearchPage;