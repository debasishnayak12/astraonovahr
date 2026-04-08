import FadeIn from '../components/FadeIn';
import { ShieldCheck, Star, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About AstranovaHR</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a premier HR consulting and outsourcing firm dedicated to empowering Indian businesses with scalable, compliant, and efficient human resource solutions.
            </p>
          </div>
        </FadeIn>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <FadeIn direction="right">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  To transform the HR landscape in India by providing end-to-end, tech-enabled, and compliance-first human resource strategies that allow businesses to focus strictly on their core growth.
                </p>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To be the most trusted strategic HR partner for enterprises across India, known for our integrity, operational excellence, and commitment to building world-class workforces.
                </p>
              </FadeIn>
            </div>
            <div className="bg-slate-50 p-10 lg:p-16 flex items-center justify-center relative overflow-hidden border-l border-slate-100">
               <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-slate-100"></div>
               <div className="grid grid-cols-2 gap-6 w-full max-w-md relative z-10">
                 
                 <div className="bg-white rounded-xl shadow-sm p-6 transform hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                     <ShieldCheck size={24} />
                   </div>
                   <h3 className="font-semibold text-slate-900 mb-2">Integrity</h3>
                   <p className="text-sm text-slate-500">Uncompromising ethical standards in all operations.</p>
                 </div>
                 
                 <div className="bg-white rounded-xl shadow-sm p-6 transform translate-y-8 hover:translate-y-6 transition-transform duration-300 border border-slate-100">
                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                     <Star size={24} />
                   </div>
                   <h3 className="font-semibold text-slate-900 mb-2">Excellence</h3>
                   <p className="text-sm text-slate-500">Delivering premium strategic outcomes.</p>
                 </div>
                 
                 <div className="bg-white rounded-xl shadow-sm p-6 transform -translate-y-4 hover:-translate-y-6 transition-transform duration-300 border border-slate-100">
                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                     <Lightbulb size={24} />
                   </div>
                   <h3 className="font-semibold text-slate-900 mb-2">Innovation</h3>
                   <p className="text-sm text-slate-500">Modern tech-enabled HR solutions.</p>
                 </div>
                 
                 <div className="bg-white rounded-xl shadow-sm p-6 transform hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                   <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                     <Users size={24} />
                   </div>
                   <h3 className="font-semibold text-slate-900 mb-2">Partnership</h3>
                   <p className="text-sm text-slate-500">Acting as a true extension of your team.</p>
                 </div>

               </div>
            </div>
          </div>
        </div>

        <FadeIn delay={0.2}>
           <div className="max-w-4xl mx-auto text-center bg-slate-900 rounded-3xl p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-600/20 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-primary-600/20 blur-3xl"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold mb-8">Helping Indian Businesses Thrive</h2>
               <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                 Navigating the complexities of workforce management and statutory compliance in India requires deep expertise. At AstranovaHR, we act as an extension of your team, providing the strategic guidance and administrative muscle needed to build a highly productive, fully compliant workforce. We don't just manage HR; we optimize it.
               </p>
             </div>
           </div>
        </FadeIn>
      </div>
    </div>
  );
}
