import { useState } from 'react';
import { Clock } from 'lucide-react';

interface TimePickerProps {
  selected: string;
  onSelect: (time: string) => void;
  label?: string;
  minTime?: string;
  maxTime?: string;
  interval?: number;
}

export default function TimePicker({
  selected,
  onSelect,
  label,
  minTime = '08:00',
  maxTime = '20:00',
  interval = 30
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const generateTimeSlots = () => {
    const slots = [];
    const [minHour, minMinute] = minTime.split(':').map(Number);
    const [maxHour, maxMinute] = maxTime.split(':').map(Number);
    
    let currentHour = minHour;
    let currentMinute = minMinute;

    while (
      currentHour < maxHour ||
      (currentHour === maxHour && currentMinute <= maxMinute)
    ) {
      const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
      slots.push(timeString);

      currentMinute += interval;
      if (currentMinute >= 60) {
        currentHour += 1;
        currentMinute = 0;
      }
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

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
        <Clock className="h-5 w-5 text-gray-400" />
        <span>{selected || 'اختر الوقت'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 z-50 w-48">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => {
                  onSelect(time);
                  setIsOpen(false);
                }}
                className={`w-full text-right px-4 py-2 hover:bg-gray-50 ${
                  selected === time ? 'bg-primary/5 text-primary font-medium' : 'text-gray-700'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}