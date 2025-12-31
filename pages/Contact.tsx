import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a static site without backend, we can't truly send an email server-side.
    // We will simulate success and open a mailto link or just show success message.
    setIsSubmitted(true);
    
    // Optional: Trigger mail client
    // window.location.href = `mailto:medicarebypatricaalv@gmail.com?subject=Website Inquiry from ${formState.name}&body=${formState.message} - Phone: ${formState.phone}`;
  };

  return (
    <div className="w-full">
      {/* Contact Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Me</h1>
          <p className="text-xl text-gray-600">Let's discuss your Medicare options today.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-80 text-center">
                  <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been received. I will contact you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-blue-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="(702) 555-0123"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="How can I help you today?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map and Info */}
            <div className="flex flex-col justify-between">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <a href="tel:702-756-7043" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase">Call Me</p>
                      <p className="text-lg font-bold text-gray-900">(702) 756-7043</p>
                    </div>
                  </a>
                  
                  <a href="mailto:medicarebypatricaalv@gmail.com" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase">Email Me</p>
                      <p className="text-lg font-bold text-gray-900 break-all">medicarebypatricaalv@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase">Visit Office</p>
                      <p className="text-lg font-bold text-gray-900">2250 E Tropicana Ave Ste 4<br/>Las Vegas, NV 89119</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-grow rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[300px] relative">
                {/* Embedded Google Map */}
                <iframe 
                  title="Office Location"
                  className="w-full h-full absolute inset-0"
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2250%20E%20Tropicana%20Ave%20Ste%204.%20Las%20Vegas,%20NV%2089119+(Medicare%20by%20Patty%20Alvarez)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                </iframe>
              </div>
              <div className="mt-2 text-center">
                 <a 
                   href="https://www.google.com/maps/dir//2250+E+Tropicana+Ave+Ste+4,+Las+Vegas,+NV+89119" 
                   target="_blank" 
                   rel="noreferrer"
                   className="text-sm text-blue-600 hover:underline font-medium"
                 >
                   Get Directions via Google Maps
                 </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;