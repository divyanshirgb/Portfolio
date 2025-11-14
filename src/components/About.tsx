import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import me from '../assets/me.jpeg';

export function About() {
  return (
    <section className="py-24 px-6 bg-black" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-white italic" style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', fontWeight: '300' }}>
            About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-900">
              <ImageWithFallback
  src={me}
  alt="Divyanshi"
  className="w-full h-full object-cover"
/>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 text-gray-300 leading-relaxed mb-12" style={{ fontSize: '1.125rem' }}>
              <p>
                Hey! I'm <span className="text-white">Divyanshi</span>, a second-year design student currently studying at Punjab Engineering College, with a deep love for UI/UX and branding.
              </p>
              <p>
                I believe design is more than just making things look good — it's about solving real problems, telling stories, and creating experiences that feel intuitive and human. Whether I'm conducting user research, crafting interfaces, or building brand identities from scratch, I approach every project with curiosity and empathy.
              </p>
              <p>
                When I'm not buried in Figma or sketching wireframes, you'll probably find me experimenting with 3D art, getting lost in typography rabbit holes, or capturing moments through my camera lens. I'm always learning, always curious, and always pushing myself to create work that matters.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="space-y-6 pb-12 border-b border-gray-900">
              <div className="flex justify-between items-start">
                <span className="text-gray-500 uppercase tracking-wider text-sm">Currently</span>
                <span className="text-white text-right max-w-xs">Second Year Design Student<br/>PEC, Chandigarh</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500 uppercase tracking-wider text-sm">Focus Areas</span>
                <span className="text-white text-right max-w-xs">UI/UX Design, Branding,<br/>Visual Identity</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500 uppercase tracking-wider text-sm">Tools I Love</span>
                <span className="text-white text-right max-w-xs">Figma, Adobe Creative Suite,<br/>Blender, Fresco</span>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mt-12">
              <p className="text-gray-500 uppercase tracking-wider text-sm mb-4">Design Philosophy</p>
              <p className="text-white italic text-xl" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
                "Good design is invisible. Great design tells a story. The best design changes how people feel."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
