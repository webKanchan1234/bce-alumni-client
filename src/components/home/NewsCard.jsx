import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

  return (

    <div
      className="
      bg-white
      rounded-3xl
      shadow-lg
      overflow-hidden
      hover:-translate-y-2
      transition
      "
    >

      <img
        src={
          news.imageUrl ||
          news.image
        }
        alt={news.title}
        className="
        w-full
        h-56
        object-cover
        "
      />

      <div className="p-6">

        <span
          className="
          text-blue-600
          text-sm
          font-semibold
          "
        >
          {news.category}
        </span>

        <h3
          className="
          text-xl
          font-bold
          mt-3
          "
        >
          {news.title}
        </h3>

        <p
          className="
          text-gray-500
          mt-3
          "
        >
          {news.publishDate ||
            news.createdAt}
        </p>

        <Link
          to={`/news/${news.id}`}
          className="
          inline-block
          mt-5
          text-blue-600
          font-semibold
          "
        >
          Read More →
        </Link>

      </div>

    </div>

  );
};

export default NewsCard;