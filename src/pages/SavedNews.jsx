import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components";
import NewsList from "../components/NewsList";
import styles from "./CommonPageLayout.module.css";

function SavedNewsPage() {
  const savedNews = useSelector((state) => state.savedNews);

  return (
    <main>
      <Navbar />
      <section className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Saved News</h1>
        <NewsList news={savedNews} />
      </section>
    </main>
  );
}

export default SavedNewsPage;
