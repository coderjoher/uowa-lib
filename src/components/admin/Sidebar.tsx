import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  FileText,
  Clock,
  BarChart2,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'لوحة التحكم', path: '/admin' },
  { icon: Calendar, label: 'الفعاليات', path: '/admin/events' },
  { icon: FileText, label: 'الأخبار', path: '/admin/news' },
  { icon: BookOpen, label: 'الكتب', path: '/admin/books' },
  { icon: Clock, label: 'الحجوزات', path: '/admin/reservations' },
  // { icon: BarChart2, label: 'التقارير', path: '/admin/analytics' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="bg-white border-l border-gray-200 w-64 h-screen fixed top-0 right-0 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">لوحة الإدارة</h1>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map(({ icon: Icon, label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors w-full">
          <LogOut className="h-5 w-5" />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
}