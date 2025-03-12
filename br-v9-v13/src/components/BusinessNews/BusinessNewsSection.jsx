import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../Reducers/FMPnews";
import NewsItem from "./NewsItem";

function BusinessNewsSection() {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  // Add defensive checks before accessing the news data
  if (loading) return <p>Loading news</p>;
  if (error) return <p>Error: {error}</p>;
  if (!news) {
    return <p>No economic news available.</p>;
  }

  return (
    <section className="flex flex-row flex-wrap justify-center items-start">
      <h2 className="w-full text-center text-4xl font-bold">
        The latest news in economy
      </h2>
      {news.articles.length > 0 ? (
        news.articles.map((newsItem) => (
          <NewsItem key={newsItem.index} new={newsItem} />
        ))
      ) : (
        <h4>could not find the news you are looking for</h4>
      )}
    </section>
  );
}

export default BusinessNewsSection;
