import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-black">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-white tracking-wider">DIVYANSHI DAHIYA</div>
        
        <div className="flex gap-8">
          <button 
            onClick={() => scrollToSection('work')}
            className="text-white/70 hover:text-white transition-colors tracking-wider uppercase"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="text-white/70 hover:text-white transition-colors tracking-wider uppercase"
          >
            UI/UX
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="text-white/70 hover:text-white transition-colors tracking-wider uppercase"
          >
            Branding
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors tracking-wider uppercase"
          >
            About
          </button>
        </div>
        
        <div className="text-white/50">©2025</div>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-6xl">
          <motion.h1
            className="text-white mb-12 italic"
            style={{
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              fontFamily: 'Georgia, "Times New Roman", serif',
              letterSpacing: '-0.02em',
              lineHeight: '0.95',
              fontWeight: '400'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            DIVYANSHI
            <br />
            DAHIYA
          </motion.h1>

          <motion.p
            className="text-white tracking-widest uppercase"
            style={{ fontSize: '0.875rem', letterSpacing: '0.15em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Ui Ux and Branding Design 
            <br />
            creativity Portfolio
          </motion.p>
        </div>
      </div>

      {/* Footer Badge */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor"/>
          </svg>
          <span className="tracking-wide">Made in GitHub</span>
        </div>
      </motion.div>
    </section>
  );
}
