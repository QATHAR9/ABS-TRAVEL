import React from 'react';
import { Plane, FileText, Building, Users, Utensils, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Flight Arrangements',
      description: 'We handle all your flight bookings with trusted airlines offering direct and connecting flights to Jeddah.',
      details: ['Multiple airline options', 'Flexible departure dates', 'Competitive pricing', 'Group booking discounts'],
      price: 'Starting from KES 80,000'
    },
    {
      icon: FileText,
      title: 'Visa Processing',
      description: 'Complete visa assistance including application, documentation, and follow-up until approval.',
      details: ['Umrah visa applications', 'Document preparation', 'Embassy liaison', 'Status tracking'],
      price: 'KES 15,000 - 25,000'
    },
    {
      icon: Building,
      title: 'Hotel Accommodation',
      description: 'Comfortable hotels in Makkah and Madinah, strategically located near the Holy Mosques.',
      details: ['3, 4, and 5-star options', 'Walking distance to Haram', 'Clean and comfortable', 'Halal certified'],
      price: 'KES 8,000 - 20,000 per night'
    },
    {
      icon: Users,
      title: 'Group Coordination',
      description: 'Professional group management and coordination throughout your journey.',
      details: ['Experienced group leaders', 'Spiritual guidance', 'Group activities', 'Coordination support'],
      price: 'Included in packages'
    },
    {
      icon: Utensils,
      title: 'Meal Arrangements',
      description: 'Halal meals and dining arrangements at quality restaurants and hotels.',
      details: ['Breakfast included', 'Halal certified restaurants', 'Local cuisine options', 'Special dietary needs'],
      price: 'KES 2,000 - 4,000 per day'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage for peace of mind during your journey.',
      details: ['Medical coverage', 'Trip cancellation', 'Baggage protection', '24/7 emergency assistance'],
      price: 'KES 5,000 - 10,000'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive Umrah services to ensure your spiritual journey is comfortable and worry-free
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
                        <ul className="space-y-1">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="text-blue-600 font-semibold">{service.price}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Extra services to enhance your Umrah experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ziyarat Tours</h3>
              <p className="text-gray-600 mb-4">
                Visit historical Islamic sites in Makkah and Madinah with our guided tours.
              </p>
              <p className="text-blue-600 font-semibold">KES 5,000 - 8,000</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shopping Assistance</h3>
              <p className="text-gray-600 mb-4">
                Help with shopping for dates, Islamic books, prayer rugs, and other religious items.
              </p>
              <p className="text-blue-600 font-semibold">Complimentary</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Currency Exchange</h3>
              <p className="text-gray-600 mb-4">
                Assistance with currency exchange and guidance on managing money during travel.
              </p>
              <p className="text-blue-600 font-semibold">Advisory Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Umrah?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your requirements and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0728305788"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: 0728 305 788
            </a>
            <a
              href="https://wa.me/254728305788?text=Hello! I would like to know more about your Umrah services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;