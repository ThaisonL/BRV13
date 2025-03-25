function NewsItem({ newsItem, darkMode }) {
    if (!newsItem) return null; // Om nyhetsobjektet saknas, rendera inget
  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  const description = newsItem.description || "No description available.";

  return (
    <article
      className={`justify-between hover:scale-105 w-full sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-3/12 my-10 m-4 p-3 box-content shadow-lg rounded-md min-h-[450px] max-w-[400px] flex flex-col ${darkMode ? 'bg-[rgb(55,65,81)] text-white' : 'bg-[#faebd7] text-black'}`}
    >
      <h4 className="font-semibold truncate">{newsItem.title}</h4>
      
      {/* Bilden inuti en figure */}
      <figure className="w-full h-[200px] flex justify-center items-center">
        <img
          className="max-w-full max-h-full object-contain"
          src={newsItem.urlToImage || fallbackImage}
          alt={newsItem.title || "Default News Image"}
          onError={(e) => e.target.src = fallbackImage}
        />
      </figure>

      <p>{newsItem.publishedAt.replace("T", " ").replace("Z", " ")}</p>
      <p>{description}</p>
      
      {/* Full article alltid längst ner */}
      <p>Full article: </p>
      <a
        className="italic underline text-sm break-all overflow-hidden text-ellipsis"
        href={newsItem.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {newsItem.url}
      </a>
    </article>
  );
}

export default NewsItem;
