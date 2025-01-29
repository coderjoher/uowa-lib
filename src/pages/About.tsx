import { Book, Users, GraduationCap, Globe, Award, Mail, Phone, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">عن مكتبة جامعة وارث الأنبياء</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            منارة المعرفة والبحث العلمي في العراق، نسعى لتوفير بيئة تعليمية متميزة تدعم الابتكار والتطور الأكاديمي
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '100,000+', label: 'كتاب ومرجع', icon: Book },
              { number: '50,000+', label: 'طالب مستفيد', icon: Users },
              { number: '1,000+', label: 'باحث وأكاديمي', icon: GraduationCap },
              { number: '24/7', label: 'خدمة رقمية', icon: Globe },
            ].map(({ number, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{number}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">رسالتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                توفير مصادر المعرفة وخدمات المعلومات المتميزة لدعم التعليم والبحث العلمي في الجامعة،
                وتعزيز التعلم المستمر والابتكار في المجتمع الأكاديمي.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                نطمح بأن يكون قسم المكتبة المركزية في جامعة وارث الانبياء من اكثر الاماكن ارتياداً وتطوراً مقارنة بباقي المكتبات وذلك بتوسعة المساحة وببناء طابق اضافي خاص للمطالعة واضافة شعبة الكترونية مزودة بالأنترنيت مع تطويرها بشكل مستمر ونموذجي .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">إنجازاتنا وجوائزنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '2023',
                title: 'أفضل مكتبة جامعية',
                description: 'تصنيف وزارة التعليم العالي'
              },
              {
                year: '2022',
                title: 'جائزة التميز الرقمي',
                description: 'اتحاد المكتبات العربية'
              },
              {
                year: '2021',
                title: 'شهادة الجودة ISO',
                description: 'في إدارة المكتبات الأكاديمية'
              }
            ].map((achievement) => (
              <div key={achievement.year} className="bg-white p-6 rounded-xl shadow-md">
                <Award className="h-10 w-10 text-accent mb-4" />
                <div className="text-sm text-accent font-semibold mb-2">{achievement.year}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">البريد الإلكتروني</h3>
                  <p className="text-gray-600">library@uowa.edu.iq</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">الهاتف</h3>
                  <p className="text-gray-600">+964 780 100 3060</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">العنوان</h3>
                  <p className="text-gray-600">العراق - كربلاء المقدسة / طريق بغداد - كربلاء
                    ( مقابل عمود 119)</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="input"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="input"
              />
              <textarea
                placeholder="رسالتك"
                rows={4}
                className="input"
              ></textarea>
              <button className="btn btn-primary w-full">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}