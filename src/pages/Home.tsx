import React from 'react';
import { ArrowRight, Star, Shield, Users, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'Licensed travel agency with years of experience in organizing spiritual journeys'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our experienced team provides complete support throughout your Umrah journey'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your peace of mind during travel'
    }
  ];

  const testimonials = [
    {
      name: 'Fatima Al-Zahra',
      location: 'Nairobi',
      text: 'ABS Travel made our Umrah journey unforgettable. Their attention to detail and professional service exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      location: 'Mombasa',
      text: 'From visa processing to accommodation, everything was perfectly organized. Highly recommend ABS Travel for Umrah packages.',
      rating: 5
    },
    {
      name: 'Khadija Omar',
      location: 'Kisumu',
      text: 'The team at ABS Travel treated us like family. Our spiritual journey was smooth and meaningful thanks to their excellent service.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner for
            <span className="block text-blue-300">Umrah Journeys</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100">
            Experience the spiritual journey of a lifetime with our comprehensive Umrah packages
          </p>
          <Link
            to="/packages"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Your Umrah Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Office Announcement */}
      <section className="bg-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-blue-800 font-medium">
              🏢 <strong>Visit Our New Office:</strong> BBS Mall, Lower Ground, Room LGC 062, Eastleigh
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Welcome to ABS Travel
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ali Business Solution is your dedicated partner in making your sacred journey to the Holy Cities 
              a memorable and spiritually enriching experience. We provide comprehensive Umrah packages tailored 
              to meet your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Pilgrims Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our satisfied customers about their Umrah experience with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your Umrah package and let us handle all the details
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              View Packages
            </Link>
            <a
              href="tel:0728305788"
              className="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;