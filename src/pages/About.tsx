import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About ABS Travel</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ali Business Solution - Dedicated to making your spiritual journey memorable and meaningful
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide exceptional Umrah services that enable Muslims to perform their spiritual 
                    journey with comfort, convenience, and peace of mind. We are committed to delivering 
                    personalized service that exceeds expectations while maintaining the highest standards 
                    of professionalism and care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become East Africa's leading Umrah and Hajj service provider, known for our 
                    integrity, reliability, and commitment to making every pilgrim's journey a 
                    transformative and spiritually fulfilling experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With years of experience in the travel industry and deep understanding of Islamic 
                    traditions, our team has successfully organized hundreds of Umrah journeys for 
                    pilgrims from Kenya and across East Africa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Promise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We promise to handle every aspect of your journey with care and attention to detail, 
                    from visa processing to accommodation, ensuring you can focus entirely on your 
                    spiritual experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded with a passion for facilitating spiritual journeys and serving the Muslim community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed mb-6">
                ABS Travel (Ali Business Solution) was established with the noble intention of serving 
                the Muslim community by facilitating their spiritual journeys to the Holy Cities of 
                Makkah and Madinah. Our founder, recognizing the need for reliable and professional 
                Umrah services in Kenya, started this company with a commitment to excellence and 
                customer satisfaction.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the years, we have built strong relationships with hotels, airlines, and local 
                service providers in Saudi Arabia, ensuring that our pilgrims receive the best possible 
                service at competitive prices. Our team consists of experienced travel professionals 
                who understand both the logistical and spiritual aspects of the Umrah journey.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Today, we are proud to have our new office at BBS Mall in Eastleigh, where we continue 
                to serve our community with dedication and integrity. Every pilgrim's satisfaction is 
                our success, and every successful journey strengthens our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;