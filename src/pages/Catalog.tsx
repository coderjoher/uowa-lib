import { useState, useMemo } from 'react';
import { Book, Filter, Search } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import BookModal from '../components/BookModal';
import MobileFilters from '../components/MobileFilters';

const categories = [
  'الهندسة',
  'الطب',
  'العلوم',
  'الأدب',
  'التاريخ',
  'الفلسفة',
  'الفنون'
];

const books = [
  {
    id: 1,
    title: "أساسيات الهندسة الكهربائية",
    author: "د. محمد أحمد",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300&h=400",
    category: "الهندسة",
    available: true,
    publishDate: "2023",
    isbn: "9780123456789",
    description: "كتاب شامل في أساسيات الهندسة الكهربائية يغطي المفاهيم الأساسية والتطبيقات العملية."
  },
  // Add more books with similar detailed information
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);
  const [searchValues, setSearchValues] = useState({
    title: '',
    author: ''
  });

  const filters = useMemo(() => ({
    ...(selectedCategory && { category: selectedCategory }),
    ...(searchValues.title && { title: searchValues.title }),
    ...(searchValues.author && { author: searchValues.author })
  }), [selectedCategory, searchValues.title, searchValues.author]);

  const { filteredItems } = useSearch(books, 'title', filters);

  const handleSearchChange = (field: string, value: string) => {
    setSearchValues(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-80">
          <div className="card p-6 sticky top-4">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Filter className="h-5 w-5" />
              تصفية النتائج
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عنوان الكتاب
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchValues.title}
                    onChange={(e) => handleSearchChange('title', e.target.value)}
                    placeholder="ابحث عن عنوان..."
                    className="input pl-10"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اسم المؤلف
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchValues.author}
                    onChange={(e) => handleSearchChange('author', e.target.value)}
                    placeholder="ابحث عن مؤلف..."
                    className="input pl-10"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">التصنيفات</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(
                            selectedCategory === category ? null : category
                          )}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded transition-colors peer-checked:border-primary peer-checked:bg-primary" />
                        <div className="absolute text-white scale-0 peer-checked:scale-100 transition-transform">
                          <svg className="w-3 h-3" viewBox="0 0 12 12">
                            <path
                              d="M3.5 6.5l2 2 3-3.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-primary transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((book) => (
              <div
                key={book.id}
                className="group cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <button className="btn btn-accent w-full">
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-primary mb-1 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <MobileFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onSearchChange={handleSearchChange}
        searchValues={searchValues}
      />

      {/* Book Modal */}
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
}