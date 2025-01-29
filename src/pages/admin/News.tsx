import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Calendar, Edit, Trash2, Plus, Image as ImageIcon } from 'lucide-react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import DatePicker from '../../components/DatePicker';

const news = [
  {
    id: 1,
    title: 'افتتاح قاعة المطالعة الجديدة',
    content: 'تم اليوم افتتاح قاعة المطالعة الجديدة في مكتبة وارث...',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
  },
  // Add more news items...
];

export default function AdminNews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: new Date(),
    image: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا الخبر؟')) {
      // Handle delete
    }
  };

  return (
    <div className="mr-64">
      <Sidebar />
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">إدارة الأخبار</h1>
          <button
            onClick={() => {
              setSelectedNews(null);
              setFormData({
                title: '',
                content: '',
                date: new Date(),
                image: '',
              });
              setIsModalOpen(true);
            }}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            إضافة خبر
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedNews(item);
                      setFormData({
                        ...item,
                        date: new Date(item.date),
                      });
                      setIsModalOpen(true);
                    }}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Edit className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Trash2 className="h-5 w-5 text-red-600" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <time>
                    {format(new Date(item.date), 'dd MMM yyyy', { locale: arSA })}
                  </time>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {selectedNews ? 'تعديل خبر' : 'إضافة خبر جديد'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  عنوان الخبر
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
                  المحتوى
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="input"
                  rows={6}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DatePicker
                  label="التاريخ"
                  selected={formData.date}
                  onSelect={(date) => setFormData({ ...formData, date: date || new Date() })}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    رابط الصورة
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="input pl-10"
                      required
                    />
                    <ImageIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn btn-primary flex-1">
                  {selectedNews ? 'حفظ التغييرات' : 'إضافة الخبر'}
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