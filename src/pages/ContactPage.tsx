import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Instagram, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = ['fintech', 'commercial', 'social', 'ecological', 'other'] as const;

const socialLinks = [
  { icon: Send, label: 'Telegram', href: 'https://t.me/innovateweb', handle: '@innovateweb' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/innovatewebstudio', handle: '@innovatewebstudio' },
  { icon: Mail, label: 'Email', href: 'mailto:info@innovateweb.studio', handle: 'info@innovateweb.studio' },
];

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      message: '',
    },
  });

  const projectType = watch('projectType');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: t('contact.form.success'),
      description: 'We will get back to you within 24 hours.',
    });

    // Reset after animation
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {t('contact.form.success')}
                    </h3>
                    <p className="text-muted-foreground">
                      We'll respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact.form.name')}
                      </label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="John Doe"
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact.form.email')}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="john@example.com"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        {t('contact.form.project')}
                      </label>
                      <Select
                        value={projectType}
                        onValueChange={(value) => setValue('projectType', value)}
                      >
                        <SelectTrigger className={errors.projectType ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {t(`contact.project.${type}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.projectType && (
                        <p className="text-destructive text-sm mt-1">{errors.projectType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('contact.form.message')}
                      </label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary text-primary-foreground"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          {t('contact.form.submit')}
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-display font-bold mb-6">
                  {t('contact.social.title')}
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <social.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Our Location</h4>
                    <p className="text-muted-foreground text-sm">
                      Global Remote Team<br />
                      Working across time zones
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-8 rounded-2xl bg-gradient-hero border border-border">
                <h4 className="font-display font-semibold mb-3">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours on business days. For urgent matters, 
                  reach out via Telegram for faster response.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
