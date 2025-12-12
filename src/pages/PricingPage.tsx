import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const plans = [
  {
    key: 'basic',
    price: '$2,000',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      '1 month support',
      'Source code delivery',
    ],
  },
  {
    key: 'standard',
    price: '$5,000',
    popular: true,
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'Advanced SEO & Analytics',
      'CMS integration',
      'Payment gateway setup',
      'API integrations',
      '3 months support',
      'Performance optimization',
    ],
  },
  {
    key: 'premium',
    price: '$15,000',
    features: [
      'Unlimited pages',
      'Complex fintech features',
      'Custom security solutions',
      'Blockchain integration',
      'AI/ML features',
      'Multi-language support',
      'Admin dashboard',
      '12 months support',
      'Priority updates',
      'Dedicated team',
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const PricingPage: React.FC = () => {
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
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.key}
                variants={itemVariants}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow scale-105'
                    : 'bg-card border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium shadow-soft">
                      {t('pricing.popular')}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-xl font-display font-semibold mb-2 ${plan.popular ? '' : 'text-foreground'}`}>
                    {t(`pricing.${plan.key}.title`)}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {t(`pricing.${plan.key}.desc`)}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {t('pricing.from')}
                    </span>
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className={`text-sm font-medium ${plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    {t('pricing.includes')}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-accent-foreground' : 'text-accent'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'bg-gradient-primary text-primary-foreground'
                  }`}
                  size="lg"
                >
                  <Link to="/contact">
                    {t('pricing.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl bg-card border border-border text-center"
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-display font-bold mb-3">
              {t('pricing.custom')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('pricing.custom.desc')}
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-12 grid md:grid-cols-3 gap-6 text-center"
          >
            {[
              { title: 'Flexible Payments', desc: 'Split payments into milestones' },
              { title: 'Hourly Rates', desc: 'Starting from $75/hour for custom work' },
              { title: 'Free Consultation', desc: '30-min call to discuss your project' },
            ].map((item) => (
              <div key={item.title} className="p-4">
                <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
