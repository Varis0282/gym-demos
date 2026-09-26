// Shared bilingual content consumed by all 5 gym themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const programs = [
  { icon: "Dumbbell", en: { title: "Strength Training", desc: "Free weights, racks and machines with proper form coaching — build real strength safely, beginner to advanced." }, hi: { title: "स्ट्रेंथ ट्रेनिंग", desc: "फ्री वेट्स, रैक और मशीनें, सही फॉर्म कोचिंग के साथ — बिगिनर से एडवांस तक, सुरक्षित तरीके से असली ताकत बनाएँ।" } },
  { icon: "Flame", en: { title: "Cardio & HIIT", desc: "Treadmills, cycles, rowers and high-intensity interval batches that burn fat fast and build stamina." }, hi: { title: "कार्डियो व HIIT", desc: "ट्रेडमिल, साइकिल, रोवर और हाई-इंटेंसिटी बैच — तेज़ी से फैट बर्न करें और स्टैमिना बढ़ाएँ।" } },
  { icon: "Sparkles", en: { title: "Yoga & Zumba", desc: "Morning yoga for flexibility and stress relief, evening Zumba for fun cardio — certified instructors, all levels." }, hi: { title: "योग व ज़ुम्बा", desc: "सुबह योग — लचीलापन और तनाव मुक्ति; शाम ज़ुम्बा — मज़ेदार कार्डियो। प्रमाणित इंस्ट्रक्टर, हर स्तर के लिए।" } },
  { icon: "Zap", en: { title: "CrossFit & Functional", desc: "Rope, kettlebell, box and battle-rope circuits for athletes and anyone who wants next-level fitness." }, hi: { title: "क्रॉसफिट व फंक्शनल", desc: "रोप, केटलबेल, बॉक्स और बैटल-रोप सर्किट — एथलीट्स और नेक्स्ट-लेवल फिटनेस चाहने वालों के लिए।" } },
  { icon: "Target", en: { title: "Personal Training", desc: "One-on-one coaching with a dedicated trainer, custom plan and weekly measurements — fastest way to your goal." }, hi: { title: "पर्सनल ट्रेनिंग", desc: "समर्पित ट्रेनर के साथ वन-टू-वन कोचिंग, कस्टम प्लान और साप्ताहिक माप — लक्ष्य तक सबसे तेज़ रास्ता।" } },
  { icon: "Salad", en: { title: "Diet & Nutrition Counseling", desc: "Free diet chart with every membership — Indian home-food plans, veg and non-veg, made by certified nutritionists." }, hi: { title: "डाइट व न्यूट्रिशन काउंसलिंग", desc: "हर मेंबरशिप के साथ फ्री डाइट चार्ट — घर के भारतीय खाने पर आधारित वेज/नॉन-वेज प्लान, प्रमाणित न्यूट्रिशनिस्ट द्वारा।" } },
];

export const plans = [
  { en: { name: "Monthly", period: "per month", features: ["All equipment access", "Group cardio & yoga", "Free diet chart", "Steam bath"] }, hi: { name: "मासिक", period: "प्रति माह", features: ["सभी इक्विपमेंट", "ग्रुप कार्डियो व योग", "फ्री डाइट चार्ट", "स्टीम बाथ"] }, price: "₹1,200", popular: false },
  { en: { name: "Quarterly", period: "3 months", features: ["Everything in Monthly", "1 free PT session", "Body composition test", "Ladies-only batch access"] }, hi: { name: "त्रैमासिक", period: "3 महीने", features: ["मासिक की सभी सुविधाएँ", "1 फ्री PT सेशन", "बॉडी कंपोज़िशन टेस्ट", "लेडीज़-ओनली बैच"] }, price: "₹3,000", popular: true },
  { en: { name: "Annual", period: "12 months", features: ["Everything in Quarterly", "4 free PT sessions", "Quarterly diet revision", "Freeze up to 30 days"] }, hi: { name: "वार्षिक", period: "12 महीने", features: ["त्रैमासिक की सभी सुविधाएँ", "4 फ्री PT सेशन", "हर तिमाही डाइट रिवीज़न", "30 दिन तक फ्रीज़"] }, price: "₹9,999", popular: false },
];

