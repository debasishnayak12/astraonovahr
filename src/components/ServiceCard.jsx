import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, linkTo = "/services" }) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-100 transition-all duration-300 flex flex-col h-full">
      <div className="bg-primary-50 text-primary-600 rounded-lg w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 flex-grow leading-relaxed mb-6">
        {description}
      </p>
      <Link to={linkTo} className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
        Explore Service
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
