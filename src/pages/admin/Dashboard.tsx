import Sidebar from '../../components/admin/Sidebar';
import { Card, Title, BarChart, DonutChart } from '@tremor/react';
import { 
  Users,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: 'إجمالي المستخدمين',
    value: '2,850',
    change: '+12.3%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'الكتب المستعارة',
    value: '456',
    change: '+4.5%',
    trend: 'up',
    icon: BookOpen,
  },
  {
    title: 'الفعاليات النشطة',
    value: '12',
    change: '-2.4%',
    trend: 'down',
    icon: Calendar,
  },
  {
    title: 'حجوزات القاعات',
    value: '89',
    change: '+8.7%',
    trend: 'up',
    icon: Clock,
  },
];

const chartdata = [
  {
    name: 'يناير',
    'زيارات المكتبة': 2890,
    'استعارة الكتب': 1234,
    'حجز القاعات': 456,
  },
  // Add more months...
];

const categories = [
  { name: 'الهندسة', value: 234 },
  { name: 'الطب', value: 189 },
  { name: 'العلوم', value: 322 },
  { name: 'الأدب', value: 156 },
  { name: 'التاريخ', value: 98 },
];

export default function Dashboard() {
  return (
    <div className="mr-64">
      <Sidebar />
      
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">لوحة التحكم</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
            return (
              <Card key={stat.title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendIcon className="h-4 w-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <Title>النشاط الشهري</Title>
            <BarChart
              data={chartdata}
              index="name"
              categories={['زيارات المكتبة', 'استعارة الكتب', 'حجز القاعات']}
              colors={['blue', 'teal', 'amber']}
              yAxisWidth={48}
              className="h-72 mt-4"
            />
          </Card>

          <Card>
            <Title>توزيع الكتب حسب التصنيف</Title>
            <DonutChart
              data={categories}
              category="value"
              index="name"
              colors={['blue', 'cyan', 'amber', 'rose', 'indigo']}
              className="h-72 mt-4"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}