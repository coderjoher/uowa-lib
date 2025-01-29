import { motion } from 'framer-motion';
import { Calendar, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: 'افتتاح قاعة المطالعة الجديدة',
    excerpt: 'افتتاح قاعة مطالعة جديدة مجهزة بأحدث التقنيات لخدمة الطلاب والباحثين.',
    content: `تم اليوم افتتاح قاعة المطالعة الجديدة في مكتبة وارث، والتي تعد إضافة نوعية لمرافق المكتبة...`,
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000&h=600',
  },
  // Add more news items...
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function News() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-primary mb-12"
        >
          أخبار المكتبة
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              className="card group overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <time>
                    {format(new Date(item.date), 'dd MMMM yyyy', { locale: arSA })}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  اقرأ المزيد
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}