import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';

const events = [
  {
    id: 1,
    title: 'ورشة عمل: مهارات البحث العلمي',
    date: '2024-03-20',
    time: '10:00',
    location: 'قاعة المؤتمرات الرئيسية',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000&h=600',
  },
  {
    id: 2,
    title: 'معرض الكتاب السنوي',
    date: '2024-04-01',
    time: '09:00',
    location: 'الساحة المركزية',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000&h=600',
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

export default function EventsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex justify-between items-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-primary">
              الفعاليات القادمة
            </motion.h2>
            <motion.div variants={itemVariants}>
              <Link
                to="/events"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                عرض جميع الفعاليات
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
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
        </motion.div>
      </div>
    </section>
  );
}