import {
  FaStethoscope,
  FaBaby,
  FaSyringe,
  FaHeartbeat,
  FaUserMd,
  FaNotesMedical,
} from 'react-icons/fa';

export const clinic = {
  name: 'HealthyCare Clinic',
  doctor: 'Dr. Raj Sharma',
  qualification: 'MBBS, MD (General Medicine)',
  location: 'Bhopal, Madhya Pradesh',
  address: 'MP Nagar, Zone 2, Bhopal, Madhya Pradesh 462011',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  email: 'info@healthycareclinic.com',
  hours: 'Monday – Saturday · 9 AM – 7 PM',
  hoursShort: 'Mon – Sat · 9 AM – 7 PM',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const services = [
  {
    icon: FaStethoscope,
    title: 'General Checkup',
    description:
      'Comprehensive health assessments with detailed diagnostics to keep you in peak condition year-round.',
  },
  {
    icon: FaBaby,
    title: 'Child Care',
    description:
      'Gentle, compassionate pediatric care supporting your child\u2019s healthy growth from infancy onward.',
  },
  {
    icon: FaNotesMedical,
    title: 'Diabetes Treatment',
    description:
      'Personalised diabetes management plans blending modern medicine with sustainable lifestyle guidance.',
  },
  {
    icon: FaHeartbeat,
    title: 'Blood Pressure Care',
    description:
      'Continuous monitoring and tailored treatment to keep your heart and circulation strong and steady.',
  },
  {
    icon: FaSyringe,
    title: 'Vaccination',
    description:
      'Safe, WHO-aligned immunisations for children and adults, delivered in a calm, hygienic setting.',
  },
  {
    icon: FaUserMd,
    title: 'Health Consultation',
    description:
      'Expert one-on-one medical advice to answer your questions and guide confident health decisions.',
  },
];

export const stats = [
  { value: 5000, suffix: '+', label: 'Happy Patients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Positive Reviews' },
  { value: 24, suffix: '/7', label: 'Support' },
];

export const whyChooseUs = [
  {
    icon: FaUserMd,
    title: 'Experienced Doctor',
    description:
      '15+ years of clinical expertise you can trust with your family\u2019s long-term wellbeing.',
  },
  {
    icon: FaHeartbeat,
    title: 'Advanced Equipment',
    description:
      'Modern diagnostic tools for accurate, early detection and effective, evidence-based treatment.',
  },
  {
    icon: FaNotesMedical,
    title: 'Affordable Treatment',
    description:
      'Transparent, fair pricing with no hidden costs — quality healthcare that respects your budget.',
  },
  {
    icon: FaBaby,
    title: 'Friendly Staff',
    description:
      'A warm, welcoming team that makes every visit calm, comfortable and genuinely caring.',
  },
];

export const testimonials = [
  {
    name: 'Anita Verma',
    role: 'Parent · Bhopal',
    image:
      'https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    review:
      'Dr. Sharma treated my daughter with such patience and kindness. The clinic is spotless and the staff made us feel completely at ease. Best experience we\u2019ve had.',
  },
  {
    name: 'Rohit Khanna',
    role: 'Diabetes Patient',
    image:
      'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    review:
      'My diabetes is finally under control after years of struggle. The personalised plan and regular follow-ups have genuinely changed my daily life.',
  },
  {
    name: 'Meena Iyer',
    role: 'Senior Care',
    image:
      'https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    review:
      'At 68, I need a doctor who listens. Dr. Raj explains everything clearly, never rushes, and always puts my comfort first. I trust him completely.',
  },
];

export const faqs = [
  {
    question: 'Do I need an appointment, or can I walk in?',
    answer:
      'We recommend booking an appointment to guarantee your slot and minimise waiting, but same-day walk-ins are welcome during working hours whenever the doctor is available.',
  },
  {
    question: 'What should I bring to my first visit?',
    answer:
      'Please bring a valid photo ID, any previous medical reports or prescriptions, and a list of current medications. For child visits, carry the child\u2019s vaccination record.',
  },
  {
    question: 'Does the clinic accept health insurance?',
    answer:
      'Yes. We accept most major health insurance providers. Please share your insurance details at reception and our team will assist with the paperwork and cashless processing where available.',
  },
  {
    question: 'Are home visits available for elderly or bedridden patients?',
    answer:
      'Limited home-visit slots are available for elderly or immobile patients within Bhopal. Please call the clinic directly to check availability and schedule a visit.',
  },
  {
    question: 'How can I get my test reports?',
    answer:
      'Most diagnostic reports are shared digitally within 24–48 hours via email and a secure patient link. Physical copies can be collected from reception on request.',
  },
];

export const doctorImage =
  'https://images.pexels.com/photos/12660379/pexels-photo-12660379.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';
