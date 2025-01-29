import { Mail, Phone, MapPin, Book, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoNav from '../assets/uowa-logo-nav.svg'
import { motion } from 'framer-motion';


export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                src={LogoNav}
                alt="University Logo"
                className="w-auto h-8"
              />
              <span className="font-bold text-lg">مكتبة وارث</span>
            </div>
            <p className="text-white/80">
              بوابتك نحو المعرفة والتميز الأكاديمي في جامعة وارث الأنبياء
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-white/80 hover:text-accent transition-colors">الفهرس</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-accent transition-colors">الخدمات</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">عن المكتبة</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/80">library@example.edu.iq</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/80">+964 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/80">كربلاء المقدسة، العراق</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">تابعنا</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} مكتبة جامعة وارث الأنبياء. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}