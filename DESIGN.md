# DESIGN.md — Egypt ICT Hub Design System

> **المرجع الرسمي للهوية البصرية للمشروع.** أي ملف جديد أو تعديل لازم يمشي على النظام ده.
> آخر توحيد: 2026-08 — كل الصفحات والدروس (62 درس ثانوي + index + secondary + preparatory) ملتزمة بيه.

---

## 1) الألوان (Design Tokens)

### الألوان الأساسية

| Token | القيمة | الاستخدام |
|---|---|---|
| `--primary` | `#3b5bff` | أزرق اللوجو — الأزرار، الروابط، العناوين المهمة، أرقام الوحدات |
| `--accent` | `#00c896` | أخضر التركواز — التمييز، الـ tags، الحالات الإيجابية الثانوية |
| `--bg` | `#0a0d1f` | خلفية الصفحة الداكنة |
| `--card` | `#111638` | خلفية الكروت |
| `--card-hover` | `#1a2050` | خلفية الكرت عند الـ hover |
| `--text` | `#ffffff` | النصوص الأساسية |
| `--dim` | `#8892b0` | النصوص الثانوية / الوصف |

### ألوان الحالة

| Token | القيمة | الاستخدام |
|---|---|---|
| `--success` | `#00ff88` | إجابة صحيحة / نجاح |
| `--danger` | `#ff4757` | إجابة خطأ / خطأ |
| `--warn` | `#ffd700` | تحذير / نجوم التقييم |

### ألوان الوحدات (Unit Accents)

تُستخدم كـ `--uc` في كروت الوحدات وأرقامها (`linear-gradient(135deg, <uc>, #3b5bff)`):

```
--s1: #06B6D4   سيان
--s2: #F59E0B   برتقالي
--s3: #06B6D4   سيان  ← كانت بنفسجي #8B5CF6 (اتشالت نهائياً)
--s4: #10B981   أخضر
--s5: #EC4899   وردي
--s6: #EF4444   أحمر
```

> ⚠️ **ممنوع تماماً اللون البنفسجي** `#8B5CF6` / `rgba(139, 92, 246, *)` بأي شكل —
> هو العلامة المسجّلة لتصاميم الـ AI. البديل الرسمي: السيان `#06B6D4`.

---

## 2) الخطوط

| الاستخدام | الخط |
|---|---|
| كل حاجة (عربي + إنجليزي) | **Baloo Bhaijaan 2** مع fallback `'Baloo 2', sans-serif` |

```html
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;600;700;800&family=Baloo+2:wght@400;600;700;800&display=swap" rel="stylesheet">
```

- الأوزان المستخدمة: **400 / 600 / 700 / 800** فقط
- ❌ متستخدمش weight **900** (بيدي إحساس AI) — أقصى حاجة **800**
- العناوين: 800 · نصوص عادية: 400 · نصوص مهمة: 600–700

---

## 3) الشكل العام

| العنصر | القيمة |
|---|---|
| `border-radius` كروت كبيرة | `20px` |
| `border-radius` كروت/صناديق متوسطة | `14px` – `16px` |
| `border-radius` عناصر صغيرة | `8px` – `12px` |
| `border-radius` أزرار حبة (pills) | `25px` – `50px` |
| حدود الكروت | `1px solid rgba(255, 255, 255, .05)` |
| ظل الكروت | `0 8px 24px rgba(0, 0, 0, .25)` |
| الاتجاه | `rtl` افتراضياً + نظام ترجمة `data-ar` / `data-en` وزر `langToggle` |

### قواعد التباين الإلزامية
- **كروت الوحدات**: خلفية داكنة `var(--card)` — **مش** لون الأزرار
- **الأزرار**: `var(--primary)` — مميزة عن الكروت دايماً
- **أرقام الوحدات** (`.unit-num`): هي الوحيدة اللي تاخد gradient من لون الوحدة للأزرق

---

## 4) ممنوعات الهوية (Anti-AI Slop Rules)

عشان التصميم ميبانش معمول بالـ AI:

1. ❌ البنفسجي بأي صيغة (`#8B5CF6`, `rgba(139,92,246,*)`, indigo gradients)
2. ❌ `font-weight: 900`
3. ❌ Glow / توهج على الأزرار والنصوص
4. ❌ خلفية cream/beige + serif italic + accent طوبي (النمط المتكرر الجديد)
5. ❌ ازدحام: عنوان + عنوان فرعي + 3 كروت متطابقين في كل قسم
6. ✅ المحتوى الأول، التصميم يتبني حواليه
7. ✅ عند الطلب من AI: قول "اعمل كذا" مش "تجنب كذا" — وحدد اتجاه بصري واضح

---

## 5) هيكل المشروع

```
EGYPT-ICT-HUB/
├── index.html                 ← الصفحة الرئيسية (portfolio)
├── secondary.html             ← صفحة المرحلة الثانوية (كروت الوحدات)
├── preparatory.html           ← صفحة المرحلة الإعدادية
├── Secondary/Year 1/          ← 62 درس (13 وحدة) — كل درس self-contained HTML
│   └── Unit N - Name/N-M Lesson/N-M Lesson.html
├── Preparatory/               ← دروس الإعدادي (19 stub فاضية حالياً)
├── Secondary/src/             ← مصادر الترجمة (extracted_en.md)
├── tools/                     ← سكريبتات (extract_en.py, apply_json.py)
├── assets/                    ← اللوجو، صورة الهيرو، favicon، og-image
└── index-redesigns/           ← معرض تجارب تصميم الـ index (01-22) — خارج النظام
```

---

## 6) قواعد تقنية ثابتة

1. **كل درس = ملف HTML واحد self-contained** (CSS + JS مدمجين، مفيش dependencies محلية)
2. **Google Fonts فقط** — Baloo Bhaijaan 2
3. **نظام الترجمة**: كل نص له `data-ar` (عامية مصرية) + `data-en` (إنجليزي)، والتبديل بزر `#langToggle` مع حفظ الاختيار في `localStorage.langPreference`
4. **الكويزات**: نظام recall quiz الموحّد (`.recall` / `.rq` / `.rq-opt[data-key]`) — الإجابة الصح تخضر والغلط تحمر بعد الاختيار
5. **Scroll-reveal**: `.section-inner { opacity: 0 }` + IntersectionObserver بيضيف `.visible` — **لازم** CSS fallback موجود:

```css
@keyframes autoReveal { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.section-inner { animation: autoReveal .7s ease-out both; }
.section-inner.visible { animation: none; opacity: 1; transform: translateY(0); }
```

6. **SEO أساسي في كل صفحة**: favicon links + `<meta name="description">` + OG/Twitter tags
7. **RTL**: `<html dir="rtl" lang="ar">` — والحركات الأفقية (marquee) ليها نسخة `[dir="rtl"]` معكوسة

---

## 7) Checklist قبل ما تسلّم أي صفحة جديدة

- [ ] `:root` فيه نفس التوكنز بالظبط (فوق)
- [ ] مفيش أي hex أو rgba بنفسجي
- [ ] الخط Baloo Bhaijaan 2 ومفيش weight 900
- [ ] الكروت داكنة والأزرار زرقا (تباين واضح)
- [ ] كل قسم له fallback يخلي المحتوى ظاهر لو الـ JS فشل
- [ ] `data-ar` عامية مصرية + `data-en` إنجليزي لكل نص
- [ ] meta description + favicon موجودين
- [ ] اتجاه RTL مضبوط والحركات شغالة فيه
