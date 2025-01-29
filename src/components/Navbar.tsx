import { useState } from 'react';
import { Book, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import { motion, AnimatePresence } from 'framer-motion';
import LogoNav from '../assets/uowa-logo-nav.svg'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setShowMobileSearch(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-primary text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-2">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  src={LogoNav}
                  alt="University Logo"
                  className="w-auto h-14"
                />
                <span className="font-bold text-lg pr-3 pl-4">مكتبة وارث</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
                <Link to="/about" className="hover:text-accent transition-colors">عن المكتبة</Link>
                <Link to="/catalog" className="hover:text-accent transition-colors">الفهرس</Link>
                <Link to="/services" className="hover:text-accent transition-colors">المعرض</Link>
                <Link to="/services" className="hover:text-accent transition-colors">الخدمات</Link>
              </div>
            </div>
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 text-white placeholder-white/60 px-4 py-1.5 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 w-64"
                placeholder="ابحث عن الكتب..."
              />
              <button type="submit" className="absolute left-3 top-2">
                <Search className="h-5 w-5 text-white/60" />
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Mobile Header */}
      <header className="bg-primary text-white md:hidden fixed top-0 left-0 right-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                src={LogoNav}
                alt="University Logo"
                className="w-auto h-10"
              />
              <span className="font-bold">مكتبة وارث</span>
            </Link>
            <button onClick={() => setShowMobileSearch(true)} className="p-2">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        <AnimatePresence>
          {showMobileSearch && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-primary z-50 p-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 text-white placeholder-white/60 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="ابحث عن الكتب..."
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowMobileSearch(false)}
                  className="absolute left-2 top-2 p-1"
                >
                  <Search className="h-5 w-5 text-white/60" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation */}
      <MobileNav />
    </>
  );
}