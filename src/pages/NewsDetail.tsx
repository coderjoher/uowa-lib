import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Calendar, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';

const news = {
  1: {
    id: 1,
    title: 'افتتاح قاعة المطالعة الجديدة',
    content: `
      <p>تم اليوم افتتاح قاعة المطالعة الجديدة في مكتبة وارث، والتي تعد إضافة نوعية لمرافق المكتبة. تتميز القاعة الجديدة بتصميمها العصري وتجهيزاتها المتطورة التي تلبي احتياجات الطلاب والباحثين.</p>
      
      <p>تضم القاعة:</p>
      <ul>
        <li>مساحات دراسية فردية مجهزة</li>
        <li>قاعات للدراسة الجماعية</li>
        <li>شبكة إنترنت عالية السرعة</li>
        <li>أجهزة حاسوب حديثة</li>
      </ul>

      <p>وقد أكد عميد الكلية في كلمته خلال حفل الافتتاح على أهمية توفير بيئة دراسية متميزة تساعد الطلاب على التحصيل العلمي وتشجعهم على البحث والابتكار.</p>
    `,
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000&h=1000',
  },
};

export default function NewsDetail() {
  const { id } = useParams();
  const newsItem = news[Number(id)];

  if (!newsItem) {
    return <div>الخبر غير موجود</div>;
  }

  const shareNews = () => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.title,
        url: window.location.href,
      });
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <time>
              {format(new Date(newsItem.date), 'dd MMMM yyyy', { locale: arSA })}
            </time>
          </div>
          <button
            onClick={shareNews}
            className="btn btn-ghost"
          >
            <Share2 className="h-5 w-5" />
            مشاركة
          </button>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-8">
          {newsItem.title}
        </h1>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />
      </div>
    </motion.article>
  );
}