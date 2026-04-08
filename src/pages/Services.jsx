import { Briefcase, Calculator, Users, ShieldCheck, Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const detailedServices = [
  {
    icon: Briefcase,
    title: "Recruitment & Talent Acquisition",
    description: "Finding the right talent is critical to your success. Our recruitment experts utilize advanced sourcing strategies and rigorous screening processes to connect you with top-tier candidates efficiently.",
    features: [
      "Executive Search & Leadership Hiring", 
      "Bulk Recruitment Drives", 
      "Candidate Screening & Assessment", 
      "Onboarding & Orientation Support"
    ]
  },
  {
    icon: Calculator,
    title: "Payroll Outsourcing",
    description: "Eliminate the administrative burden of salary processing. We ensure 100% accuracy, timely disbursements, and complete adherence to all tax and statutory deductions.",
    features: [
      "End-to-end Salary Processing", 
      "Tax Deductions (TDS, PF, PT, ESIC)", 
      "Full & Final Settlements", 
      "Employee Query Management"
    ]
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description: "Adapt to changing business needs with our flexible staffing models. Whether you need temporary staff for a project or long-term contract employees, we have you covered.",
    features: [
      "Contract Staffing", 
      "Temporary & Seasonal Staffing", 
      "Temp-to-Perm Placements", 
      "Workforce Management & Analytics"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Legal & Compliance",
    description: "Mitigate risk and avoid penalties with our comprehensive compliance services. We navigate the complex web of Indian labor laws on your behalf.",
    features: [
      "Factory Act Compliance", 
      "Shops & Establishments Act", 
      "Statutory Audits & Inspections", 
      "Labor Law Advisory & Licensing"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive HR solutions designed to streamline operations, ensure rigorous compliance, and foster organizational growth.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12 lg:space-y-24">
          {detailedServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className="w-full lg:w-1/2">
                  <FadeIn direction={isEven ? 'left' : 'right'}>
                    <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8 lg:p-12 h-full">
                       <div className="bg-primary-50 text-primary-600 rounded-lg w-16 h-16 flex items-center justify-center mb-8">
                         <Icon size={32} strokeWidth={1.5} />
                       </div>
                       <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                       <p className="text-slate-600 text-lg leading-relaxed mb-8">
                         {service.description}
                       </p>
                    </div>
                  </FadeIn>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <FadeIn direction={isEven ? 'right' : 'left'} delay={0.2}>
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Offerings</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                          <Check className="text-primary-600 mr-4 shrink-0 mt-0.5" size={20} />
                          <span className="text-slate-700 font-medium text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
