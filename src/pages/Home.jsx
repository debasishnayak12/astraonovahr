import { Link } from 'react-router-dom';
import { Briefcase, Calculator, Users, ShieldCheck, CheckCircle2, Star, ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ServiceCard from '../components/ServiceCard';
import { useState } from 'react';

const services = [
  {
    icon: Briefcase,
    title: "Recruitment",
    description: "End-to-end talent acquisition, from sourcing and screening to onboarding, ensuring you hire the best fit.",
  },
  {
    icon: Calculator,
    title: "Payroll Outsourcing",
    description: "Accurate and timely salary processing, tax deductions, and compliance management on your behalf.",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description: "Flexible staff augmentation and contract staffing to meet your dynamic business requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Legal & Compliance",
    description: "Expert guidance on labor laws, Factory Act, and statutory compliance to safeguard your business.",
  }
];

const faqs = [
  {
    question: "Why should we outsource our HR?",
    answer: "Outsourcing HR reduces operational costs, mitigates compliance risks, and allows your internal team to focus on core business strategies rather than administrative tasks."
  },
  {
    question: "Do you handle compliance for multiple states in India?",
    answer: "Yes, our compliance experts are well-versed in both central and state-specific labor laws across India, ensuring 100% statutory compliance."
  },
  {
    question: "How fast can you fulfill our hiring needs?",
    answer: "Depending on the role's complexity, we typically provide shortlisted, assessed candidates within 48-72 hours of receiving the mandate."
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200 py-4 last:border-b-0">
      <button 
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        <ChevronDown 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-28 pb-32 lg:pt-40 lg:pb-48 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
              <FadeIn>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 border border-primary-200 shadow-sm">
                  <Star className="w-4 h-4 mr-2" fill="currentColor" /> Premium HR Advisory
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                  Empowering Workforce.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                    Driving Growth.
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
                  Premium end-to-end HR solutions built for the modern Indian enterprise. We transform your human resources into a strategic advantage.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary-700 transition-all duration-300 shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-1 text-center flex items-center justify-center">
                    Get a Free Consultation
                  </Link>
                  <Link to="/services" className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 text-center flex items-center justify-center">
                    Explore Services
                  </Link>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} /> Compliance Guaranteed
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} /> Scale Faster
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Image/Visual Content */}
            <div className="lg:col-span-6 relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent mix-blend-overlay z-10"></div>
                  <img src="/hero.png" alt="Strategic HR Illustration" className="w-full object-cover rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  {/* Floating Glassmorphism Element */}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 z-20">
                    <div className="bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-600 text-white p-3 rounded-lg">
                          <Users size={24} />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold text-lg">Scalable Teams</p>
                          <p className="text-slate-600 text-sm">Grow your operations securely.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements behind image */}
                <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-primary-200/50 rounded-full blur-3xl"></div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive HR Services</h3>
              <p className="text-slate-600 text-lg">We provide tailored solutions to streamline your operations, ensure compliance, and scale your workforce.</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Partner With AstranovaHR?</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We bridge the gap between compliance requirements and operational efficiency. Our advisory-led approach ensures your HR practices are scalable and future-proof.
                </p>
                <ul className="space-y-5">
                  {[
                    "Experienced HR Professionals",
                    "Compliance-Focused Approach",
                    "Scalable & Cost-effective Solutions",
                    "Fast Turnaround Hiring Process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-primary-600 mr-3 shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="bg-slate-50 rounded-2xl p-10 lg:p-14 border border-slate-100 text-center relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-primary-600 mb-4">98%</div>
                  <div className="text-2xl font-semibold text-slate-900 mb-3">Client Retention</div>
                  <p className="text-slate-600 text-lg">Our commitment to excellence ensures long-lasting strategic partnerships across India.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-slate-50 relative overflow-hidden">
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Client Success</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Trusted by Industry Leaders</h3>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "AstranovaHR completely transformed our payroll and compliance processes. Their attention to detail and proactive support is unmatched in the industry.",
                author: "Rajesh K.",
                role: "Director of Operations, TechCorp India"
              },
              {
                text: "Scaling our workforce across three states seemed daunting until we partnered with AstranovaHR. They managed the entire factory act compliance seamlessly.",
                author: "Priya S.",
                role: "VP Human Resources, Nexus Manufacturing"
              },
              {
                text: "Their recruitment division understood our niche technical requirements perfectly. The quality of candidates presented saved us countless hours of interviewing.",
                author: "Amit M.",
                role: "Founder, Fintech Solutions"
              }
            ].map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 h-full flex flex-col hover:border-primary-500/50 transition-colors duration-300">
                  <div className="flex text-amber-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" className="mr-1" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-8 italic flex-grow text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    <p className="text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 text-lg">Answers to common queries regarding our HR outsourcing services.</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-2 sm:p-8 border border-slate-100 shadow-sm">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
