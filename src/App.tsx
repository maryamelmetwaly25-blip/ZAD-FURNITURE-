/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Menu, X, Phone, MessageCircle, MapPin, Clock, 
  ChevronRight, ChevronLeft, Ruler, Palette, 
  Layers, Sofa, Bed, Tv, Coffee, ArrowRight,
  Sparkles, Check, Info, ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type StylePreference = 'modern' | 'classic' | 'mixed';
type ColorPreference = 'light' | 'dark';
type RoomSize = 'small' | 'medium' | 'large';

interface Recommendation {
  title: string;
  description: string;
  features: string[];
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 border border-gold flex items-center justify-center rotate-45">
            <span className="gold-text-gradient font-serif text-3xl -rotate-45 font-bold">زاد</span>
          </div>
          <div className="flex flex-col mr-2">
            <span className="text-xl font-serif tracking-widest gold-text-gradient leading-none uppercase">Zad</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60">Furniture</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <a href="#style-finder" className="hover:text-gold transition-colors">مكتشف النمط</a>
          <a href="#room-assistant" className="hover:text-gold transition-colors">مساعد المساحة</a>
          <a href="#customizer" className="hover:text-gold transition-colors">التخصيص</a>
          <a href="#comparison" className="hover:text-gold transition-colors">المقارنة</a>
          <a href="#contact" className="hover:text-gold transition-colors">اتصل بنا</a>
        </div>

