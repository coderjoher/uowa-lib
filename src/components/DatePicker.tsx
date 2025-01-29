import { useState } from 'react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface DatePickerProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  label?: string;
  minDate?: Date;
}

export default function DatePicker({ selected, onSelect, label, minDate }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-700 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
      >
        <CalendarIcon className="h-5 w-5 text-gray-400" />
        <span>
          {selected ? format(selected, 'dd MMMM yyyy', { locale: arSA }) : 'اختر التاريخ'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 z-50">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 rtl">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                onSelect(date);
                setIsOpen(false);
              }}
              locale={arSA}
              disabled={minDate ? { before: minDate } : undefined}
              modifiers={{
                today: new Date(),
              }}
              modifiersStyles={{
                today: {
                  fontWeight: 'bold',
                  color: 'var(--primary)',
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}