import React from 'react';
import { Pill, Activity, Stethoscope, BriefcaseMedical } from 'lucide-react';

const PlanCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  icon: React.ReactNode; 
  description: string;
  items: string[]; 
}> = ({ title, subtitle, icon, description, items }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-blue-100 text-blue-700 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">{subtitle}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <ul className="space-y-3 mt-auto">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start text-sm text-gray-700">
          <span className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Plans: React.FC = () => {
  return (
    <div className="w-full">
      {/* Blue Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medicare Plans Explained</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Understanding the "Alphabet Soup" of Medicare. Here is a breakdown of the different parts available to Nevada residents.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            <PlanCard 
              title="Medicare Part A" 
              subtitle="Hospital Insurance"
              icon={<Activity size={32} />}
              description="Part A covers inpatient hospital stays, care in a skilled nursing facility, hospice care, and some home health care."
              items={[
                "Inpatient care in a hospital",
                "Skilled nursing facility care",
                "Hospice care",
                "Home health care"
              ]}
            />

            <PlanCard 
              title="Medicare Part B" 
              subtitle="Medical Insurance"
              icon={<Stethoscope size={32} />}
              description="Part B covers certain doctors' services, outpatient care, medical supplies, and preventive services."
              items={[
                "Services from doctors and other health care providers",
                "Outpatient care",
                "Home health care",
                "Durable medical equipment (like wheelchairs, walkers, etc.)",
                "Many preventive services (like screenings, shots, or vaccines)"
              ]}
            />

            <PlanCard 
              title="Medicare Part C" 
              subtitle="Medicare Advantage"
              icon={<BriefcaseMedical size={32} />}
              description="Medicare Advantage Plans are an all-in-one alternative to Original Medicare. These bundled plans include Part A, Part B, and usually Part D."
              items={[
                "Includes all benefits and services covered under Part A and Part B",
                "Usually includes Medicare prescription drug coverage (Part D)",
                "Run by Medicare-approved private insurance companies",
                "May include extra benefits like vision, hearing, and dental"
              ]}
            />

            <PlanCard 
              title="Medicare Part D" 
              subtitle="Drug Coverage"
              icon={<Pill size={32} />}
              description="Part D adds prescription drug coverage to Original Medicare, some Medicare Cost Plans, some Medicare Private-Fee-for-Service Plans, and Medicare Medical Savings Account Plans."
              items={[
                "Helps cover the cost of prescription drugs",
                "Run by Medicare-approved private insurance companies",
                "Plans can vary in cost and specific drugs covered"
              ]}
            />

          </div>
          
          <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl">
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Confused about which plan is right for you?</h3>
             <p className="text-gray-600 mb-6">
               Every individual's health needs are unique. Let's sit down and compare these plans based on your specific doctors and medications.
             </p>
             <a href="#/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
               Schedule a Consultation
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;