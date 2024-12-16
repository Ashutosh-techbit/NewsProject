import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NEWS_REDUCER_CASES } from "../../store/reducers";
import { NewsCard } from "../NewsCard";
import Loading from "../Loading";
import style from "../../pages/CommonPageLayout.module.css";

function NewsList({ news }) {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.savedNews);
  const loading = useSelector((state) => state.loading);

  const isNewsSaved = (news) => savedNews.some((saved) => saved._id === news._id);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className={style.newsContainer}>
      {news.length > 0 ? (
        news.map((n) => {
          const { headline, abstract, source, byline, web_url, multimedia } = n;
          const saved = isNewsSaved(n);

          const imageUrl = multimedia && multimedia[0] 
            ? `https://static01.nyt.com/${multimedia[0].url}` 
            : process.env.PUBLIC_URL + '/assets/news.jpg';
          return (
            <NewsCard
              key={n._id}
              headline={headline.main}
              abstract={abstract}
              source={source}
              author={byline.original}
              buttonText={saved ? "Unsave" : "Save"}
              isSaved={saved}
              onSave={() => {
                dispatch({
                  type: saved
                    ? NEWS_REDUCER_CASES.UNSAVE_NEWS
                    : NEWS_REDUCER_CASES.SAVE_NEWS,
                  news: n,
                });
              }}
              onViewNewDetail={() => {
                window.open(web_url, "_blank");
              }}
              imageUrl={imageUrl}
            />
          );
        })
      ) : (
        <p>No news available.</p>
      )}
    </section>
  );
}

export default NewsList;
