import { BookOpen, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'مرحباً بكم في مكتبة وارث',
    subtitle: 'اكتشف عالماً من المعرفة',
    description: 'بوابتك نحو التميز الأكاديمي والبحث العلمي',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000&h=1000',
  },
  {
    title: 'مجموعة واسعة من المصادر',
    subtitle: 'أكثر من 100,000 كتاب',
    description: 'مصادر متنوعة في جميع التخصصات العلمية والأدبية',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000&h=1000',
  },
  {
    title: 'خدمات رقمية متكاملة',
    subtitle: 'الوصول عن بعد',
    description: 'استفد من خدماتنا الرقمية على مدار الساعة',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000&h=1000',
  },
];

const SlideContent = ({ slide, isActive }: { slide: typeof slides[0], isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-accent font-medium mb-4"
    >
      {slide.subtitle}
    </motion.h2>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      {slide.title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
    >
      {slide.description}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="flex flex-col md:flex-row justify-center gap-6"
    >
      <Link
        to="/catalog"
        className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
      >
        تصفح الفهرس
      </Link>
      <Link
        to="/services"
        className="bg-white/10 px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
      >
        حجز قاعة دراسية
      </Link>
    </motion.div>
  </motion.div>
);

export default function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative h-full">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 6 }}
                  className="absolute inset-0"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <SlideContent slide={slide} isActive={isActive} />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}