export const trainers = [
  { id: "rohit-sir", photo: 0, en: { name: "Rohit Sengar", spec: "Head Coach — Strength", qual: "K11 Certified, Sports Nutrition Diploma", exp: "12+ years experience", bio: "Founder and head coach. State-level powerlifting medalist who has coached 400+ transformations. Known for form-first training and no-shortcut discipline." }, hi: { name: "रोहित सेंगर", spec: "हेड कोच — स्ट्रेंथ", qual: "K11 सर्टिफाइड, स्पोर्ट्स न्यूट्रिशन डिप्लोमा", exp: "12+ वर्ष का अनुभव", bio: "संस्थापक और हेड कोच। राज्य-स्तरीय पावरलिफ्टिंग मेडलिस्ट, 400+ ट्रांसफॉर्मेशन कोच कर चुके हैं। फॉर्म-फर्स्ट ट्रेनिंग और अनुशासन के लिए प्रसिद्ध।" }, slots: "Mon–Sat · Morning & Evening" },
  { id: "priyanka-maam", photo: 1, en: { name: "Priyanka Bhatt", spec: "Ladies Batch & Zumba", qual: "ACE Certified, Zumba B1 Licensed", exp: "8+ years experience", bio: "Leads the ladies-only morning batch. Specialist in postnatal fitness and weight loss for women — 200+ members trained with zero-judgment coaching." }, hi: { name: "प्रियंका भट्ट", spec: "लेडीज़ बैच व ज़ुम्बा", qual: "ACE सर्टिफाइड, ज़ुम्बा B1 लाइसेंस", exp: "8+ वर्ष का अनुभव", bio: "लेडीज़-ओनली मॉर्निंग बैच की प्रमुख। महिलाओं के वेट लॉस और पोस्टनेटल फिटनेस की विशेषज्ञ — 200+ मेंबर्स को बिना जजमेंट कोचिंग।" }, slots: "Mon–Sat · 10 AM – 12 PM" },
  { id: "arjun-sir", photo: 2, en: { name: "Arjun Nagar", spec: "CrossFit & HIIT", qual: "CrossFit L1, Kettlebell Certified", exp: "7+ years experience", bio: "Ex-army physical training instructor. Runs the toughest (and most loved) HIIT circuits in Indore. Specialist in athletic conditioning." }, hi: { name: "अर्जुन नागर", spec: "क्रॉसफिट व HIIT", qual: "क्रॉसफिट L1, केटलबेल सर्टिफाइड", exp: "7+ वर्ष का अनुभव", bio: "पूर्व सेना PT इंस्ट्रक्टर। इंदौर के सबसे कठिन (और सबसे पसंदीदा) HIIT सर्किट चलाते हैं। एथलेटिक कंडीशनिंग विशेषज्ञ।" }, slots: "Mon–Sat · Evening" },
  { id: "kavya-maam", photo: 3, en: { name: "Kavya Iyer", spec: "Yoga & Nutrition", qual: "RYT-200, Certified Nutritionist", exp: "9+ years experience", bio: "Morning yoga instructor and the nutritionist behind every IronCore diet chart. Believes fitness is built in the kitchen as much as the gym." }, hi: { name: "काव्या अय्यर", spec: "योग व न्यूट्रिशन", qual: "RYT-200, सर्टिफाइड न्यूट्रिशनिस्ट", exp: "9+ वर्ष का अनुभव", bio: "मॉर्निंग योग इंस्ट्रक्टर और हर आयरनकोर डाइट चार्ट के पीछे की न्यूट्रिशनिस्ट। मानती हैं कि फिटनेस जिम जितनी ही किचन में बनती है।" }, slots: "Mon–Sat · Morning" },
];

