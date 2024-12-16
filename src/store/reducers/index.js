export const NEWS_REDUCER_CASES = {
  INSERT_NEWS: "INSERT_NEWS",
  FETCHING_NEWS: "FETCHING_NEWS",
  DONE_FETCHING_NEWS: "DONE_FETCHING_NEWS",
  SAVE_NEWS: "SAVE_NEWS",
  UNSAVE_NEWS: "UNSAVE_NEWS",
};

const savedNewsFromStorage = JSON.parse(localStorage.getItem("savedNews")) || [];

const initialState = {
  news: [],
  savedNews: savedNewsFromStorage,
  loading: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_REDUCER_CASES.INSERT_NEWS:
      return {
        ...state,
        news: action.news,
        loading: false,
      };

    case NEWS_REDUCER_CASES.FETCHING_NEWS:
      return {
        ...state,
        loading: true,
      };

    case NEWS_REDUCER_CASES.DONE_FETCHING_NEWS:
      return {
        ...state,
        loading: false,
      };

    case NEWS_REDUCER_CASES.SAVE_NEWS:
      return updateSavedNews(state, action.news, true);

    case NEWS_REDUCER_CASES.UNSAVE_NEWS:
      return updateSavedNews(state, action.news, false);

    default:
      return state;
  }
};

const updateSavedNews = (state, newsItem, isSaving) => {
  const updatedSavedNews = isSaving
    ? [...state.savedNews, newsItem]
    : state.savedNews.filter(saved => saved._id !== newsItem._id);

  localStorage.setItem("savedNews", JSON.stringify(updatedSavedNews));

  return {
    ...state,
    savedNews: updatedSavedNews,
  };
};

export { newsReducer };