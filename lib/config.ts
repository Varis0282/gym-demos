/**
 * ─────────────────────────────────────────────────────────────
 *  REBRAND SPOT — change everything here to rebrand the demo
 *  for a real prospect in ~10 minutes before a meeting.
 * ─────────────────────────────────────────────────────────────
 */
export const gym = {
  name: "IronCore Fitness Studio",
  shortName: "IronCore",
  nameHi: "आयरनकोर फिटनेस स्टूडियो",
  city: "Indore",
  address: "3rd Floor, Trade Centre, Palasia Square, Indore, Madhya Pradesh 452001",
  addressHi: "तृतीय तल, ट्रेड सेंटर, पलासिया चौराहा, इंदौर, मध्य प्रदेश 452001",
  phone: "+91 92024 20455",
  phoneRaw: "+919202420455",
  whatsapp: "919202420455",
  email: "join@ironcorefitness.in",
  established: 2016,
  mapEmbed: "https://www.google.com/maps?q=Palasia,+Indore,+Madhya+Pradesh&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Palasia+Indore",
  timings: {
    en: [
      { days: "Monday – Saturday", hours: "5:30 AM – 11:00 AM, 4:00 PM – 10:00 PM" },
      { days: "Ladies-only batch", hours: "Mon – Sat · 10:00 AM – 12:00 PM" },
      { days: "Sunday", hours: "7:00 AM – 12:00 PM (Open workout)" },
    ],
    hi: [
      { days: "सोमवार – शनिवार", hours: "सुबह 5:30 – 11:00, शाम 4:00 – रात 10:00" },
      { days: "लेडीज़-ओनली बैच", hours: "सोम – शनि · सुबह 10:00 – दोपहर 12:00" },
      { days: "रविवार", hours: "सुबह 7:00 – दोपहर 12:00 (ओपन वर्कआउट)" },
    ],
  },
};

// Back-compat aliases so shared components keep working
export const inst = gym;
export const clinic = gym;

export const img = {
  // "faculty"/"toppers" aliases keep ported theme code working
  trainers: [
    "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80",
    "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&q=80",
    "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80",
  ],
  transformations: [
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
  ],
  // Aliases so ported theme code (faculty/toppers naming) keeps working:
  get faculty() { return this.trainers; },
  get toppers() { return this.transformations; },
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
  heroAlt: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=900&q=80",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=80",
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=900&q=80",
  ],
  about: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80",
  aboutAlt: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80",
  action: [
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80",
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=900&q=80",
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=900&q=80",
  ],
};
