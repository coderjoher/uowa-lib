import { motion } from 'framer-motion';
import { Calendar, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';

const news = [
  {
    id: 1,
    title: 'افتتاح قاعة المطالعة الجديدة',
    excerpt: 'افتتاح قاعة مطالعة جديدة مجهزة بأحدث التقنيات لخدمة الطلاب والباحثين.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000&h=600',
  },
  {
    id: 2,
    title: 'وصول دفعة جديدة من الكتب',
    excerpt: 'وصول مجموعة قيمة من الكتب والمراجع العلمية في مختلف التخصصات.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000&h=600',
  },
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

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex justify-between items-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-primary">
              آخر الأخبار
            </motion.h2>
            <motion.div variants={itemVariants}>
              <Link
                to="/news"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                عرض جميع الأخبار
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </motion.div>
      </div>
    </section>
  );
}