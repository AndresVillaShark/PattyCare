import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, UserCheck, ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90 z-0"></div>
        <div className="absolute inset-0 opacity-20 z-0 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Navigating Medicare <br/>
              <span className="text-blue-300">Made Simple.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-lg">
              Expert guidance for your health coverage needs in Las Vegas. No cost, no obligation, just peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg text-center">
                Contact Me Today
              </Link>
              <Link to="/plans" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center">
                View Plans
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Placeholder for Hero Image - simulating a cutout professional photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/30 rounded-full blur-xl"></div>
              <img
                src="/patty.png"
                alt="Patty Alvarez Medicare Agent"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro/Summary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Patty Alvarez?</h2>
            <p className="text-lg text-gray-600">
              Choosing the right Medicare plan can be confusing. I simplify the process by comparing plans to find the coverage that fits your specific health needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of Medicare Parts A, B, C, and D specific to Nevada residents.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                I take the time to understand your doctors, medications, and lifestyle to find the right fit.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Support</h3>
              <p className="text-gray-600">
                Based right here in Las Vegas. I'm your neighbor and your advocate for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Understanding Your Options</h2>
          <div className="aspect-w-16 aspect-h-9 w-full bg-slate-900 rounded-2xl shadow-2xl overflow-hidden relative group cursor-pointer flex items-center justify-center">
            {/* Placeholder for Video - In real app, this would be an iframe */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
            <img src="https://picsum.photos/1200/675" alt="Video Thumbnail" className="w-full h-full object-cover" />
            <div className="absolute z-20 flex flex-col items-center">
               <PlayCircle size={80} className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
               <span className="text-white font-medium mt-4 text-lg">Watch: Medicare Basics Explained</span>
            </div>
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Medicare doesn't have to be complicated. Watch this short video to understand the fundamental building blocks of your coverage.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Does it cost money to work with you?" 
              answer="No. My services are completely free to you. I am compensated by the insurance carriers when I help you enroll in a plan. Your premium is the same whether you enroll yourself or use my help." 
            />
            <FAQItem 
              question="When can I enroll in Medicare?" 
              answer="Most people can enroll during their Initial Enrollment Period (IEP), which starts 3 months before you turn 65 and ends 3 months after. There is also the Annual Enrollment Period (AEP) from October 15 to December 7 each year." 
            />
            <FAQItem 
              question="Do you offer Spanish speaking services?" 
              answer="Sí, hablo español y puedo explicarle todas sus opciones de Medicare en su idioma preferido." 
            />
            <FAQItem 
              question="What if I already have a plan?" 
              answer="We can review your current plan to ensure it still meets your needs. Plans change annually, and so might your health needs. A free review is always recommended during the Annual Enrollment Period." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;