export const transformations = [
  { photo: 0, name: "Vishal Rathore", en: { result: "Lost 18 kg", duration: "6 months", detail: "From 96 kg to 78 kg — reversed pre-diabetes. 'Rohit sir changed my life, not just my body.'" }, hi: { result: "18 किलो घटाया", duration: "6 महीने", detail: "96 से 78 किलो — प्री-डायबिटीज़ भी उलट गई। 'रोहित सर ने सिर्फ बॉडी नहीं, ज़िंदगी बदली।'" } },
  { photo: 1, name: "Neha Agrawal", en: { result: "Lost 14 kg post-pregnancy", duration: "8 months", detail: "Ladies batch + Priyanka ma'am's plan. 'I got my confidence back at 34.'" }, hi: { result: "प्रेगनेंसी के बाद 14 किलो घटाया", duration: "8 महीने", detail: "लेडीज़ बैच + प्रियंका मैम का प्लान। '34 की उम्र में आत्मविश्वास वापस मिला।'" } },
  { photo: 2, name: "Saurabh Jain", en: { result: "Gained 8 kg muscle", duration: "10 months", detail: "Skinny to strong — 54 kg to 62 kg with strength program and diet chart." }, hi: { result: "8 किलो मसल बनाया", duration: "10 महीने", detail: "दुबले से मज़बूत — स्ट्रेंथ प्रोग्राम और डाइट चार्ट से 54 से 62 किलो।" } },
  { photo: 3, name: "Ritu Malhotra", en: { result: "Lost 11 kg", duration: "5 months", detail: "Zumba + diet counseling. 'The ladies batch feels like family, not a gym.'" }, hi: { result: "11 किलो घटाया", duration: "5 महीने", detail: "ज़ुम्बा + डाइट काउंसलिंग। 'लेडीज़ बैच जिम नहीं, परिवार जैसा लगता है।'" } },
  { photo: 4, name: "Aditya Pawar", en: { result: "Marathon-ready at 45", duration: "1 year", detail: "From breathless on stairs to finishing the Indore half-marathon." }, hi: { result: "45 की उम्र में मैराथन-रेडी", duration: "1 साल", detail: "सीढ़ियों पर हाँफने से लेकर इंदौर हाफ-मैराथन पूरी करने तक।" } },
  { photo: 5, name: "Shreya Kulkarni", en: { result: "Deadlift 100 kg", duration: "14 months", detail: "College student to state powerlifting qualifier under coach Rohit." }, hi: { result: "100 किलो डेडलिफ्ट", duration: "14 महीने", detail: "कॉलेज स्टूडेंट से कोच रोहित के अंडर स्टेट पावरलिफ्टिंग क्वालिफायर तक।" } },
];

export const reviews = [
  { name: "Vishal Rathore", area: "Palasia, Indore", stars: 5, en: "Trainers actually train you here — they correct your form on every set. Not like big gyms where you pay and nobody looks at you.", hi: "यहाँ ट्रेनर सच में ट्रेन करते हैं — हर सेट पर फॉर्म सही कराते हैं। बड़े जिम जैसा नहीं जहाँ पैसे लेकर कोई देखता भी नहीं।" },
  { name: "Neha Agrawal", area: "Old Palasia, Indore", stars: 5, en: "The ladies-only morning batch is a blessing. Clean, safe and Priyanka ma'am is amazing. My mother-in-law joined too!", hi: "लेडीज़-ओनली मॉर्निंग बैच वरदान है। साफ, सुरक्षित और प्रियंका मैम कमाल हैं। मेरी सासु माँ ने भी जॉइन कर लिया!" },
  { name: "Rahul Deshpande", area: "Geeta Bhawan, Indore", stars: 5, en: "₹1,200 a month with a free diet chart and steam bath — better equipment than gyms charging three times more.", hi: "₹1,200 महीने में फ्री डाइट चार्ट और स्टीम बाथ — तीन गुना फीस वाले जिम से बेहतर इक्विपमेंट।" },
  { name: "Sana Sheikh", area: "Palasia, Indore", stars: 4, en: "Zumba evenings are so much fun that workout doesn't feel like workout. Wish they add one more batch — it gets full!", hi: "शाम का ज़ुम्बा इतना मज़ेदार है कि वर्कआउट, वर्कआउट लगता ही नहीं। एक और बैच जोड़ें — फुल हो जाता है!" },
  { name: "Aditya Pawar", area: "Manorama Ganj, Indore", stars: 5, en: "45 years old, first time in a gym, and nobody made me feel out of place. One year later I ran a half-marathon.", hi: "45 साल की उम्र, पहली बार जिम — और किसी ने अजीब महसूस नहीं होने दिया। एक साल बाद हाफ-मैराथन दौड़ी।" },
  { name: "Shreya Kulkarni", area: "Bhawarkua, Indore", stars: 5, en: "Serious lifting culture with proper platforms and bumper plates. Coach Rohit's programming took my deadlift from 40 to 100 kg.", hi: "प्रॉपर प्लेटफॉर्म और बंपर प्लेट्स के साथ सीरियस लिफ्टिंग कल्चर। कोच रोहित की प्रोग्रामिंग से डेडलिफ्ट 40 से 100 किलो पहुँची।" },
];

