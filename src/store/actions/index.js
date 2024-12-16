import qs from "qs";
import { NEWS_REDUCER_CASES } from "../reducers";

const BASE_API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

export function fetchMovies(query) {
  return async (dispatch) => {
    dispatch({ type: NEWS_REDUCER_CASES.FETCHING_NEWS });

    const queryString = qs.stringify(
      {
        ...query,
        "api-key": process.env.REACT_APP_API_KEY,
      },
      { encode: true }
    );

    const apiUrl = `${BASE_API_URL}${queryString}`;
    console.log(apiUrl);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Failed to fetch news');
      }

      const { response: { docs } } = await response.json();
      dispatch({
        type: NEWS_REDUCER_CASES.INSERT_NEWS,
        news: docs,
      });
    } catch (error) {
      console.error("[actions-fetchMovies]:", error);
    } finally {
      dispatch({ type: NEWS_REDUCER_CASES.DONE_FETCHING_NEWS });
    }
  };
}