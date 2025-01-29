import { X, BookOpen, User, Calendar, Tag } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  category: string;
  available: boolean;
  publishDate?: string;
  isbn?: string;
  description?: string;
  language?: string;
}

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

export default function BookModal({ book, onClose }: BookModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div ref={modalRef} className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative aspect-[3/2] rounded-t-2xl overflow-hidden">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-white/80">{book.author}</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="h-5 w-5 text-accent" />
                <span>التصنيف: {book.category}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5 text-accent" />
                <span>تاريخ النشر: {book.publishDate || 'غير متوفر'}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-2">وصف الكتاب</h3>
            <p className="text-gray-600">{book.description || 'لا يوجد وصف متوفر'}</p>
          </div>

          <div className="pt-4">
            <button
              className={`btn w-full ${
                book.available ? 'btn-primary' : 'btn-ghost opacity-50 cursor-not-allowed'
              }`}
              disabled={!book.available}
            >
              {book.available ? 'استعارة الكتاب' : 'غير متوفر حالياً'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}