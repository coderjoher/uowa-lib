import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Calendar, Clock, MapPin, Edit, Trash2, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import DatePicker from '../../components/DatePicker';
import TimePicker from '../../components/TimePicker';

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
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  },
  // Add more events...
];

export default function AdminEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: new Date(),
    time: '10:00',
    location: '',
    category: '',
    speaker: '',
    image: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذه الفعالية؟')) {
      // Handle delete
    }
  };

  return (
    <div className="mr-64">
      <Sidebar />
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">إدارة الفعاليات</h1>
          <button
            onClick={() => {
              setSelectedEvent(null);
              setFormData({
                title: '',
                description: '',
                date: new Date(),
                time: '10:00',
                location: '',
                category: '',
                speaker: '',
                image: '',
              });
              setIsModalOpen(true);
            }}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            إضافة فعالية
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-4 px-6 font-medium text-gray-600">العنوان</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">التاريخ</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">الوقت</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">المكان</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">المتحدث</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-gray-200 last:border-0">
                    <td className="py-4 px-6">{event.title}</td>
                    <td className="py-4 px-6">
                      {format(new Date(event.date), 'dd MMM yyyy', { locale: arSA })}
                    </td>
                    <td className="py-4 px-6">{event.time}</td>
                    <td className="py-4 px-6">{event.location}</td>
                    <td className="py-4 px-6">{event.speaker}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            setSelectedEvent(event);
                            setFormData({
                              ...event,
                              date: new Date(event.date),
                            });
                            setIsModalOpen(true);
                          }}
                          className="p-2 text-gray-600 hover:text-primary transition-colors"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {selectedEvent ? 'تعديل فعالية' : 'إضافة فعالية جديدة'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  عنوان الفعالية
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="input"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  الوصف
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="input"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DatePicker
                  label="التاريخ"
                  selected={formData.date}
                  onSelect={(date) => setFormData({ ...formData, date: date || new Date() })}
                  minDate={new Date()}
                />

                <TimePicker
                  label="الوقت"
                  selected={formData.time}
                  onSelect={(time) => setFormData({ ...formData, time })}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    المكان
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    المتحدث
                  </label>
                  <input
                    type="text"
                    value={formData.speaker}
                    onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn btn-primary flex-1">
                  {selectedEvent ? 'حفظ التغييرات' : 'إضافة الفعالية'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-ghost flex-1"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}