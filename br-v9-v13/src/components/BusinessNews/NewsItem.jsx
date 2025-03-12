function NewsItem({ new: newsItem }) {
  return (
    <article className="w-full m-1 p-1 border box-content border-black rounded-md md:w-5/12 xl:w-3/12">
      <h4 className=" font-semibold">{newsItem.title}</h4>
      <img className="" src={newsItem.urlToImage} alt={newsItem.title} />
      <p className="">
        {newsItem.publishedAt.replace("T", " ").replace("Z", " ")}
      </p>
      <p className="">{newsItem.description}</p>
      <p>Full article: </p>
      <a
        className="italic underline"
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
