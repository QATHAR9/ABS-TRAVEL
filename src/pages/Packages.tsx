import React from 'react';
import { Check, Star, Users, Calendar } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Standard Package',
      price: 'KES 180,000',
      duration: '10 Days',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Return flights from Nairobi',
        'Umrah visa processing',
        '3-star hotel accommodation',
        'Breakfast included',
        'Airport transfers',
        'Makkah to Madinah transport',
        'Basic support'
      ],
      popular: false
    },
    {
      name: 'Premium Package',
      price: 'KES 280,000',
      duration: '14 Days',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Return flights from Nairobi',
        'Fast-track visa processing',
        '4-star hotel near Haram',
        'Half-board meals',
        'VIP airport transfers',
        'AC transport throughout',
        'Ziyarat tours included',
        '24/7 dedicated support'
      ],
      popular: true
    },
    {
      name: 'Group Package',
      price: 'KES 150,000',
      duration: '12 Days',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/8989738/pexels-photo-8989738.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Return flights from Nairobi',
        'Group visa processing',
        '3-star shared accommodation',
        'Breakfast included',
        'Shared transportation',
        'Group coordinator',
        'Minimum 15 people'
      ],
      popular: false
    }
  ];

  const handleBookNow = (packageName: string) => {
    const message = `Hello! I'm interested in the ${packageName} for Umrah. Could you please provide more details?`;
    const phoneNumber = '254728305788';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Umrah Packages</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our carefully crafted packages designed to suit different budgets and preferences
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${pkg.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${pkg.image})` }}>
                  <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleBookNow(pkg.name)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Packages?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our team has years of experience organizing successful Umrah journeys</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All-Inclusive</h3>
              <p className="text-gray-600">Everything you need for your Umrah journey in one comprehensive package</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Service</h3>
              <p className="text-gray-600">Rated highly by our customers for quality and professional service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;