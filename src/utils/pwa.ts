import { Workbox } from 'workbox-window';

export function registerSW() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if (confirm('تم تحديث التطبيق. هل تريد إعادة التحميل؟')) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
}