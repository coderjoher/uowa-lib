import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Card, Title, BarChart, DonutChart, AreaChart } from '@tremor/react';
import { Calendar } from 'lucide-react';
import DatePicker from '../../components/DatePicker';

const visitorsData = [
  {
    date: '2024-01',
    'زيارات المكتبة': 2890,
    'استعارة الكتب': 1234,
    'حجز القاعات': 456,
  },
  {
    date: '2024-02',
    'زيارات المكتبة': 3200,
    'استعارة الكتب': 1456,
    'حجز القاعات': 567,
  },
  {
    date: '2024-03',
    'زيارات المكتبة': 2950,
    'استعارة الكتب': 1345,
    'حجز القاعات': 489,
  },
];

const bookCategories = [
  { name: 'الهندسة', value: 234 },
  { name: 'الطب', value: 189 },
  { name: 'العلوم', value: 322 },
  { name: 'الأدب', value: 156 },
  { name: 'التاريخ', value: 98 },
];

const dailyVisits = [
  { date: '2024-03-01', visits: 145 },
  { date: '2024-03-02', visits: 156 },
  { date: '2024-03-03', visits: 123 },
  { date: '2024-03-04', visits: 178 },
  { date: '2024-03-05', visits: 189 },
  { date: '2024-03-06', visits: 167 },
  { date: '2024-03-07', visits: 145 },
];

export default function Analytics() {
  const [dateRange, setDateRange] = useState({
    start: new Date(2024, 2, 1),
    end: new Date(),
  });

  return (
    <div className="mr-64">
      <Sidebar />
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">التحليلات والإحصائيات</h1>
          
          <div className="flex items-center gap-4">
            <DatePicker
              selected={dateRange.start}
              onSelect={(date) => setDateRange({ ...dateRange, start: date || new Date() })}
              label="من تاريخ"
            />
            <DatePicker
              selected={dateRange.end}
              onSelect={(date) => setDateRange({ ...dateRange, end: date || new Date() })}
              label="إلى تاريخ"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <Title>النشاط الشهري</Title>
            <BarChart
              data={visitorsData}
              index="date"
              categories={['زيارات المكتبة', 'استعارة الكتب', 'حجز القاعات']}
              colors={['blue', 'teal', 'amber']}
              yAxisWidth={48}
              className="h-72 mt-4"
            />
          </Card>

          <Card>
            <Title>توزيع الكتب حسب التصنيف</Title>
            <DonutChart
              data={bookCategories}
              category="value"
              index="name"
              colors={['blue', 'cyan', 'amber', 'rose', 'indigo']}
              className="h-72 mt-4"
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card>
            <Title>الزيارات اليومية</Title>
            <AreaChart
              data={dailyVisits}
              index="date"
              categories={['visits']}
              colors={['blue']}
              yAxisWidth={48}
              className="h-72 mt-4"
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <Card>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">أكثر الكتب استعارة</h3>
              <div className="space-y-4">
                {[
                  { title: 'أساسيات الهندسة الكهربائية', count: 45 },
                  { title: 'مبادئ الطب الباطني', count: 38 },
                  { title: 'علم النفس التربوي', count: 32 },
                ].map((book, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{book.title}</span>
                    <span className="font-semibold">{book.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">أوقات الذروة</h3>
              <div className="space-y-4">
                {[
                  { time: '10:00 - 11:00', count: 89 },
                  { time: '13:00 - 14:00', count: 76 },
                  { time: '15:00 - 16:00', count: 67 },
                ].map((peak, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{peak.time}</span>
                    <span className="font-semibold">{peak.count} زائر</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">القاعات الأكثر حجزاً</h3>
              <div className="space-y-4">
                {[
                  { name: 'قاعة المؤتمرات الرئيسية', count: 23 },
                  { name: 'قاعة الدراسة الجماعية (أ)', count: 18 },
                  { name: 'قاعة الدراسة الفردية (ب)', count: 15 },
                ].map((room, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{room.name}</span>
                    <span className="font-semibold">{room.count} حجز</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}