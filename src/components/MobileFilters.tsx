import { Filter, X } from 'lucide-react';
import { useState } from 'react';

interface MobileFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (field: string, value: string) => void;
  searchValues: {
    title: string;
    author: string;
  };
}

export default function MobileFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearchChange,
  searchValues
}: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 z-40 bg-primary text-white p-3 rounded-full shadow-lg md:hidden"
      >
        <Filter className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-primary">تصفية النتائج</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عنوان الكتاب
                </label>
                <input
                  type="text"
                  value={searchValues.title}
                  onChange={(e) => onSearchChange('title', e.target.value)}
                  placeholder="ابحث عن عنوان..."
                  className="input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اسم المؤلف
                </label>
                <input
                  type="text"
                  value={searchValues.author}
                  onChange={(e) => onSearchChange('author', e.target.value)}
                  placeholder="ابحث عن مؤلف..."
                  className="input"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">التصنيفات</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategory === category}
                        onChange={() => onCategoryChange(
                          selectedCategory === category ? null : category
                        )}
                        className="rounded text-primary focus:ring-primary/20"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full"
              >
                تطبيق التصفية
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}