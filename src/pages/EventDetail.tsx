import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Share2, User } from 'lucide-react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import { useState } from 'react';

const events = {
  1: {
    id: 1,
    title: 'ورشة عمل: مهارات البحث العلمي',
    description: `
      <p>انضم إلينا في ورشة عمل تفاعلية حول مهارات البحث العلمي وكيفية استخدام قواعد البيانات الأكاديمية بفعالية.</p>
      
      <h3>محاور الورشة:</h3>
      <ul>
        <li>أساسيات البحث العلمي</li>
        <li>استراتيجيات البحث المتقدم</li>
        <li>استخدام قواعد البيانات العالمية</li>
        <li>توثيق المصادر والمراجع</li>
      </ul>

      <h3>المستهدفون:</h3>
      <ul>
        <li>طلاب الدراسات العليا</li>
        <li>الباحثون وأعضاء هيئة التدريس</li>
        <li>المهتمون بتطوير مهارات البحث العلمي</li>
      </ul>
    `,
    date: '2024-03-20',
    time: '10:00',
    duration: '3 ساعات',
    location: 'قاعة المؤتمرات الرئيسية',
    category: 'ورش عمل',
    speaker: 'د. أحمد محمد',
    capacity: 50,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000&h=1000',
  },
};

export default function EventDetail() {
  const { id } = useParams();
  const event = events[Number(id)];
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
  });

  if (!event) {
    return <div>الفعالية غير موجودة</div>;
  }

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.title,
        url: window.location.href,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Show success message or redirect
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-accent text-primary">
            {event.category}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-primary">
                {event.title}
              </h1>
              <button
                onClick={shareEvent}
                className="btn btn-ghost"
              >
                <Share2 className="h-5 w-5" />
                مشاركة
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5 text-accent" />
                <time>
                  {format(new Date(event.date), 'dd MMMM yyyy', { locale: arSA })}
                </time>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-accent" />
                <span>{event.time} ({event.duration})</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="h-5 w-5 text-accent" />
                <span>{event.speaker}</span>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />

            <button
              onClick={() => setIsRegistering(true)}
              className="btn btn-primary w-full md:w-auto"
            >
              التسجيل في الفعالية
            </button>
          </div>
        </div>

        {/* Registration Modal */}
        {isRegistering && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl p-6 w-full max-w-md"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                التسجيل في الفعالية
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    required
                    className="input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    required
                    className="input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    القسم/الكلية
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <button type="submit" className="btn btn-primary flex-1">
                    تأكيد التسجيل
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsRegistering(false)}
                    className="btn btn-ghost flex-1"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}