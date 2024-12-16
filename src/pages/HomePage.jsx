import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components";
import NewsList from "../components/NewsList";
import { fetchMovies } from "../store/actions";
import styles from "./CommonPageLayout.module.css";

function HomePage() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchMovies({ fq: `glocations:("India")` }));
  }, [dispatch]);

  return (
    <main>
      <Navbar />
      <section className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Global News</h1>
        <NewsList news={news} />
      </section>
    </main>
  );
}

export default HomePage;
