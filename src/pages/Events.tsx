import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Search, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'ورشة عمل: مهارات البحث العلمي',
    description: 'تعلم أساسيات البحث العلمي وكيفية استخدام قواعد البيانات الأكاديمية.',
    date: '2024-03-20',
    time: '10:00',
    location: 'قاعة المؤتمرات الرئيسية',
    category: 'ورش عمل',
    speaker: 'د. أحمد محمد',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000&h=600',
  },
  {
    id: 2,
    title: 'معرض الكتاب السنوي',
    description: 'المعرض السنوي للكتب يضم أحدث الإصدارات في مختلف المجالات.',
    date: '2024-04-01',
    time: '09:00',
    location: 'الساحة المركزية',
    category: 'معارض',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000&h=600',
  },
  {
    id: 3,
    title: 'محاضرة: مستقبل التعليم الرقمي',
    description: 'نظرة معمقة حول مستقبل التعليم في العصر الرقمي.',
    date: '2024-04-15',
    time: '11:00',
    location: 'قاعة المحاضرات الكبرى',
    category: 'محاضرات',
    speaker: 'د. سارة العلي',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000&h=600',
  },
];

const categories = ['الكل', 'ورش عمل', 'معارض', 'محاضرات', 'ندوات'];

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

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">فعاليات المكتبة</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اكتشف الفعاليات والأنشطة القادمة في مكتبة وارث
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن الفعاليات..."
                className="input pl-12"
              />
              <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.article
              key={event.id}
              variants={itemVariants}
              className="card group overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-[#a58b24] mb-4">
                  {event.category}
                </span>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-accent" />
                    <time>
                      {format(new Date(event.date), 'dd MMMM yyyy', { locale: arSA })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4 text-accent" />
                    <time>{event.time}</time>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Link
                  to={`/events/${event.id}`}
                  className="btn btn-primary w-full"
                >
                  التسجيل في الفعالية
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}