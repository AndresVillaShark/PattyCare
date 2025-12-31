import React from 'react';
import { PlayCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* About Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Hello, I'm <span className="text-blue-700">Patty Alvarez</span>
              </h1>
              <h2 className="text-xl text-gray-600 font-medium mb-6">Licensed Medicare Agent in Nevada | LIC #4136902</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For years, I have dedicated my career to helping seniors in Las Vegas and the surrounding Nevada communities navigate the complex world of Medicare.
                </p>
                <p>
                  I understand that healthcare decisions are personal and important. My mission is to provide you with clear, unbiased information so you can make confident decisions about your healthcare coverage. Whether you are turning 65 or looking to review your current plan, I am here to be your trusted resource.
                </p>
                <p className="italic text-blue-800 font-medium border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                  "Estoy aquí para ayudarle a aprovechar al máximo su cobertura de Medicare. Contacteme para obtener más información y empezar a disfrutar la tranquilidad que merece. No hay obligación ni cargos al asistirle."
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="https://picsum.photos/800/800" 
                alt="Patty Alvarez Portrait" 
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Helpful Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Video 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
               <div className="aspect-w-16 aspect-h-9 bg-slate-800 relative group cursor-pointer h-64 flex items-center justify-center">
                 <img src="https://picsum.photos/600/338?random=1" alt="Video 1" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle size={64} className="text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                 </div>
               </div>
               <div className="p-6">
                 <h3 className="font-bold text-xl mb-2 text-gray-900">How to Choose a Plan</h3>
                 <p className="text-gray-600">A guide on what factors to consider when selecting your Medicare coverage for the upcoming year.</p>
               </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
               <div className="aspect-w-16 aspect-h-9 bg-slate-800 relative group cursor-pointer h-64 flex items-center justify-center">
                 <img src="https://picsum.photos/600/338?random=2" alt="Video 2" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle size={64} className="text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                 </div>
               </div>
               <div className="p-6">
                 <h3 className="font-bold text-xl mb-2 text-gray-900">Medicare vs Medicare Advantage</h3>
                 <p className="text-gray-600">Understanding the key differences between Original Medicare and Advantage plans in Nevada.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;