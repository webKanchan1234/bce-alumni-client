import { useState } from "react";

import GalleryCard from "../../components/gallery/GalleryCard";
import GalleryModal from "../../components/gallery/GalleryModal";

import { galleryData } from "../../data/galleryData";

const Gallery = () => {
  const [selectedImage, setSelectedImage] =
    useState(null);

  return (
    <div className="py-24 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold">
            BCE Memories
          </p>

          <h1 className="text-5xl font-bold">
            Alumni Gallery
          </h1>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {galleryData.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              onClick={() =>
                setSelectedImage(item.image)
              }
            />
          ))}

        </div>

      </div>

      <GalleryModal
        image={selectedImage}
        onClose={() =>
          setSelectedImage(null)
        }
      />

    </div>
  );
};

export default Gallery;