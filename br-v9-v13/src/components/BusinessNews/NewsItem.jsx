function NewsItem({ newsItem, darkMode }) {
  // If the newsItem is missing, don't render anything
  if (!newsItem) return null;

  // Fallback image URL in case the news item doesn't have an image
  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  // Default description if the news item doesn't have one
  const description = newsItem.description || "No description available.";

  return (
    <article
      className={`justify-between hover:scale-105 w-full sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-3/12 my-10 m-4 p-3 box-content shadow-lg rounded-md min-h-[450px] max-w-[400px] flex flex-col 
        ${darkMode ? 'bg-[rgb(55,65,81)] text-white' : 'bg-[#faebd7] text-black'}`} // Apply darkMode styles if true
    >
      <h4 className="font-semibold truncate">{newsItem.title}</h4>

      <figure className="w-full h-[200px] flex justify-center items-center">
        <img
          className="max-w-full max-h-full object-contain"
          src={newsItem.urlToImage || fallbackImage} // Use fallback image if no image URL is provided
          alt={newsItem.title || "Default News Image"} // Use the title or a default alt text
          onError={(e) => e.target.src = fallbackImage} // If image loading fails, set fallback image
        />
      </figure>

      {/* Show the published date, formatted to replace "T" and "Z" */}
      <p>{newsItem.publishedAt.replace("T", " ").replace("Z", " ")}</p>

      {/* Display the description or fallback message */}
      <p>{description}</p>


      <p>Full article: </p>
      <a
        className="italic underline text-sm break-all overflow-hidden text-ellipsis"
        href={newsItem.url} // Link to the full article URL
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Security measure for external links
        aria-label="External link to full article"
      >
        {newsItem.url}
      </a>
    </article>
  );
}

export default NewsItem;
