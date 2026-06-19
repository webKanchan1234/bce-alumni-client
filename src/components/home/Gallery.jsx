const Gallery = () => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-12">
          Campus Memories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img
              key={item}
              src={`https://picsum.photos/500/400?random=${item}`}
              alt=""
              className="rounded-2xl"
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;