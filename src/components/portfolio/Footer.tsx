import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Twitter } from 'lucide-react';
import { socialLinks } from '@/data/projects';

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinksData = [
  { name: 'GitHub', icon: Github, url: socialLinks.github },
  { name: 'LinkedIn', icon: Linkedin, url: socialLinks.linkedin },
  { name: 'Twitter', icon: Twitter, url: socialLinks.twitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="section-container relative py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-foreground font-bold text-xl mb-3"
            >
              <Code2 className="w-6 h-6 text-primary" />
              <span className="gradient-text">DevPortfolio</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Building digital experiences with passion and code.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinksData.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        {/* <div className="my-8 border-t border-border" /> */}

        {/* Bottom Section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © {currentYear} DevPortfolio. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
            and lots of coffee.
          </p>
          
          <p>
            Designed & Built with{' '}
            <span className="text-primary font-medium">React</span>
            {' '}&{' '}
            <span className="text-primary font-medium">Tailwind CSS</span>
          </p>
        </div> */}
      </div>
    </footer>
  );
}
