import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { BookOpen, Edit, Trash2, Plus, Search, Filter } from 'lucide-react';

const books = [
  {
    id: 1,
    title: "أساسيات الهندسة الكهربائية",
    author: "د. محمد أحمد",
    isbn: "9780123456789",
    category: "الهندسة",
    publisher: "دار النشر العلمية",
    publishYear: "2023",
    copies: 5,
    available: 3,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  // Add more books...
];

const categories = [
  'الهندسة',
  'الطب',
  'العلوم',
  'الأدب',
  'التاريخ',
  'الفلسفة',
  'الفنون'
];

export default function AdminBooks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    publisher: '',
    publishYear: '',
    copies: 1,
    cover: '',
  });

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.isbn.includes(searchQuery);
    const matchesCategory = !selectedCategory || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا الكتاب؟')) {
      // Handle delete
    }
  };

  return (
    <div className="mr-64">
      <Sidebar />
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">إدارة الكتب</h1>
          <button
            onClick={() => {
              setSelectedBook(null);
              setFormData({
                title: '',
                author: '',
                isbn: '',
                category: '',
                publisher: '',
                publishYear: '',
                copies: 1,
                cover: '',
              });
              setIsModalOpen(true);
            }}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            إضافة كتاب
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن كتاب..."
                  className="input pl-10"
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="input"
              >
                <option value="">جميع التصنيفات</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-4 px-6 font-medium text-gray-600">الكتاب</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">المؤلف</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">التصنيف</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">النسخ المتوفرة</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book.id} className="border-b border-gray-200 last:border-0">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{book.title}</h3>
                          <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">{book.author}</td>
                    <td className="py-4 px-6">{book.category}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        book.available > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {book.available}/{book.copies}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            setSelectedBook(book);
                            setFormData({
                              title: book.title,
                              author: book.author,
                              isbn: book.isbn,
                              category: book.category,
                              publisher: book.publisher,
                              publishYear: book.publishYear,
                              copies: book.copies,
                              cover: book.cover,
                            });
                            setIsModalOpen(true);
                          }}
                          className="p-2 text-gray-600 hover:text-primary transition-colors"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(book.id)}
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

      {/* Book Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {selectedBook ? 'تعديل كتاب' : 'إضافة كتاب جديد'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    عنوان الكتاب
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
                    المؤلف
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ISBN
                  </label>
                  <input
                    type="text"
                    value={formData.isbn}
                    onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    التصنيف
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="input"
                    required
                  >
                    <option value="">اختر التصنيف</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    دار النشر
                  </label>
                  <input
                    type="text"
                    value={formData.publisher}
                    onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    سنة النشر
                  </label>
                  <input
                    type="text"
                    value={formData.publishYear}
                    onChange={(e) => setFormData({ ...formData, publishYear: e.target.value })}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    عدد النسخ
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.copies}
                    onChange={(e) => setFormData({ ...formData, copies: parseInt(e.target.value) })}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    رابط الغلاف
                  </label>
                  <input
                    type="url"
                    value={formData.cover}
                    onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn btn-primary flex-1">
                  {selectedBook ? 'حفظ التغييرات' : 'إضافة الكتاب'}
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