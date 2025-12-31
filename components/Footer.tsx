import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span>2250 E Tropicana Ave Ste 4<br/>Las Vegas, NV 89119</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <a href="tel:702-756-7043" className="hover:text-blue-400 transition-colors">(702) 756-7043</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <a href="mailto:medicarebypatricaalv@gmail.com" className="hover:text-blue-400 transition-colors break-all">medicarebypatricaalv@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Nevada Service Area</h3>
            <p className="mb-4">
              Providing expert Medicare guidance to seniors in Las Vegas, Henderson, North Las Vegas, and surrounding areas.
            </p>
            <p className="text-sm italic text-gray-400">
              LIC #: 4136902
            </p>
          </div>

          {/* Spanish Message */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hablo Español</h3>
            <p className="italic text-gray-300">
              "Estoy aquí para ayudarle a aprovechar al máximo su cobertura de Medicare. Contacteme para obtener más información y empezar a disfrutar la tranquilidad que merece. No hay obligación ni cargos al asistirle."
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-sm text-gray-400">
          <div className="mb-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <p className="font-semibold text-white mb-2">IMPORTANT MEDICARE DISCLAIMER:</p>
            <p>
              We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Medicare by Patty Alvarez. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Not affiliated with the U.S. government or the federal Medicare program.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;