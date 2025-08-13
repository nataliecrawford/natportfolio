
import React, { useState, useEffect, useRef } from "react";

interface PostcardModalProps {
  postcardName: string;
  onClose: () => void;
  style?: React.CSSProperties;
}

const postcards = [
  { name: "Santorini", src: "/Postcards/SantoriniPostcard.png", title: "Santorini", message: "A beautiful sunset in Greece" },
  { name: "Morocco", src: "/Postcards/MoroccoPostcard.png", title: "Morocco", message: "Colorful markets and spice" },
  { name: "Rome", src: "/Postcards/RomePostcard.png", title: "Rome", message: "Ancient streets and ruins" },
  { name: "Madrid", src: "/Postcards/MadridPostcard.png", title: "Madrid", message: "Lively plazas and delicious tapas" },
  { name: "London", src: "/Postcards/LondonPostcard.png", title: "London", message: "Iconic landmarks and royal charm" },
  { name: "Lisbon", src: "/Postcards/LisbonPostcard.png", title: "Lisbon", message: "Hilly streets and ocean views" },
  { name: "Edinburgh", src: "/Postcards/EdinburghPostcard.png", title: "Edinburgh", message: "Historic castles and cobblestone streets" },
  { name: "Liverpool", src: "/Postcards/LiverpoolPostcard.png", title: "Liverpool", message: "The Beatles' hometown and maritime history" },
  { name: "Barcelona", src: "/Postcards/BarcelonaPostcard.png", title: "Barcelona", message: "Gaudí architecture and Mediterranean vibes" },
  { name: "Galway", src: "/Postcards/GalwayPostcard.png", title: "Galway", message: "Colorful pubs and lively music" },
  { name: "Florence", src: "/Postcards/FlorencePostcard.png", title: "Florence", message: "Renaissance art and Tuscan charm" },
  { name: "Marseille", src: "/Postcards/MarseillePostcard.png", title: "Marseille", message: "Seaside city with vibrant culture" },
  { name: "Dublin", src: "/Postcards/DublinPostcard.png", title: "Dublin", message: "Friendly locals and rich literary history" },
  { name: "Brussels", src: "/Postcards/BrusselsPostcard.png", title: "Brussels", message: "Waffles, chocolate, and stunning squares" },
  { name: "Amalfi", src: "/Postcards/AmalfiPostcard.png", title: "Amalfi", message: "Cliffside villages and coastal beauty" },
  { name: "Leeds", src: "/Postcards/LeedsPostcard.png", title: "Leeds", message: "Bustling university town with historic charm" },
  { name: "Nice", src: "/Postcards/NicePostcard.png", title: "Nice", message: "Azure coastlines and French elegance" },
  { name: "Genoa", src: "/Postcards/GenoaPostcard.png", title: "Genoa", message: "Port city with medieval alleyways" },
];


const PostcardModal: React.FC<PostcardModalProps> = ({ postcardName, onClose, style }) => {
  const postcard = postcards.find((p) => p.name === postcardName);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalRect, setModalRect] = useState<DOMRect | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      setModalRect(modalRef.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    if (!postcard) return;

    const img = new Image();
    img.src = postcard.src;
    
    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
      setIsLoaded(true);
    };
  }, [postcard]);

  if (!postcard) return null;

  // Calculate maximum size that fits within viewport while maintaining aspect ratio
  const maxViewportWidth = window.innerWidth * 0.9;
  const maxViewportHeight = window.innerHeight * 0.9;
  const aspectRatio = dimensions.width / dimensions.height;

  let displayWidth = dimensions.width;
  let displayHeight = dimensions.height;

  if (dimensions.width > maxViewportWidth || dimensions.height > maxViewportHeight) {
    const widthRatio = maxViewportWidth / dimensions.width;
    const heightRatio = maxViewportHeight / dimensions.height;
    const scale = Math.min(widthRatio, heightRatio);

    displayWidth = dimensions.width * scale;
    displayHeight = dimensions.height * scale;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={style}
    >
      {isLoaded ? (
        <div
          ref={modalRef}  
          className="relative rounded-lg overflow-hidden shadow-lg"
          style={{
            width: `${displayWidth}px`,
            height: `${displayHeight}px`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={postcard.src}
            alt={postcard.title}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h2 className="text-white text-3xl font-bold mb-2">{postcard.title}</h2>
            <p className="text-white text-lg">{postcard.message}</p>
          </div>
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default PostcardModal;
