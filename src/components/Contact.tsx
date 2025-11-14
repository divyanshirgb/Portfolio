import { motion } from "motion/react";
import { Mail, Linkedin, Twitter, Instagram, Github, Heart } from "lucide-react";

const socialLinks = [
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:divyanshitab@email.com", 
    handle: "divyanshitab@email.com",
    description: "Best way to reach me for work inquiries"
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/divyanshi-dahiya-a91493377/", 
    handle: "@divyanshidahiya",
    description: "Let's connect professionally"
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/_divyanshidahiya_?igsh=bjFpYWNxeG13NzJ4&utm_source=qr", 
    handle: "@_divyanshidahiya_",
    description: "Personal Instagram Account"
  },
 
  { 
    name: "Behance", 
    icon: Github, 
    href: "https://www.behance.net/divyanshidahiya", 
    handle: "@divyanshidahiya",
    description: "Design documentation & projects"
  },
];

export function Contact() {
  return (
    <section className="py-24 px-6 bg-black" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-white italic mb-6" style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', fontWeight: '300' }}>
            Let's Talk
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            I'm always excited to connect with fellow designers, potential collaborators, or anyone who wants to chat about design, creativity, and ideas. Don't be a stranger!
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="space-y-4 mb-20">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex items-start gap-6 p-6 border border-gray-900 rounded-lg hover:border-gray-700 hover:bg-gray-900/30 transition-all"
              >
                <div className="mt-1">
                  <Icon className="text-gray-500 group-hover:text-white transition-colors" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="text-white group-hover:text-gray-200 transition-colors">{link.handle}</p>
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-600 text-sm">{link.name}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{link.description}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  <span className="text-gray-600">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 mb-8">
            Currently open to freelance opportunities and internships.
          </p>
          
          {/* Footer */}
          <div className="pt-12 border-t border-gray-900">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <span>Made with</span>
              <Heart size={16} className="text-red-500/70" fill="currentColor" />
              <span>and lots of coffee</span>
            </div>
            <p className="text-gray-700 text-sm">
              © 2025 Divyanshi Dahiya — Designed & developed by yours truly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
