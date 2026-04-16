import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    service: 'Recruitment & Talent Acquisition',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map id to the keys expected by the API
    const keyMap = {
      firstName: 'first_name',
      lastName: 'last_name',
      email: 'email',
      company: 'company',
      service: 'service',
      message: 'message'
    };
    
    setFormData(prev => ({
      ...prev,
      [keyMap[id] || id]: value
    }));
    
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://astraonovahrbackend.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit. Please try again later.');
      }

      setIsSubmitted(true);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        service: 'Recruitment & Talent Acquisition',
        message: ''
      });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to transform your HR processes? Get in touch with our experts for a complimentary consultation.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <FadeIn direction="right">
              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-primary-600/30 blur-2xl"></div>
                 <h2 className="text-3xl font-bold mb-8 relative z-10">Get in Touch</h2>
                 
                 <div className="space-y-8 relative z-10">
                   <div className="flex items-start">
                     <div className="bg-slate-800 p-3 rounded-lg mr-4 text-primary-400">
                       <MapPin size={24} />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">Corporate Office</h3>
                       <p className="text-slate-400 leading-relaxed">Level 4, Corporate Park,<br />Mumbai, Maharashtra 400051<br />India</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start">
                     <div className="bg-slate-800 p-3 rounded-lg mr-4 text-primary-400">
                       <Phone size={24} />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">Phone</h3>
                       <p className="text-slate-400">+91 22 1234 5678</p>
                       <p className="text-slate-400">+91 98765 43210</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start">
                     <div className="bg-slate-800 p-3 rounded-lg mr-4 text-primary-400">
                       <Mail size={24} />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">Email</h3>
                       <p className="text-slate-400">contact@astranovahr.com</p>
                     </div>
                   </div>
                 </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 min-h-[500px] flex flex-col justify-center">
                {isSubmitted ? (
                   <div className="text-center py-12">
                     <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                       <CheckCircle className="text-green-600" size={40} />
                     </div>
                     <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                     <p className="text-xl text-slate-600 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                     <button 
                       onClick={() => setIsSubmitted(false)}
                       className="text-primary-600 font-medium hover:text-primary-700 underline"
                     >
                       Send another message
                     </button>
                   </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">Book Your Consultation</h2>
                      <p className="text-slate-500">All fields are mandatory.</p>
                    </div>
                    
                    {error && (
                      <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required 
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                          <input 
                            type="text" 
                            id="company" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested Service</label>
                        <select 
                          id="service" 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
                        >
                          <option value="Recruitment & Talent Acquisition">Recruitment & Talent Acquisition</option>
                          <option value="Payroll Outsourcing">Payroll Outsourcing</option>
                          <option value="Workforce Solutions">Workforce Solutions</option>
                          <option value="Legal & Compliance">Legal & Compliance</option>
                          <option value="Other / Not Sure">Other / Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                          placeholder="Tell us about your HR requirements..."
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className={`w-full bg-primary-600 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg shadow-primary-600/20 flex items-center justify-center group ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'}`}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 size={18} className="mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
