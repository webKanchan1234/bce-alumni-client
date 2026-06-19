const GalleryCard = ({ image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
      overflow-hidden
      rounded-3xl
      cursor-pointer
      shadow-lg
      group
      "
    >
      <img
        src={image}
        alt=""
        className="
        w-full
        h-80
        object-cover
        group-hover:scale-110
        transition
        duration-500
        "
      />
    </div>
  );
};

export default GalleryCard;