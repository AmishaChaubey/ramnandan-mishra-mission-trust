// ─── TRUST CONSTANTS — shared across all sections ───────────
export const TRUST_NAME = "Ramnandan Mishra Mission Trust";
export const PAN        = "AAATR6923P";
export const DARPAN     = "BR/2025/0599879";
export const ACCOUNT    = "485010100016010";
export const IFSC       = "BKID0004850";
export const BRANCH     = "Darbhanga";
export const BANK       = "Bank of India";
export const MOBILE     = "7250004455";
export const EMAIL      = "ramnandanmishramissiontrust@gmail.com";
export const ADDRESS    = '"PADMAYAN", Bangali Tola VIP Road, Laheriasarai, Darbhanga, Bihar — 846001';

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
    
  { label: "Contact", id: "contact" },
];

export const DONATE_AMOUNTS = [500, 1000, 2100, 5000, 11000, 21000];

export const PROGRAMS = [
  { title: "Primary Education",    desc: "Building literacy and numeracy foundations for underprivileged children across rural Bihar.",           color: "from-amber-500 to-orange-600",  icon: "BookOpen"  },
  { title: "Skill Development",    desc: "Vocational training and workshops to prepare youth for employment and self-reliance.",                   color: "from-blue-500 to-indigo-600",   icon: "Lightbulb" },
  { title: "Scholarship Support",  desc: "Financial aid for meritorious but economically weak students to continue higher education.",             color: "from-emerald-500 to-teal-600",  icon: "Globe"     },
  { title: "Community Welfare",    desc: "Health camps, nutrition drives and welfare programs for underserved families in Bihar.",                 color: "from-rose-500 to-pink-600",     icon: "Heart"     },
  { title: "Women Empowerment",    desc: "Self-help groups, awareness drives and livelihood programs focused on upliftment of women.",             color: "from-violet-500 to-purple-600", icon: "Target"    },
  { title: "Cultural Preservation",desc: "Honouring freedom fighters and promoting values of patriotism, ethics and national service.",           color: "from-cyan-500 to-sky-600",      icon: "Award"     },
];

export const ACHIEVEMENTS = [
  "Registered under the Societies Registration Act, Bihar",
  `PAN Allotted: ${PAN} — officially recognised by the Income Tax Department`,
  `DARPAN ID: ${DARPAN} — listed on Niti Aayog's NGO portal`,
  "Established in memory of freedom fighter Ramnandan Mishra (1905–1989)",
  "Active community outreach programs across Darbhanga, Bihar",
  `Banking with ${BANK}, ${BRANCH} for complete financial transparency`,
];

export const TESTIMONIALS = [
  {
    name: "Rahul Kumar", role: "Beneficiary, Darbhanga",
    image: "",
    text: "This trust helped me get books and support to complete my Class 12 exams. Without them I would have dropped out. I am forever grateful.", stars: 5,
  },
  {
    name: "Sunita Devi", role: "Women SHG Member",
    image: "",
    text: "The women's empowerment programme gave me confidence and a source of income. The team treats every person with dignity and genuine care.", stars: 5,
  },
  {
    name: "Dr. Anil Jha", role: "Educator & Partner",
    image: "",
    text: "I have worked with many NGOs but the commitment of the RMMT team is unmatched. They work with full transparency and grassroots dedication.", stars: 5,
  },
];