export const faqs = [
  { en: { q: "Is the first workout really free?", a: "Yes — one full trial workout with a trainer, plus a body composition check and goal discussion. No payment details needed. Come, train, then decide." }, hi: { q: "क्या पहला वर्कआउट सच में फ्री है?", a: "हाँ — ट्रेनर के साथ पूरा ट्रायल वर्कआउट, बॉडी कंपोज़िशन चेक और गोल डिस्कशन। कोई पेमेंट नहीं। आइए, ट्रेन कीजिए, फिर फैसला कीजिए।" } },
  { en: { q: "Is there a separate batch for women?", a: "Yes — a ladies-only batch runs Mon–Sat, 10 AM to 12 PM, led by our female coach Priyanka. Women are of course welcome in all regular hours too." }, hi: { q: "क्या महिलाओं के लिए अलग बैच है?", a: "हाँ — लेडीज़-ओनली बैच सोम–शनि सुबह 10 से 12, महिला कोच प्रियंका की अगुवाई में। सभी सामान्य समय में भी महिलाओं का स्वागत है।" } },
  { en: { q: "I'm a complete beginner. Will I manage?", a: "Beginners are our specialty. Your first week is fully guided — trainers teach every machine and movement, and your plan starts easy and builds up." }, hi: { q: "मैं बिल्कुल बिगिनर हूँ, कर पाऊँगा/पाऊँगी?", a: "बिगिनर हमारी खासियत हैं। पहला हफ्ता पूरी तरह गाइडेड — ट्रेनर हर मशीन और मूवमेंट सिखाते हैं, प्लान आसान से शुरू होकर बढ़ता है।" } },
  { en: { q: "Is the diet chart extra?", a: "No — a personalized diet chart (Indian home food, veg or non-veg) is free with every membership, made by our certified nutritionist." }, hi: { q: "क्या डाइट चार्ट के अलग पैसे लगते हैं?", a: "नहीं — पर्सनलाइज़्ड डाइट चार्ट (घर का भारतीय खाना, वेज/नॉन-वेज) हर मेंबरशिप के साथ फ्री, सर्टिफाइड न्यूट्रिशनिस्ट द्वारा।" } },
  { en: { q: "Can I pause my membership?", a: "Annual memberships can be frozen up to 30 days (exams, travel, illness). Quarterly up to 10 days. Just inform us on WhatsApp." }, hi: { q: "क्या मेंबरशिप पॉज़ कर सकते हैं?", a: "वार्षिक मेंबरशिप 30 दिन तक फ्रीज़ हो सकती है (परीक्षा, यात्रा, बीमारी)। त्रैमासिक 10 दिन तक। बस WhatsApp पर बता दें।" } },
  { en: { q: "What about parking and lockers?", a: "Free two-wheeler parking at the building, paid car parking next door. Lockers, changing rooms, showers and steam bath are included." }, hi: { q: "पार्किंग और लॉकर की क्या व्यवस्था है?", a: "बिल्डिंग में दोपहिया पार्किंग फ्री, बगल में कार पार्किंग पेड। लॉकर, चेंजिंग रूम, शावर और स्टीम बाथ शामिल हैं।" } },
];

export const stats = [
  { value: "1,200+", en: "Active Members", hi: "सक्रिय मेंबर्स" },
  { value: "400+", en: "Transformations", hi: "ट्रांसफॉर्मेशन" },
  { value: "8", en: "Certified Trainers", hi: "प्रमाणित ट्रेनर" },
  { value: "4.8★", en: "Google Rating", hi: "गूगल रेटिंग" },
];

