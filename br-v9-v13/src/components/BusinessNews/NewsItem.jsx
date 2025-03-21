function NewsItem({ new: newsItem }) {
  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  return (
    <article className="hover:scale-105 bg-white w-full my-10 m-4 p-3 box-content shadow-lg rounded-md md:w-5/12 xl:w-3/12 min-h-[500px] flex flex-col">
      <h4 className="font-semibold truncate">{newsItem.title}</h4>
      <img
        className="w-full h-[200px] object-cotain"
        src={newsItem.urlToImage || fallbackImage}
        alt={newsItem.title || "Default News Image"}
        onError={(e) => e.target.src = fallbackImage}
      />
      <p>{newsItem.publishedAt.replace("T", " ").replace("Z", " ")}</p>
      <p className="flex-grow overflow-hidden text-ellipsis">{newsItem.description}</p>
      <div className="mt-auto"> {/* Detta håller "Full article" alltid längst ner */}
        <p>Full article: </p>
        <a
          className="italic underline text-sm break-all overflow-hidden text-ellipsis"
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {newsItem.url}
        </a>
      </div>
    </article>
  );
}

export default NewsItem;
