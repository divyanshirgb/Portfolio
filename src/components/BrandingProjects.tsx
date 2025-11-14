import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import seven from '../assets/7.png';

const brandingProjects = [
{
    id: 1,
    title: "Poshan",
    subtitle: "Because health should taste this good!",
    description: "A complete brand identity for a vegan, indian savoury snacks brand .Top 5 Winner of NSUT designathon organised by Google student development cell.",
    services: ["Brand Strategy", "Designathon Special Mention", "Packaging", "Marketing"],
    year: "2025",
    image: six ,
    url: "https://www.behance.net/gallery/234860745/Poshan-Branding-Design-Project" // <-- ADDED THIS
},
{
    id: 2,
    title: "ReelTalk",
    subtitle: "Movie Discussion Forum App",
    description: "An app logo and visual identity design. Designed for participation in G408 48 min design challenge.",
    services: ["Design Competition", "App logo design", "48 min challenge"],
    year: "2025",
    image: five ,
    url: "https://www.behance.net/gallery/YOUR-LINK-HERE" // <-- ADDED THIS
},
{
    id: 3,
    title: "The Art of Not Overthinking",
    subtitle: "Redesign for a book cover",
    description: "A poorly designed book sparked curiosity in the mind of a yound designer (me) and hence came about this new ad fresh book cover that represents the brand values better.",
    services: ["Book Cover", "Brand represtation", "Illustrations"],
    year: "2024",
    image: seven,
    url: "https://www.behance.net/gallery/225867007/Book-Cover-Design-for-The-Art-of-not-Overthinking" // <-- ADDED THIS
},
{
    id: 4,
    title: "Mangalore - Tradition in Motion",
    subtitle: "Logo design ",
    description: "Logo Designed to represent the amazing city of Mangalore. Shortlisted in enteries to represent the whole city in a competition.",
    services: ["Event Identity", "Logo design", "Print Media", "Merchandise"],
    year: "2024",
    image: four,
    url: "https://www.behance.net/gallery/YOUR-LINK-HERE" // <-- ADDED THIS
},
];

export function BrandingProjects() {
return (
    <section className="py-24 px-6 bg-black">
    <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
        >
        <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-white italic" style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', fontWeight: '300' }}>
            Branding
            </h2>
            <span className="text-gray-600">(4)</span>
        </div>
        <p className="text-gray-400 max-w-2xl">
            Creating memorable visual identities that tell stories and build emotional connections
        </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
        {brandingProjects.map((project, index) => (
            // --- WRAPPED IN A LINK TAG ---
            <a
              key={project.id} // Key moved here
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block" // Fixes spacing
            >
            <motion.div
                // key removed from here
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
            >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3] bg-gray-900">
                <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    {project.year}
                    </span>
                </div>
                </div>

                {/* Content */}
                <div>
                <h3 className="text-white mb-2 group-hover:text-gray-30TriC-colors" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '300' }}>
                    {project.title}
                </h3>
                <p className="text-gray-500 mb-4">{project.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                </p>
                
                {/* Services */}
                <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                    <span
                        key={service}
                        className="text-gray-600 text-sm"
                    >
                        {service}
                        {project.services.indexOf(service) !== project.services.length - 1 && " • "}
                    </span>
                    ))}
                </div>
                </div>
            </motion.div>
            </a> // --- CLOSING LINK TAG ---
        ))}
        </div>
    </div>
    </section>
);
}