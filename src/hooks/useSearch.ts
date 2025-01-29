import { useState, useEffect, useCallback } from 'react';

export function useSearch<T extends Record<string, any>>(
  items: T[],
  searchFields: (keyof T)[],
  filters?: Partial<Record<keyof T, any>>
) {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const results = items.filter((item) => {
      // Check filters first
      if (filters) {
        const matchesFilters = Object.entries(filters).every(([key, value]) => {
          if (!value) return true;
          const itemValue = item[key];
          if (typeof itemValue === 'string' && typeof value === 'string') {
            return itemValue.toLowerCase().includes(value.toLowerCase());
          }
          return itemValue === value;
        });
        if (!matchesFilters) return false;
      }

      return true;
    });

    setFilteredItems(results);
  }, [items, filters]);

  return {
    filteredItems,
  };
}