        <button 
          className="md:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-luxury-black border-b border-gold/20 px-6 py-8 flex flex-col gap-6 text-center"
          >
            <a href="#style-finder" onClick={() => setIsOpen(false)} className="text-lg hover:text-gold">مكتشف النمط</a>
            <a href="#room-assistant" onClick={() => setIsOpen(false)} className="text-lg hover:text-gold">مساعد المساحة</a>
            <a href="#customizer" onClick={() => setIsOpen(false)} className="text-lg hover:text-gold">التخصيص</a>
            <a href="#comparison" onClick={() => setIsOpen(false)} className="text-lg hover:text-gold">المقارنة</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg hover:text-gold">اتصل بنا</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 border border-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 border border-gold/10 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10"
      >
        {/* Large Stylized Logo */}
        <div className="mb-16 mt-12 flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-gold flex items-center justify-center rotate-45 mb-12 luxury-glow transition-all duration-700 hover:rotate-[225deg]">
            <span className="gold-text-gradient font-serif text-6xl md:text-8xl -rotate-45 font-bold">زاد</span>
          </div>
          <span className="text-gold uppercase tracking-[0.5em] text-sm mb-6 block">Barakat Furniture</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
          حيث يلتقي <span className="gold-text-gradient">الفن بالراحة</span>
        </h1>
        <p className="max-w-2xl mx-auto gold-text-gradient text-2xl md:text-3xl font-serif leading-relaxed mb-12">
          زاد هي زادك للحيـاه ..
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#style-finder" className="px-10 py-4 bg-gold text-luxury-black font-bold uppercase tracking-widest hover:bg-gold-light transition-all luxury-glow">
            اكتشف نمطك الخاص
          </a>
          <a href="#contact" className="px-10 py-4 border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold/10 transition-all">
            تواصل معنا
          </a>
        </div>
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 mb-8">مرر للأسفل</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

const StyleFinder = () => {
  const [step, setStep] = useState(1);
  const [prefs, setPrefs] = useState<{
    style?: StylePreference;
    color?: ColorPreference;
    size?: RoomSize;
  }>({});

  const handleNext = (key: string, value: any) => {
    setPrefs({ ...prefs, [key]: value });
    setStep(step + 1);
  };

  const getRecommendation = (): Recommendation => {
    if (prefs.style === 'modern') {
      return {
        title: "المجموعة العصرية البسيطة",
        description: "تصميمات تتميز بخطوط نظيفة وأشكال هندسية، مثالية للمساحات المفتوحة والباحثين عن الهدوء البصري.",
        features: ["أرجل معدنية ذهبية", "أقمشة مخملية ناعمة", "إضاءة مدمجة خفية"]
      };
    } else if (prefs.style === 'classic') {
      return {
        title: "المجموعة الملكية الكلاسيكية",
        description: "فخامة لا تزول مع الزمن، تعتمد على الحفر اليدوي الدقيق والتفاصيل الغنية التي تعطي انطباعاً بالهيبة.",
        features: ["خشب زان طبيعي", "تطعيمات ذهبية يدوية", "أقمشة حريرية فاخرة"]
      };
    } else {
      return {
        title: "مجموعة 'نيو كلاسيك'",
        description: "مزيج ساحر يجمع بين أصالة الماضي وبساطة الحاضر، يناسب الأذواق التي تبحث عن التميز.",
        features: ["توازن بين الخشب والمعدن", "ألوان محايدة دافئة", "تصاميم انسيابية"]
      };
    }
  };

  return (
    <section id="style-finder" className="py-24 px-6 bg-luxury-gray/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto border border-gold/20 p-8 md:p-16 bg-luxury-black relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 gold-text-gradient">مكتشف النمط التفاعلي</h2>
          <p className="text-gray-400">أجب على بعض الأسئلة لنرشح لك الأثاث المثالي لمنزلك</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h3 className="text-2xl text-center mb-8">ما هو الطراز الذي تفضله؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'modern', label: 'عصري (Modern)', icon: <Tv /> },
                  { id: 'classic', label: 'كلاسيكي (Classic)', icon: <Sofa /> },
                  { id: 'mixed', label: 'نيو كلاسيك', icon: <Layers /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNext('style', item.id)}
                    className="p-8 border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all flex flex-col items-center gap-4 group"
                  >
                    <div className="text-gold group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="text-lg">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h3 className="text-2xl text-center mb-8">أي لوحة ألوان تفضل؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'light', label: 'ألوان فاتحة وهادئة', sub: 'أبيض، بيج، رمادي فاتح' },
                  { id: 'dark', label: 'ألوان داكنة وعميقة', sub: 'أسود، كحلي، أخضر ملكي' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNext('color', item.id)}
                    className="p-8 border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all flex flex-col items-center gap-2"
                  >
                    <span className="text-xl">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.sub}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(step - 1)} className="text-gold flex items-center gap-2 mx-auto mt-8">
                <ChevronRight size={18} /> العودة
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h3 className="text-2xl text-center mb-8">ما هي مساحة الغرفة؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'small', label: 'صغيرة', sub: 'أقل من 20 م²' },
                  { id: 'medium', label: 'متوسطة', sub: '20 - 40 م²' },
                  { id: 'large', label: 'واسعة', sub: 'أكثر من 40 م²' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNext('size', item.id)}
                    className="p-8 border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all flex flex-col items-center gap-2"
                  >
                    <span className="text-xl">{item.label}</span>
                    <span className="text-sm text-gray-500">{item.sub}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(step - 1)} className="text-gold flex items-center gap-2 mx-auto mt-8">
                <ChevronRight size={18} /> العودة
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-gold" size={40} />
              </div>
              <h3 className="text-3xl gold-text-gradient">{getRecommendation().title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {getRecommendation().description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {getRecommendation().features.map((feature, i) => (
                  <span key={i} className="px-4 py-2 bg-luxury-gray border border-gold/20 text-sm flex items-center gap-2">
                    <Check size={14} className="text-gold" /> {feature}
                  </span>
                ))}
              </div>
              <div className="pt-8 flex justify-center gap-4">
                <button 
                  onClick={() => setStep(1)} 
                  className="px-8 py-3 border border-gold text-gold hover:bg-gold/10 transition-all"
                >
                  إعادة الاختبار
                </button>
                <a href="#contact" className="px-8 py-3 bg-gold text-luxury-black font-bold hover:bg-gold-light transition-all">
                  اطلب استشارة مجانية
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const RoomAssistant = () => {
  const [roomType, setRoomType] = useState('living');
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(4);

  const area = width * length;

  const getTips = () => {
    if (roomType === 'living') {
      return {
        pieces: area > 25 ? "طقم كنبة 3 قطع + 2 فوتيه + طاولة وسط كبيرة" : "كنبة ركنية (L-Shape) + طاولة وسط ذكية",
        layout: "اجعل الكنبة الرئيسية في مواجهة نقطة التركيز (التلفاز أو المدفأة) مع ترك مسافة 60 سم للمرور.",
        dim: "يفضل أن تكون السجادة كبيرة بما يكفي لتوضع أرجل الأثاث الأمامية فوقها."
      };
    } else if (roomType === 'bedroom') {
      return {
        pieces: area > 20 ? "سرير كينج + 2 كومود + خزانة ملابس 6 ضلف + تسريحة" : "سرير كوين + 2 كومود + خزانة مدمجة",
        layout: "ضع السرير في منتصف الحائط الرئيسي مع ترك مسافة 70 سم على الأقل من الجانبين.",
        dim: "ارتفاع السرير المثالي مع المرتبة يجب أن يكون بين 55-65 سم لراحة الجلوس."
      };
    } else {
      return {
        pieces: area > 15 ? "طاولة طعام لـ 8 أفراد + بوفيه + نيش" : "طاولة طعام لـ 4-6 أفراد + بوفيه صغير",
        layout: "اترك مسافة 90 سم خلف كل كرسي للسماح للأشخاص بالتحرك بسهولة أثناء الجلوس.",
        dim: "طول طاولة الطعام المثالي لكل فرد هو 60 سم من عرض الطاولة."
      };
    }
  };

  return (
    <section id="room-assistant" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">أدوات ذكية</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">مساعد <br /><span className="gold-text-gradient">تخطيط المساحات</span></h2>
            <p className="text-gray-400 mb-12 text-lg">
              أدخل أبعاد غرفتك وسنقوم بحساب التوزيع الأمثل للأثاث واقتراح القطع المناسبة لمساحتك لضمان الراحة والأناقة.
            </p>

            <div className="space-y-8 bg-luxury-gray/50 p-8 border border-gold/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'living', label: 'غرفة معيشة', icon: <Sofa size={20} /> },
                  { id: 'bedroom', label: 'غرفة نوم', icon: <Bed size={20} /> },
                  { id: 'dining', label: 'غرفة طعام', icon: <Coffee size={20} /> }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setRoomType(type.id)}
                    className={`flex items-center justify-center gap-2 p-4 border transition-all ${roomType === type.id ? 'border-gold bg-gold/10 text-gold' : 'border-gold/20 text-gray-400 hover:border-gold/50'}`}
                  >
                    {type.icon} {type.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-sm text-gray-400 block">العرض (متر)</label>
                  <input 
                    type="range" min="2" max="10" step="0.5" value={width} 
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="text-right font-mono text-gold">{width} م</div>
                </div>
                <div className="space-y-4">
                  <label className="text-sm text-gray-400 block">الطول (متر)</label>
                  <input 
                    type="range" min="2" max="10" step="0.5" value={length} 
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="text-right font-mono text-gold">{length} م</div>
                </div>
              </div>

              <div className="pt-4 border-t border-gold/10 flex justify-between items-center">
                <span className="text-gray-400">المساحة الإجمالية:</span>
                <span className="text-2xl font-serif text-gold">{area} متر مربع</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-luxury-black border border-gold p-10 relative"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-gold" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-gold" />
            
            <h3 className="text-2xl mb-8 flex items-center gap-3">
              <Info className="text-gold" /> توصيات الخبراء
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-gold font-serif">01</span>
                </div>
                <div>
                  <h4 className="text-gold mb-2 uppercase tracking-wider text-sm">توزيع القطع</h4>
                  <p className="text-gray-300 leading-relaxed">{getTips().pieces}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-gold font-serif">02</span>
                </div>
                <div>
                  <h4 className="text-gold mb-2 uppercase tracking-wider text-sm">نصيحة التخطيط</h4>
                  <p className="text-gray-300 leading-relaxed">{getTips().layout}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-gold font-serif">03</span>
                </div>
                <div>
                  <h4 className="text-gold mb-2 uppercase tracking-wider text-sm">الأبعاد المثالية</h4>
                  <p className="text-gray-300 leading-relaxed">{getTips().dim}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gold/5 border border-gold/20 text-center">
              <p className="text-sm text-gold mb-4">هل تريد معاينة ثلاثية الأبعاد لمساحتك؟</p>
              <button className="text-white flex items-center gap-2 mx-auto hover:gap-4 transition-all">
                احجز موعداً مع مصمم داخلي <ChevronLeft size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Customizer = () => {
  const [wood, setWood] = useState('oak');
  const [color, setColor] = useState('gold');
  const [size, setSize] = useState('standard');

  const woods = [
    { id: 'oak', label: 'خشب بلوط (Oak)', desc: 'يتميز بمتانة عالية ونقوش طبيعية واضحة.' },
    { id: 'walnut', label: 'خشب جوز (Walnut)', desc: 'لون داكن طبيعي ومظهر فاخر جداً.' },
    { id: 'beech', label: 'خشب زان (Beech)', desc: 'خيار كلاسيكي قوي يتحمل الاستخدام الشاق.' }
  ];

  const colors = [
    { id: 'gold', label: 'ذهبي ملكي', hex: '#C9A646' },
    { id: 'silver', label: 'فضي عتيق', hex: '#C0C0C0' },
    { id: 'bronze', label: 'برونزي دافئ', hex: '#CD7F32' },
    { id: 'black', label: 'أسود مطفي', hex: '#1A1A1A' }
  ];

  return (
    <section id="customizer" className="py-24 px-6 bg-luxury-gray/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block">صمم قطعتك الخاصة</span>
          <h2 className="text-5xl font-serif mb-6 gold-text-gradient">تخصيص الأثاث الفاخر</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">اختر الخامات والألوان التي تعبر عن شخصيتك، وسيقوم حرفيونا بتحويل رؤيتك إلى واقع ملموس.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wood Selection */}
          <div className="p-8 border border-gold/20 bg-luxury-black luxury-glow transition-all">
            <div className="w-12 h-12 border border-gold flex items-center justify-center mb-6">
              <Palette className="text-gold" />
            </div>
            <h3 className="text-xl mb-6">نوع الخشب</h3>
            <div className="space-y-4">
              {woods.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setWood(item.id)}
                  className={`w-full text-right p-4 border transition-all ${wood === item.id ? 'border-gold bg-gold/5' : 'border-gold/10 hover:border-gold/30'}`}
                >
                  <div className="font-bold mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="p-8 border border-gold/20 bg-luxury-black luxury-glow transition-all">
            <div className="w-12 h-12 border border-gold flex items-center justify-center mb-6">
              <Sparkles className="text-gold" />
            </div>
            <h3 className="text-xl mb-6">لون اللمسات النهائية</h3>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setColor(item.id)}
                  className={`p-4 border transition-all flex flex-col items-center gap-3 ${color === item.id ? 'border-gold bg-gold/5' : 'border-gold/10 hover:border-gold/30'}`}
                >
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: item.hex, border: '1px solid rgba(255,255,255,0.1)' }} />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size & CTA */}
          <div className="p-8 border border-gold/20 bg-luxury-black luxury-glow transition-all flex flex-col">
            <div className="w-12 h-12 border border-gold flex items-center justify-center mb-6">
              <Ruler className="text-gold" />
            </div>
            <h3 className="text-xl mb-6">الأبعاد المطلوبة</h3>
            <div className="space-y-4 mb-auto">
              {['مقاسات قياسية', 'مقاسات مخصصة (حسب الطلب)', 'تصميم متكامل للغرفة'].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setSize(label)}
                  className={`w-full text-right p-4 border transition-all ${size === label ? 'border-gold bg-gold/5' : 'border-gold/10 hover:border-gold/30'}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gold/20">
              <button className="w-full py-4 bg-gold text-luxury-black font-bold uppercase tracking-widest hover:bg-gold-light transition-all mb-4">
                طلب تصميم مخصص
              </button>
              <button className="w-full py-4 border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold/10 transition-all">
                تحدث مع خبير
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif mb-6 gold-text-gradient">دليل اختيار الأفضل</h2>
          <p className="text-gray-400">قارن بين الخيارات المتاحة لتتخذ القرار الصحيح لمنزلك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Style Comparison */}
          <div className="space-y-8">
            <h3 className="text-2xl border-r-4 border-gold pr-4">العصري vs الكلاسيكي</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="p-4 text-right text-gold">الميزة</th>
                    <th className="p-4 text-right">العصري</th>
                    <th className="p-4 text-right">الكلاسيكي</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gold/10">
                    <td className="p-4 text-gold">الجمالية</td>
                    <td className="p-4">بساطة، خطوط حادة</td>
                    <td className="p-4">فخامة، تفاصيل محفورة</td>
                  </tr>
                  <tr className="border-b border-gold/10">
                    <td className="p-4 text-gold">المساحة</td>
                    <td className="p-4">يوفر شعوراً بالاتساع</td>
                    <td className="p-4">يحتاج مساحات واسعة</td>
                  </tr>
                  <tr className="border-b border-gold/10">
                    <td className="p-4 text-gold">الاستخدام</td>
                    <td className="p-4">عملي، سهل التنظيف</td>
                    <td className="p-4">استثماري، يدوم طويلاً</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-luxury-gray/50 border border-gold/10 italic text-gray-400">
              <span className="text-gold font-bold">نصيحتنا:</span> اختر العصري للشقق الحديثة والمساحات المفتوحة، والكلاسيكي للمجالس الرسمية والفلل ذات الأسقف العالية.
            </div>
          </div>

          {/* Material Comparison */}
          <div className="space-y-8">
            <h3 className="text-2xl border-r-4 border-gold pr-4">الخشب الطبيعي vs MDF</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="p-4 text-right text-gold">الميزة</th>
                    <th className="p-4 text-right">خشب طبيعي</th>
                    <th className="p-4 text-right">خشب MDF</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gold/10">
                    <td className="p-4 text-gold">العمر الافتراضي</td>
                    <td className="p-4">عقود طويلة (يورث)</td>
                    <td className="p-4">5 - 10 سنوات</td>
                  </tr>
                  <tr className="border-b border-gold/10">
                    <td className="p-4 text-gold">المقاومة</td>
                    <td className="p-4">عالية جداً للرطوبة</td>
                    <td className="p-4">يتأثر بالماء والحرارة</td>
                  </tr>
                  <tr className="border-b border-gold/10">
                    <td className="p-4 text-gold">القيمة</td>
                    <td className="p-4">تزداد قيمته مع الوقت</td>
                    <td className="p-4">اقتصادي وسهل التغيير</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-luxury-gray/50 border border-gold/10 italic text-gray-400">
              <span className="text-gold font-bold">نصيحتنا:</span> استثمر في الخشب الطبيعي للقطع الأساسية (غرف النوم، السفرة)، واستخدم MDF للقطع التكميلية أو الديكورات المؤقتة.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'استشارة تصميم',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "201061477726";
    const text = `الاسم: ${formData.name}%0Aالرقم: ${formData.phone}%0Aالموضوع: ${formData.subject}%0Aالرسالة: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-luxury-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-serif mb-8 gold-text-gradient">تفضل بزيارتنا</h2>
            <p className="text-gray-400 text-lg mb-12">نحن هنا لمساعدتك في خلق منزل أحلامك. تواصل معنا أو شرفنا بالزيارة في معرضنا.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-gold uppercase tracking-wider text-sm mb-1">الهاتف</h4>
                  <p className="text-xl dir-ltr text-right">+20 150 508 8613</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                  <MessageCircle className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-gold uppercase tracking-wider text-sm mb-1">واتساب</h4>
                  <p className="text-xl dir-ltr text-right">+20 106 147 7726</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-gold uppercase tracking-wider text-sm mb-1">العنوان</h4>
                  <p className="text-xl">دمياط - طريق بورسعيد مفارق السيالة</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-luxury-gray/30 p-10 border border-gold/20">
            <h3 className="text-2xl mb-8">أرسل لنا رسالة</h3>
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">الاسم الكامل</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-gold/30 py-3 focus:border-gold outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-b border-gold/30 py-3 focus:border-gold outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">الموضوع</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-transparent border-b border-gold/30 py-3 focus:border-gold outline-none transition-all appearance-none"
                >
                  <option className="bg-luxury-black">استشارة تصميم</option>
                  <option className="bg-luxury-black">طلب مخصص</option>
                  <option className="bg-luxury-black">استفسار عن الأسعار</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">الرسالة</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-gold/30 py-3 focus:border-gold outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-gold text-luxury-black font-bold uppercase tracking-widest hover:bg-gold-light transition-all luxury-glow">
                إرسال عبر واتساب
              </button>
            </form>

            <div className="mt-12 flex justify-center gap-6">
              <a href="#" className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <span className="text-xs font-bold">FB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gold/20 bg-luxury-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-gold flex items-center justify-center rotate-45">
            <span className="gold-text-gradient font-serif text-lg -rotate-45 font-bold">زاد</span>
          </div>
          <span className="font-serif tracking-widest gold-text-gradient mr-2">Barakat Furniture</span>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة. صمم بكل فخامة.
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-gold transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-gold transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-luxury-black">
      <Navbar />
      <main>
        <Hero />
        <StyleFinder />
        <RoomAssistant />
        <Customizer />
        <Comparison />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201061477726" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform luxury-glow"
      >
        <MessageCircle size={30} fill="white" />
      </a>
    </div>
  );
}
