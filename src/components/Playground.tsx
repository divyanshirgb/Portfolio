import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

import one from '../assets/3d 1.mp4'; 
import two from '../assets/3d 2.mp4';
import three from '../assets/3d 3.mp4';
import four from '../assets/vec.jpg';
import five from '../assets/man.jpg';
import six from '../assets/art.jpg';
import seven from '../assets/gd 1.png';
import eight from '../assets/gd 2.png';
import nine from '../assets/gd 3.png';
import ten from '../assets/gd 4.jpeg';
import eleven from '../assets/gd 5.png';

const categories = [
  { id: "all", label: "All Work" },
  { id: "3d", label: "3D Design" },
  { id: "illustration", label: "Illustrations" },
  { id: "photography", label: "Photography/Artworks" },
  { id: "graphic", label: "Graphic Design" },
];

const playgroundItems = [
{
    id: 1,
    title: "Charachter animation",
    category: "3d",
    src: one, // Use your 'one' variable
    type: "video" // Set type to video
},
{
    id: 6, // This was "Futuristic Renders"
    title: "Realistic Ocean",
    category: "3d",
    src: two, // Use your 'two' variable
    type: "video" // Set type to video
},
{
    id: 11, // Added a new item for your third video
    title: "Donuts",                      
    category: "3d",
    src: three, // Use your 'three' variable
    type: "video" // Set type to video
},
{
    id: 2,
    title: "Man",
    category: "illustration",
    src: five,
    type: "image" // Set type to image
},
{
    id: 3,
    title: "Moon illustration",
    category: "illustration",
    src: six,
    type: "image"
},
{
    id: 4,
    title: "Vector art",
    category: "illustration",
    src: four,
    type: "image"
},
{
    id: 5,
    title: "B.Des Flyer",
    category: "graphic",
    src: seven,
    type: "image"
},
{
    id: 7,
    title: "Robo Soccor",
    category: "graphic",
    src: eight,
    type: "image"
},
{
    id: 8,
    title: "Instagram Post for Video Game",
    category: "graphic",
    src: nine,
    type: "image"
},
{
    id: 9,
    title: "Bussiness Instagram Post",
    category: "graphic",
    src: ten,
    type: "image"
},
{
    id: 12,
    title: "Magazine Cover",
    category: "graphic",
    src: eleven,
    type: "image"
},
];

export function Playground() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? playgroundItems 
    : playgroundItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white italic mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', fontWeight: '300' }}>
            Playground
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Side projects, creative experiments, and personal explorations — where I play with ideas without constraints
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === category.id
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900 mb-3">
                {item.type === 'video' ? (
  <video
    src={item.src}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto object-cover"
    style={{ aspectRatio: index % 3 === 0 ? '1/1' : index % 2 === 0 ? '4/5' : '3/4' }}
  />
) : (
  <ImageWithFallback
    src={item.src}
    alt={item.title}
    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
    style={{ aspectRatio: index % 3 === 0 ? '1/1' : index % 2 === 0 ? '4/5' : '3/4' }}
  />
)}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
