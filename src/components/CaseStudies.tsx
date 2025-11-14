import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

import payzenCover from '../assets/Untitled design.png';
import santrialsCover from '../assets/image 1.png';
import brewsterCover from '../assets/Divyanshi Dahiya.png';

const caseStudies = [
  {
    id: 1,
    title: "PayZen UPI",
    subtitle: "Reimagining UPI Experience",
    category: "UI/UX Design",
    year: "2025",
    description: "A complete redesign of a mobile UPI experience focused on simplifying UX and controlling spending habits for Gen-Z users. From research to high-fidelity prototypes.",
    tags: ["User Research", "Mobile Design", "Prototyping", "Design System"],
    image: payzenCover ,
    url: "https://www.behance.net/gallery/238561141/PayZen-UPI-Mindful-UPI" // <-- YOUR LINK
  },
  {
    id: 2,
    title: "Santrials",
    subtitle: "Ecommerce Website design",
    category: "UI Design",
    year: "2025",
    description: "Generate wireframes, low fidelity prototypes and high fidelity prototypes for a client. Improved task completion by 85%.",
    tags: ["User Interface", "Accessibility", "Information Architecture", "Wireframing"],
    image: santrialsCover,
    url: "https://www.behance.net/gallery/230148527/Santrials-E-Commerce-Ui-Ux-Design" // <-- ADD A PLACEHOLDER LINK (or your real Behance link)
  },
  {
    id: 3,
    title: "Brewster",
    subtitle: "Cafe ordering app",
    category: "UI/UX Design",
    year: "2024",
    description: "My first project on UI UX design that introduced me to the world of some great designers. A way to showcase where i started and how far i've come.",
    tags: ["Ordering app", "Baby Project", "Google UX Design course", "User Flows"],
    image: brewsterCover ,
    url: "https://www.behance.net/gallery/220971345/Brewster-Cafe-ordering-app" // <-- ADD A PLACEHOLDER LINK (or your real Behance link)
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 px-6 bg-black" id="work">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-white italic" style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', fontWeight: '300' }}>
              Selected Work
            </h2>
            <span className="text-gray-600">(3)</span>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Case studies exploring the intersection of user needs, business goals, and thoughtful design
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            // --- THIS IS THE FIX ---
            // We wrap the motion.div in a simple <a> tag
            <a 
              key={study.id} 
              href={study.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-8 aspect-[16/9] bg-gray-900">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2">
                      <span>View Case Study</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Left: Title & Info */}
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-gray-500 uppercase tracking-wider text-sm">{study.category}</span>
                      <span className="text-gray-700">•</span>
                      <span className="text-gray-600">{study.year}</span>
                    </div>
                    <h3 className="text-white mb-2 group-hover:text-gray-300 transition-colors" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '300' }}>
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{study.subtitle}</p>
                  </div>

                  {/* Right: Description & Tags */}
                  <div className="md:col-span-7">
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-gray-400 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}