export const whyUs = [
  { icon: "Award", en: { title: "Certified, Present Trainers", desc: "K11/ACE certified coaches on the floor every hour — your form gets corrected, not ignored." }, hi: { title: "प्रमाणित, मौजूद ट्रेनर", desc: "हर घंटे फ्लोर पर K11/ACE सर्टिफाइड कोच — आपका फॉर्म सुधरता है, नज़रअंदाज़ नहीं होता।" } },
  { icon: "Users", en: { title: "Ladies-Only Morning Batch", desc: "A safe, comfortable 10 AM–12 PM batch led by a female coach — mothers, homemakers, beginners welcome." }, hi: { title: "लेडीज़-ओनली मॉर्निंग बैच", desc: "महिला कोच के साथ सुबह 10–12 का सुरक्षित, सहज बैच — माताएँ, गृहिणियाँ, बिगिनर सब आमंत्रित।" } },
  { icon: "Salad", en: { title: "Free Diet Chart", desc: "Personalized Indian-food nutrition plan with every membership — because abs are made in the kitchen." }, hi: { title: "फ्री डाइट चार्ट", desc: "हर मेंबरशिप के साथ भारतीय खाने पर आधारित पर्सनल न्यूट्रिशन प्लान — क्योंकि बॉडी किचन में बनती है।" } },
  { icon: "ShieldCheck", en: { title: "Clean, Complete, Honest", desc: "Sanitized equipment, steam bath, lockers, transparent fees — no hidden 'registration' charges ever." }, hi: { title: "साफ, संपूर्ण, ईमानदार", desc: "सैनिटाइज़्ड इक्विपमेंट, स्टीम बाथ, लॉकर, पारदर्शी फीस — कभी कोई छिपा 'रजिस्ट्रेशन' चार्ज नहीं।" } },
];

