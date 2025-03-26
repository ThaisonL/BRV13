import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../Reducers/NewsAPISlice";
import NewsItem from "./NewsItem";
import { useOutletContext } from "react-router-dom"; 

function BusinessNewsSection() {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);
  

  const { darkMode } = useOutletContext();

  useEffect(() => {
    // 
    dispatch(fetchNews());
  }, [dispatch]);
// shows a loading message when loading
  if (loading) return <p className={`text-center text-2xl ${darkMode ? "text-white" : "text-black"}`}>Loading news...</p>;

  // displays error message when error occurs
  if (error) return <p className={`text-center text-2xl ${darkMode ? "text-red-400" : "text-red-600"}`}>Error: {error}</p>;

  // if there is no news availble, show a message
  if (!news) {
    return (
      <p className={`w-full text-center text-3xl md:text-4xl font-serif ${darkMode ? "text-white" : "text-black"}`}>
        No economic news available.
      </p>
    );
  }

  return (
    <section className={`flex flex-row flex-wrap justify-center items-start ${darkMode ? "bg-[rgb(55,65,81)]text-white" : "bg-white text-black"}`}>
      <h3 className="w-full text-center text-2xl md:text-2xl font-serif">
        The latest news in economy
      </h3>
      {news.articles.length > 0 ? (
        news.articles.map((newsItem, index) => (
          <NewsItem key={index} newsItem={newsItem} darkMode={darkMode} />
        ))
      ) : (
        <h4 className="w-full text-center text-3xl md:text-4xl font-serif">
          Could not find the news you are looking for
        </h4>
      )}
    </section>
  );
}

export default BusinessNewsSection;
