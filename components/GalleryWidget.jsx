import { useRef, useState } from "react";

const INITIAL = [
  "https://picsum.photos/seed/11/400/300",
  "https://picsum.photos/seed/12/400/300",
  "https://picsum.photos/seed/13/400/300",
];

export default function GalleryWidget() {
  const [images, setImages] = useState(INITIAL);
  const scrollRef = useRef(null);

  function addImageFromFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages((prev) => [...prev, url]);
  }

  function scroll(dir = "right") {
    const el = scrollRef.current;
    if (!el) return;
    const move = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "right" ? move : -move, behavior: "smooth" });
  }

  return (
    <div className="card-neu p-6 rounded-2xl w-full max-w-3xl mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="tab-pill text-sm text-gray-200">Gallery</div>
        <div className="flex items-center gap-3">
          <label className="tab-pill cursor-pointer text-sm flex items-center gap-2">
            + ADD IMAGE
            <input
              type="file"
              onChange={addImageFromFile}
              className="hidden"
              accept="image/*"
            />
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="tab-pill w-9 h-9 flex items-center justify-center"
            >
              ◀
            </button>
            <button
              onClick={() => scroll("right")}
              className="tab-pill w-9 h-9 flex items-center justify-center"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto p-2 scrollbar-thin"
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="min-w-[160px] h-[110px] rounded-xl overflow-hidden shadow-inner bg-black/10 flex-shrink-0"
          >
            <img
              src={src}
              className="w-full h-full object-cover"
              alt={`img-${idx}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