export const goals = [
  { en: "Weight Loss", hi: "वज़न घटाना" },
  { en: "Muscle Gain", hi: "मसल बनाना" },
  { en: "General Fitness", hi: "जनरल फिटनेस" },
  { en: "Yoga & Flexibility", hi: "योग व लचीलापन" },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", programs: "Programs", trainers: "Trainers", results: "Transformations", contact: "Join & Contact", book: "Book Free Trial" },
    hero: {
      badge: "Palasia's most trusted gym since 2016",
      title: "Stronger Every Day,",
      titleAccent: "Starting Today",
      sub: "Certified trainers, a ladies-only batch, free diet charts and 400+ real transformations — at Palasia Square, Indore. Book a free trial workout on WhatsApp.",
      cta1: "Book Free Trial Workout",
      cta2: "Call Now",
      open: "Open Now · 5:30 AM – 11 AM, 4 PM – 10 PM",
    },
    sections: {
      programsTitle: "Our Programs",
      programsSub: "Strength to Zumba — one membership, every way to get fit.",
      plansTitle: "Membership Plans",
      plansSub: "Honest pricing. No hidden registration charges. Ever.",
      trainersTitle: "Meet Your Coaches",
      trainersSub: "Certified trainers who stay on the floor, not behind the desk.",
      whyTitle: "Why Members Choose IronCore",
      whySub: "1,200+ members, one reason — we actually coach.",
      resultsTitle: "Real Transformations",
      resultsSub: "Real members, real numbers — from this very floor.",
      reviewsTitle: "What Members Say",
      reviewsSub: "Honest words from Indore members.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything people ask before their first visit.",
      galleryTitle: "Inside IronCore",
      gallerySub: "5,000 sq ft of iron, cardio, yoga studio and steam bath.",
      visitTitle: "Find Us",
      visitSub: "Palasia Square — 5 minutes from anywhere in central Indore.",
      ctaTitle: "The hardest part is walking in. Once.",
      ctaSub: "Book your free trial workout — no payment, no pressure. Just come train once.",
    },
    booking: {
      title: "Book a Free Trial Workout",
      sub: "Fill this form — your request goes directly to our WhatsApp. We confirm your trial slot within 15 minutes.",
      name: "Your Name", namePh: "e.g. Vishal Rathore",
      phone: "Mobile Number", phonePh: "e.g. 92024 20455",
      goal: "Your Fitness Goal", anyGoal: "Not sure — help me decide",
      date: "Select Date", slot: "Select Time",
      note: "Anything we should know? (optional)", notePh: "e.g. knee pain, first time in a gym",
      submit: "Book Trial on WhatsApp",
      or: "or",
      call: "Call the gym",
      success: "Opening WhatsApp… your free trial request is ready to send!",
      morning: "Morning", evening: "Evening",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Timings", tagline: "Train honest. Get strong. Stay humble." },
    misc: { viewAll: "View All Programs", bookWith: "Train with", experience: "Experience", readMore: "Know More", getDirections: "Get Directions", emergency: "Membership Helpline (6 AM – 10 PM)", perMonth: "Most Popular" },
    about: {
      title: "About IronCore",
      sub: "Indore's honest gym since 2016.",
      story1: "IronCore was started in 2016 by Rohit Sengar, a state-level powerlifter who was tired of seeing Indore gyms sell memberships and then disappear — no coaching, no form correction, no diet guidance, just treadmills and mirrors.",
      story2: "What began as a 1,200 sq ft floor with second-hand plates is today a 5,000 sq ft studio at Palasia Square with 8 certified trainers, a dedicated yoga room, a ladies-only batch, steam bath and an in-house nutritionist — and 400+ documented transformations.",
      story3: "Our promise has never changed: every member gets coached, every plan includes diet, every fee is on the board. If you show up, we make sure it works.",
      missionTitle: "Our Mission",
      mission: "Make real, coached fitness affordable for every family in Indore — not just gym access, but results.",
      values: [
        { title: "Coaching Over Machines", desc: "Equipment doesn't transform people. Coaches do. Ours stay on the floor." },
        { title: "Everybody's Gym", desc: "18 or 60, beginner or athlete, men and women — zero intimidation culture." },
        { title: "Transparent Pricing", desc: "Rate board at reception. No hidden registration or 'annual maintenance' charges." },
        { title: "Results, Documented", desc: "Body composition tracked monthly. Your progress in numbers, not promises." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", programs: "प्रोग्राम्स", trainers: "ट्रेनर्स", results: "ट्रांसफॉर्मेशन", contact: "जॉइन व संपर्क", book: "फ्री ट्रायल बुक करें" },
    hero: {
      badge: "2016 से पलासिया का सबसे भरोसेमंद जिम",
      title: "हर दिन और मज़बूत,",
      titleAccent: "शुरुआत आज से",
      sub: "प्रमाणित ट्रेनर, लेडीज़-ओनली बैच, फ्री डाइट चार्ट और 400+ असली ट्रांसफॉर्मेशन — पलासिया चौराहा, इंदौर। WhatsApp पर फ्री ट्रायल वर्कआउट बुक करें।",
      cta1: "फ्री ट्रायल वर्कआउट बुक करें",
      cta2: "अभी कॉल करें",
      open: "अभी खुला है · सुबह 5:30–11, शाम 4–रात 10",
    },
    sections: {
      programsTitle: "हमारे प्रोग्राम्स",
      programsSub: "स्ट्रेंथ से ज़ुम्बा तक — एक मेंबरशिप, फिट होने के सारे तरीके।",
      plansTitle: "मेंबरशिप प्लान",
      plansSub: "ईमानदार दाम। कोई छिपा रजिस्ट्रेशन चार्ज नहीं। कभी नहीं।",
      trainersTitle: "अपने कोच से मिलिए",
      trainersSub: "प्रमाणित ट्रेनर जो फ्लोर पर रहते हैं, डेस्क के पीछे नहीं।",
      whyTitle: "मेंबर्स आयरनकोर क्यों चुनते हैं",
      whySub: "1,200+ मेंबर्स, एक वजह — हम सच में कोच करते हैं।",
      resultsTitle: "असली ट्रांसफॉर्मेशन",
      resultsSub: "असली मेंबर्स, असली आँकड़े — इसी फ्लोर से।",
      reviewsTitle: "मेंबर्स क्या कहते हैं",
      reviewsSub: "इंदौर के मेंबर्स की सच्ची राय।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "पहली विज़िट से पहले के हर सवाल का जवाब।",
      galleryTitle: "आयरनकोर के अंदर",
      gallerySub: "5,000 वर्ग फुट — आयरन, कार्डियो, योग स्टूडियो और स्टीम बाथ।",
      visitTitle: "हम तक पहुँचें",
      visitSub: "पलासिया चौराहा — सेंट्रल इंदौर में कहीं से भी 5 मिनट।",
      ctaTitle: "सबसे मुश्किल है अंदर आना। बस एक बार।",
      ctaSub: "फ्री ट्रायल वर्कआउट बुक करें — न पेमेंट, न दबाव। बस एक बार ट्रेन करके देखिए।",
    },
    booking: {
      title: "फ्री ट्रायल वर्कआउट बुक करें",
      sub: "यह फॉर्म भरें — आपकी रिक्वेस्ट सीधे हमारे WhatsApp पर पहुँचेगी। 15 मिनट में ट्रायल स्लॉट कन्फर्म।",
      name: "आपका नाम", namePh: "जैसे: विशाल राठौर",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 92024 20455",
      goal: "आपका फिटनेस लक्ष्य", anyGoal: "पक्का नहीं — तय करने में मदद करें",
      date: "तारीख चुनें", slot: "समय चुनें",
      note: "कुछ और बताना चाहें? (वैकल्पिक)", notePh: "जैसे: घुटने में दर्द, पहली बार जिम",
      submit: "WhatsApp पर ट्रायल बुक करें",
      or: "या",
      call: "जिम को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी फ्री ट्रायल रिक्वेस्ट भेजने के लिए तैयार है!",
      morning: "सुबह", evening: "शाम",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "समय", tagline: "ईमानदारी से ट्रेन करो। मज़बूत बनो।" },
    misc: { viewAll: "सभी प्रोग्राम देखें", bookWith: "ट्रेन करें", experience: "अनुभव", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "मेंबरशिप हेल्पलाइन (सुबह 6 – रात 10)", perMonth: "सबसे लोकप्रिय" },
    about: {
      title: "आयरनकोर के बारे में",
      sub: "2016 से इंदौर का ईमानदार जिम।",
      story1: "आयरनकोर की शुरुआत 2016 में राज्य-स्तरीय पावरलिफ्टर रोहित सेंगर ने की, जो इंदौर के जिमों को मेंबरशिप बेचकर गायब होते देख थक चुके थे — न कोचिंग, न फॉर्म करेक्शन, न डाइट गाइडेंस, बस ट्रेडमिल और आईने।",
      story2: "1,200 वर्ग फुट और सेकंड-हैंड प्लेट्स से शुरू होकर आज यह पलासिया चौराहे पर 5,000 वर्ग फुट का स्टूडियो है — 8 प्रमाणित ट्रेनर, अलग योग रूम, लेडीज़-ओनली बैच, स्टीम बाथ और इन-हाउस न्यूट्रिशनिस्ट — और 400+ दर्ज ट्रांसफॉर्मेशन।",
      story3: "हमारा वादा कभी नहीं बदला: हर मेंबर को कोचिंग, हर प्लान में डाइट, हर फीस बोर्ड पर। आप आइए, कामयाबी हमारी ज़िम्मेदारी।",
      missionTitle: "हमारा मिशन",
      mission: "इंदौर के हर परिवार के लिए असली, कोच्ड फिटनेस किफ़ायती बनाना — सिर्फ जिम एक्सेस नहीं, नतीजे।",
      values: [
        { title: "मशीन नहीं, कोचिंग", desc: "इक्विपमेंट लोगों को नहीं बदलता। कोच बदलते हैं। हमारे कोच फ्लोर पर रहते हैं।" },
        { title: "सबका जिम", desc: "18 या 60, बिगिनर या एथलीट, पुरुष और महिलाएँ — कोई झिझक नहीं।" },
        { title: "पारदर्शी दाम", desc: "रिसेप्शन पर रेट बोर्ड। कोई छिपा रजिस्ट्रेशन या 'मेंटेनेंस' चार्ज नहीं।" },
        { title: "नतीजे, दर्ज", desc: "हर महीने बॉडी कंपोज़िशन ट्रैकिंग। प्रगति वादों में नहीं, आँकड़ों में।" },
      ],
    },
  },
};
