import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Heart, Users, Lightbulb, Shield, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const values = [
  { icon: Lightbulb, key: 'innovation', color: 'bg-primary/10 text-primary' },
  { icon: Shield, key: 'reliability', color: 'bg-accent/10 text-accent' },
  { icon: Heart, key: 'client', color: 'bg-destructive/10 text-destructive' },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in digital strategy and innovation.',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    bio: 'Full-stack expert specializing in fintech and secure applications.',
  },
  {
    name: 'Michael Park',
    role: 'UX Director',
    bio: 'Award-winning designer focused on human-centered experiences.',
  },
  {
    name: 'Emma Wilson',
    role: 'Project Manager',
    bio: 'Agile specialist ensuring seamless project delivery and client success.',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

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
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Building the Future of Digital
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('about.intro')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expertise spans industries like healthcare, education, e-commerce, and beyond, 
                ensuring tailored solutions that blend technology with purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <p className="text-2xl font-display font-bold mb-2">Since 2019</p>
                    <p className="text-muted-foreground">Crafting Digital Excellence</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t('about.mission.desc')}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <h3 className="text-2xl font-display font-bold mb-6">
                {t('about.values.title')}
              </h3>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.key} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${value.color} flex items-center justify-center`}>
                      <value.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">
                      {t(`about.values.${value.key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate team of experts dedicated to your success
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '40+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
