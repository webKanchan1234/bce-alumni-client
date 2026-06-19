const GalleryModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="
      fixed inset-0
      bg-black/80
      flex
      justify-center
      items-center
      z-50
      "
      onClick={onClose}
    >
      <img
        src={image}
        alt=""
        className="
        max-w-5xl
        max-h-[90vh]
        rounded-3xl
        "
      />
    </div>
  );
};

export default GalleryModal;