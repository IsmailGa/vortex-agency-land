import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const categories = ['all', 'fintech', 'commercial', 'social', 'ecological'] as const;

const projects = [
  {
    id: 1,
    name: 'SecureBank Pro',
    client: 'FinVest Holdings',
    category: 'fintech',
    description: 'Developed a secure fintech platform for seamless transactions, integrating blockchain for enhanced security.',
    technologies: ['React', 'Node.js', 'Blockchain', 'PostgreSQL'],
    duration: '6 months',
    outcome: '40% increase in transaction efficiency',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 2,
    name: 'GreenEarth Tracker',
    client: 'EcoVentures Ltd',
    category: 'ecological',
    description: 'Built a carbon footprint tracking app helping businesses monitor and reduce their environmental impact.',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'AWS'],
    duration: '4 months',
    outcome: 'Used by 200+ companies worldwide',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 3,
    name: 'CommunityHub',
    client: 'Global Aid Network',
    category: 'social',
    description: 'Created an NGO platform connecting volunteers with community projects and tracking impact metrics.',
    technologies: ['Next.js', 'Supabase', 'Tailwind', 'Stripe'],
    duration: '5 months',
    outcome: '10,000+ volunteers connected',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 4,
    name: 'RetailMax',
    client: 'Commerce Giants Inc',
    category: 'commercial',
    description: 'Designed a comprehensive e-commerce solution with inventory management and analytics dashboard.',
    technologies: ['React', 'GraphQL', 'Redis', 'Kubernetes'],
    duration: '8 months',
    outcome: '150% revenue growth for client',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 5,
    name: 'PayFlow',
    client: 'Digital Payments Co',
    category: 'fintech',
    description: 'Revolutionary payment processing system with real-time fraud detection and multi-currency support.',
    technologies: ['TypeScript', 'Go', 'Kafka', 'PostgreSQL'],
    duration: '10 months',
    outcome: '$5M+ transactions processed daily',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 6,
    name: 'SolarConnect',
    client: 'RenewPower Systems',
    category: 'ecological',
    description: 'IoT platform for monitoring solar panel efficiency and predictive maintenance scheduling.',
    technologies: ['React Native', 'Python', 'TensorFlow', 'AWS IoT'],
    duration: '7 months',
    outcome: '25% improved energy efficiency',
    color: 'from-yellow-500/20 to-lime-500/20',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('portfolio.subtitle')}
            </p>
            <p className="text-muted-foreground bg-card/50 rounded-full px-6 py-3 inline-block">
              {t('portfolio.experience')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'bg-gradient-primary text-primary-foreground' : ''}
              >
                {t(`portfolio.filter.${category}`)}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card hover:border-primary/30 transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between`}>
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur rounded-full text-xs font-medium capitalize">
                        {project.category}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                    <h3 className="text-xl font-display font-bold">{project.name}</h3>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Client:</span> {project.client}
                    </p>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </span>
                      <span className="text-accent font-medium">{project.outcome}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Want to see your project join our portfolio?
            </p>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground">
              <a href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
