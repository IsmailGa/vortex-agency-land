import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.portfolio', path: '/portfolio' },
    { key: 'nav.pricing', path: '/pricing' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Send, label: 'Telegram', href: 'https://t.me/innovateweb' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/innovatewebstudio' },
    { icon: Mail, label: 'Email', href: 'mailto:info@innovateweb.studio' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-display font-bold text-xl">VA</span>
              </div>
              <span className="font-display font-bold text-xl">Vortex Agency</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {t(link.key)}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:info@innovateweb.studio" className="hover:text-primary transition-colors">
                  info@innovateweb.studio
                </a>
              </li>
              <li>
                <a href="https://t.me/innovateweb" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @innovateweb
                </a>
              </li>
              <li>
                <a href="https://instagram.com/innovatewebstudio" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @innovatewebstudio
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>© {currentYear} Vortex Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
