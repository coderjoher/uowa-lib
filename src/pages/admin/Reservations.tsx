import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Clock, Check, X, Search } from 'lucide-react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';

const reservations = [
  {
    id: 1,
    studentName: 'أحمد محمد',
    studentId: '20240001',
    roomType: 'قاعة دراسة فردية',
    date: '2024-03-20',
    startTime: '10:00',
    duration: '2 ساعات',
    status: 'pending',
  },
  // Add more reservations...
];

const statusColors = {
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'قيد المراجعة' },
  approved: { bg: 'bg-green-100', text: 'text-green-800', label: 'تم الموافقة' },
  rejected: { bg: 'bg-red-100', text: 'text-red-800', label: 'مرفوض' },
};

export default function AdminReservations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = reservation.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         reservation.studentId.includes(searchQuery);
    const matchesStatus = !statusFilter || reservation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id: number) => {
    // Handle approve
  };

  const handleReject = (id: number) => {
    // Handle reject
  };

  return (
    <div className="mr-64">
      <Sidebar />
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">إدارة حجوزات القاعات</h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن طالب..."
                  className="input pl-10"
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={statusFilter || ''}
                onChange={(e) => setStatusFilter(e.target.value || null)}
                className="input"
              >
                <option value="">جميع الحالات</option>
                <option value="pending">قيد المراجعة</option>
                <option value="approved">تم الموافقة</option>
                <option value="rejected">مرفوض</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-4 px-6 font-medium text-gray-600">الطالب</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">القاعة</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">التاريخ</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">الوقت</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">الحالة</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr key={reservation.id} className="border-b border-gray-200 last:border-0">
                    <td className="py-4 px-6">
                      <div>
                        <div className="font-medium text-gray-900">{reservation.studentName}</div>
                        <div className="text-sm text-gray-500">{reservation.studentId}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">{reservation.roomType}</td>
                    <td className="py-4 px-6">
                      {format(new Date(reservation.date), 'dd MMM yyyy', { locale: arSA })}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{reservation.startTime}</span>
                        <span className="text-gray-400">({reservation.duration})</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        statusColors[reservation.status as keyof typeof statusColors].bg
                      } ${statusColors[reservation.status as keyof typeof statusColors].text}`}>
                        {statusColors[reservation.status as keyof typeof statusColors].label}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {reservation.status === 'pending' && (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleApprove(reservation.id)}
                            className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleReject(reservation.id)}
                            className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}