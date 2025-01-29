import { Home, BookOpen, Settings, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'الرئيسية', path: '/' },
  { icon: BookOpen, label: 'الفهرس', path: '/catalog' },
  { icon: Settings, label: 'الخدمات', path: '/services' },
  { icon: User, label: 'حسابي', path: '/profile' },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      <div className="flex items-center justify-around py-3">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === path
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}