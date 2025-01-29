import { motion } from 'framer-motion';
import { useState } from 'react';
import { Image as ImageIcon, Play } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80',
    title: 'القاعة الرئيسية',
    category: 'المرافق',
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
    title: 'قسم الكتب',
    category: 'المرافق',
  },
  {
    id: 3,
    type: 'video',
    url: 'https://player.vimeo.com/video/824804225',
    title: 'جولة في المكتبة',
    category: 'جولات',
  },
  // Add more items...
];

const categories = ['الكل', 'المرافق', 'الفعاليات', 'جولات'];

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

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'الكل' || item.category === selectedCategory
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-primary text-center mb-12"
        >
          معرض الصور والفيديو
        </motion.h1>

        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'image' ? (
                <div className="aspect-video relative">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-white/80 mb-2">
                        <ImageIcon className="h-4 w-4" />
                        <span className="text-sm">{item.category}</span>
                      </div>
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video relative">
                  <iframe
                    src={item.url}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div className="max-w-4xl w-full">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-auto"
              />
            ) : (
              <div className="aspect-video">
                <iframe
                  src={selectedItem.url}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}