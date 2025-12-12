import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ru: 'Главная' },
  'nav.about': { en: 'About', ru: 'О нас' },
  'nav.portfolio': { en: 'Portfolio', ru: 'Портфолио' },
  'nav.pricing': { en: 'Pricing', ru: 'Цены' },
  'nav.contact': { en: 'Contact', ru: 'Контакты' },
  
  // Hero Section
  'hero.title': { en: 'Transforming Ideas into', ru: 'Превращаем идеи в' },
  'hero.title.highlight': { en: 'Digital Excellence', ru: 'Цифровое Совершенство' },
  'hero.subtitle': { 
    en: 'Vortex Agency specializes in fintech solutions, commercial projects, social initiatives, and ecological ventures, covering nearly every industry with innovative web development.',
    ru: 'Vortex Agency специализируется на финтех-решениях, коммерческих проектах, социальных инициативах и экологических проектах, охватывая практически каждую отрасль инновационной веб-разработкой.'
  },
  'hero.cta': { en: 'Start Your Project', ru: 'Начать проект' },
  'hero.cta.secondary': { en: 'View Our Work', ru: 'Наши работы' },
  
  // Services
  'services.title': { en: 'Our Services', ru: 'Наши услуги' },
  'services.subtitle': { en: 'Comprehensive digital solutions for modern businesses', ru: 'Комплексные цифровые решения для современного бизнеса' },
  'services.web.title': { en: 'Custom Web Development', ru: 'Веб-разработка' },
  'services.web.desc': { en: 'Tailored web solutions built with cutting-edge technologies', ru: 'Индивидуальные веб-решения на передовых технологиях' },
  'services.uiux.title': { en: 'UI/UX Design', ru: 'UI/UX Дизайн' },
  'services.uiux.desc': { en: 'Beautiful interfaces that users love to interact with', ru: 'Красивые интерфейсы, с которыми приятно работать' },
  'services.mobile.title': { en: 'Mobile Applications', ru: 'Мобильные приложения' },
  'services.mobile.desc': { en: 'Native and cross-platform mobile experiences', ru: 'Нативные и кроссплатформенные мобильные решения' },
  'services.ecommerce.title': { en: 'E-Commerce Solutions', ru: 'E-Commerce решения' },
  'services.ecommerce.desc': { en: 'Powerful online stores that drive conversions', ru: 'Мощные интернет-магазины для роста продаж' },
  'services.fintech.title': { en: 'Fintech Development', ru: 'Финтех разработка' },
  'services.fintech.desc': { en: 'Secure financial platforms and payment solutions', ru: 'Безопасные финансовые платформы и платёжные решения' },
  'services.consulting.title': { en: 'Digital Strategy', ru: 'Цифровая стратегия' },
  'services.consulting.desc': { en: 'Expert guidance for your digital transformation', ru: 'Экспертное сопровождение цифровой трансформации' },
  
  // About Page
  'about.title': { en: 'About Us', ru: 'О нас' },
  'about.subtitle': { en: 'A team passionate about digital innovation', ru: 'Команда, увлечённая цифровыми инновациями' },
  'about.intro': {
    en: 'Founded in 2019, Vortex Agency is a dynamic team of passionate developers, designers, and strategists dedicated to crafting cutting-edge digital experiences. We excel in fintech for secure financial platforms, commercial projects for business growth, social projects to drive community impact, and ecological initiatives to promote sustainability.',
    ru: 'Основанная в 2019 году, Vortex Agency — это динамичная команда увлечённых разработчиков, дизайнеров и стратегов, посвящённых созданию передовых цифровых продуктов. Мы преуспеваем в финтехе для безопасных финансовых платформ, коммерческих проектах для роста бизнеса, социальных проектах для влияния на общество и экологических инициативах для продвижения устойчивого развития.'
  },
  'about.mission.title': { en: 'Our Mission', ru: 'Наша миссия' },
  'about.mission.desc': { en: 'To empower businesses with innovative digital solutions that drive growth and create meaningful impact.', ru: 'Обеспечить бизнес инновационными цифровыми решениями, которые стимулируют рост и создают значимое влияние.' },
  'about.values.title': { en: 'Our Values', ru: 'Наши ценности' },
  'about.values.innovation': { en: 'Innovation', ru: 'Инновации' },
  'about.values.reliability': { en: 'Reliability', ru: 'Надёжность' },
  'about.values.client': { en: 'Client-Centric', ru: 'Клиентоориентированность' },
  'about.team.title': { en: 'Meet Our Team', ru: 'Наша команда' },
  
  // Stats
  'stats.years': { en: 'Years Experience', ru: 'Лет опыта' },
  'stats.projects': { en: 'Projects Delivered', ru: 'Проектов выполнено' },
  'stats.clients': { en: 'Happy Clients', ru: 'Довольных клиентов' },
  'stats.satisfaction': { en: 'Satisfaction Rate', ru: 'Уровень удовлетворённости' },
  
  // Portfolio
  'portfolio.title': { en: 'Our Portfolio', ru: 'Наше портфолио' },
  'portfolio.subtitle': { en: 'Explore our latest projects across diverse industries', ru: 'Изучите наши последние проекты в различных отраслях' },
  'portfolio.filter.all': { en: 'All Projects', ru: 'Все проекты' },
  'portfolio.filter.fintech': { en: 'Fintech', ru: 'Финтех' },
  'portfolio.filter.commercial': { en: 'Commercial', ru: 'Коммерческие' },
  'portfolio.filter.social': { en: 'Social', ru: 'Социальные' },
  'portfolio.filter.ecological': { en: 'Ecological', ru: 'Экологические' },
  'portfolio.experience': { en: 'Over 5 years, we\'ve delivered 50+ projects across diverse sectors.', ru: 'За более чем 5 лет мы реализовали более 50 проектов в различных секторах.' },
  'portfolio.view': { en: 'View Project', ru: 'Смотреть проект' },
  
  // Pricing
  'pricing.title': { en: 'Pricing Plans', ru: 'Тарифы' },
  'pricing.subtitle': { en: 'Transparent pricing for every project size', ru: 'Прозрачные цены для проектов любого размера' },
  'pricing.basic.title': { en: 'Basic', ru: 'Базовый' },
  'pricing.basic.desc': { en: 'Perfect for simple websites and landing pages', ru: 'Идеально для простых сайтов и лендингов' },
  'pricing.standard.title': { en: 'Standard', ru: 'Стандартный' },
  'pricing.standard.desc': { en: 'For mid-level projects with integrations', ru: 'Для проектов среднего уровня с интеграциями' },
  'pricing.premium.title': { en: 'Premium', ru: 'Премиум' },
  'pricing.premium.desc': { en: 'Complex fintech/commercial projects', ru: 'Сложные финтех/коммерческие проекты' },
  'pricing.from': { en: 'From', ru: 'От' },
  'pricing.popular': { en: 'Most Popular', ru: 'Популярный' },
  'pricing.includes': { en: 'What\'s included:', ru: 'Что включено:' },
  'pricing.cta': { en: 'Get Started', ru: 'Начать' },
  'pricing.custom': { en: 'Need a custom solution?', ru: 'Нужно индивидуальное решение?' },
  'pricing.custom.desc': { en: 'Contact us for a personalized quote tailored to your fintech, commercial, social, or ecological needs.', ru: 'Свяжитесь с нами для персонального предложения, адаптированного к вашим финтех, коммерческим, социальным или экологическим потребностям.' },
  
  // Contact
  'contact.title': { en: 'Get In Touch', ru: 'Связаться с нами' },
  'contact.subtitle': { en: 'Ready to start your project? Let\'s talk!', ru: 'Готовы начать проект? Давайте поговорим!' },
  'contact.form.name': { en: 'Your Name', ru: 'Ваше имя' },
  'contact.form.email': { en: 'Email Address', ru: 'Email адрес' },
  'contact.form.project': { en: 'Project Type', ru: 'Тип проекта' },
  'contact.form.message': { en: 'Your Message', ru: 'Ваше сообщение' },
  'contact.form.submit': { en: 'Send Message', ru: 'Отправить' },
  'contact.form.success': { en: 'Message sent successfully!', ru: 'Сообщение успешно отправлено!' },
  'contact.social.title': { en: 'Or reach us via', ru: 'Или свяжитесь через' },
  'contact.project.fintech': { en: 'Fintech', ru: 'Финтех' },
  'contact.project.commercial': { en: 'Commercial', ru: 'Коммерческий' },
  'contact.project.social': { en: 'Social', ru: 'Социальный' },
  'contact.project.ecological': { en: 'Ecological', ru: 'Экологический' },
  'contact.project.other': { en: 'Other', ru: 'Другое' },
  
  // Footer
  'footer.copyright': { en: '© 2024 Vortex Agency. All rights reserved.', ru: '© 2024 Vortex Agency. Все права защищены.' },
  'footer.tagline': { en: 'Crafting digital excellence for tomorrow\'s challenges.', ru: 'Создаём цифровое совершенство для завтрашних вызовов.' },
  
  // Theme
  'theme.light': { en: 'Light', ru: 'Светлая' },
  'theme.dark': { en: 'Dark', ru: 'Тёмная' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
