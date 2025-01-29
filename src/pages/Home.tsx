import { motion } from 'framer-motion';
import { Book, GraduationCap, Users, Globe, ChevronLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import News from './News.tsx';
import Events from './Events.tsx';
import Hero from '../components/Hero.tsx';

const departments = [
  {
    title: 'قسم الكتب العربية',
    description: 'مجموعة واسعة من الكتب العربية في مختلف المجالات الأكاديمية والثقافية.',
    icon: Book,
  },
  {
    title: 'قسم المراجع الأجنبية',
    description: 'مصادر ومراجع باللغات الأجنبية لدعم البحث العلمي والدراسات المتقدمة.',
    icon: Globe,
  },
  {
    title: 'قسم الدوريات والمجلات',
    description: 'أحدث الدوريات والمجلات العلمية المحكمة في مختلف التخصصات.',
    icon: GraduationCap,
  },
  {
    title: 'قسم المصادر الرقمية',
    description: 'منصة متكاملة للوصول إلى المصادر الرقمية وقواعد البيانات العالمية.',
    icon: Users,
  },
];

const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80',
    title: 'القاعة الرئيسية',
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
    title: 'قسم الكتب',
  },
  {
    id: 3,
    type: 'video',
    url: 'https://player.vimeo.com/video/824804225',
    title: 'جولة في المكتبة',
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80',
    title: 'قاعة المطالعة',
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80',
    title: 'قاعة الدراسة الجماعية',
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80',
    title: 'منطقة البحث',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <Hero />

      {/* Vision Section */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-primary mb-6">رؤيتنا ورسالتنا</h2>
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">رؤيتنا</h3>
                  <p className="text-gray-600">
                    نطمح بأن يكون قسم المكتبة المركزية في جامعة وارث الانبياء من اكثر الاماكن ارتياداً وتطوراً مقارنة بباقي المكتبات وذلك بتوسعة المساحة وببناء طابق اضافي خاص للمطالعة واضافة شعبة الكترونية مزودة بالأنترنيت مع تطويرها بشكل مستمر ونموذجي.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">رسالتنا</h3>
                  <p className="text-gray-600">
                    توفير مصادر المعرفة وخدمات المعلومات المتميزة لدعم التعليم والبحث العلمي في الجامعة،
                    وتعزيز التعلم المستمر والابتكار في المجتمع الأكاديمي.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000&h=1300"
                alt="Library Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">مكتبة عريقة</h3>
                  <p>أكثر من 6 سنوات من التميز في خدمة المجتمع الأكاديمي</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Departments Section */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">أقسام المكتبة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تضم مكتبتنا مجموعة متنوعة من الأقسام المتخصصة لتلبية احتياجاتك الأكاديمية والبحثية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-primary/5 p-3 rounded-full w-fit mb-4">
                    <Icon className="h-8 w-8 text-primary text-[#efc206]" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{dept.title}</h3>
                  <p className="text-gray-600">{dept.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <Events />

      {/* Gallery Section */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-primary">
              معرض الصور والفيديو
            </motion.h2>
            <motion.div variants={itemVariants}>
              <Link
                to="/gallery"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                عرض المزيد
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="card overflow-hidden group"
              >
                {item.type === 'image' ? (
                  <div className="aspect-video relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <p className="text-white p-4 font-medium">{item.title}</p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video">
                    <iframe
                      src={item.url}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* News Section */}
      <News />

      {/* Working Hours Section */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            ساعات العمل
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="card p-6">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">الأحد - الخميس</h3>
              <p className="text-gray-600">8:00 صباحاً - 8:00 مساءً</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card p-6">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">الجمعة</h3>
              <p className="text-gray-600">2:00 مساءً - 8:00 مساءً</p>
            </motion.div>
            <motion.div variants={itemVariants} className="card p-6">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">السبت</h3>
              <p className="text-gray-600">10:00 صباحاً - 6:00 مساءً</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}