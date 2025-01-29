import { ArrowRight } from 'lucide-react';

const books = [
  {
    title: "Advanced Mathematics",
    author: "Dr. Sarah Johnson",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300&h=400",
    category: "Mathematics"
  },
  {
    title: "Modern Physics",
    author: "Prof. James Wilson",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300&h=400",
    category: "Physics"
  },
  {
    title: "Digital Innovation",
    author: "Dr. Michael Chen",
    cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=300&h=400",
    category: "Technology"
  },
  {
    title: "World Literature",
    author: "Prof. Emma Davis",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300&h=400",
    category: "Literature"
  }
];

export default function FeaturedBooks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Featured Books</h2>
          <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            View All <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{book.category}</span>
                <h3 className="text-lg font-semibold text-primary mt-2">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}