import { BookOpen, Users, Clock, Calendar, Laptop, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: BookOpen,
    title: 'الاستعارة',
    description: 'استعارة الكتب والمراجع لفترات محددة مع إمكانية التجديد عبر الإنترنت.'
  },
  {
    icon: Users,
    title: 'قاعات الدراسة الجماعية',
    description: 'حجز قاعات مجهزة للدراسة الجماعية والمناقشات الأكاديمية.'
  },
  {
    icon: Laptop,
    title: 'المكتبة الرقمية',
    description: 'الوصول إلى آلاف المصادر الرقمية والمجلات العلمية العالمية.'
  },
  {
    icon: GraduationCap,
    title: 'التدريب البحثي',
    description: 'ورش عمل وجلسات تدريبية حول مهارات البحث العلمي والتوثيق.'
  }
];

const roomTypes = [
  { id: 'individual', name: 'قاعة دراسة فردية', capacity: '1-2 شخص' },
  { id: 'small', name: 'قاعة دراسة جماعية صغيرة', capacity: '3-5 أشخاص' },
  { id: 'large', name: 'قاعة دراسة جماعية كبيرة', capacity: '6-10 أشخاص' },
  { id: 'conference', name: 'قاعة مؤتمرات', capacity: '20+ شخص' }
];

export default function Services() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({ selectedRoom, date, time });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">خدمات المكتبة</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          نقدم مجموعة متكاملة من الخدمات المكتبية والأكاديمية لدعم مسيرتك التعليمية والبحثية
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="card p-6 hover:shadow-lg transition-all">
              <Icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-primary text-white rounded-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">حجز قاعة دراسية</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">نوع القاعة</label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  >
                    <option value="">اختر نوع القاعة</option>
                    {roomTypes.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} ({room.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">التاريخ</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">وقت البدء</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">مدة الحجز</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  >
                    <option value="1">ساعة واحدة</option>
                    <option value="2">ساعتان</option>
                    <option value="3">3 ساعات</option>
                    <option value="4">4 ساعات</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn bg-accent text-primary hover:bg-accent/90 font-semibold px-8">
                  تأكيد الحجز
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-primary-dark p-8 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">ساعات العمل</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <Clock className="h-5 w-5 text-accent mb-2" />
                <p className="text-sm">الأحد - الخميس</p>
                <p className="font-semibold">8:00 صباحاً - 8:00 مساءً</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <Clock className="h-5 w-5 text-accent mb-2" />
                <p className="text-sm">الجمعة</p>
                <p className="font-semibold">2:00 مساءً - 8:00 مساءً</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <Clock className="h-5 w-5 text-accent mb-2" />
                <p className="text-sm">السبت</p>
                <p className="font-semibold">10:00 صباحاً - 6:00 مساءً</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}