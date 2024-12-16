import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loadingContainer}>
      <div className={style.spinner}></div>
      <h2 className={style.loadingText}>Loading...</h2>
    </div>
  );
};

export default Loading;