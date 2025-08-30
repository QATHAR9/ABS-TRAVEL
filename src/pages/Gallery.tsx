import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kaaba - The Sacred House',
      description: 'Pilgrims performing Tawaf around the Kaaba'
    },
    {
      src: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Masjid Al-Nabawi',
      description: 'The beautiful green dome of Prophet\'s Mosque in Madinah'
    },
    {
      src: 'https://images.pexels.com/photos/8989738/pexels-photo-8989738.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Group Journey',
      description: 'Our pilgrims during their spiritual journey'
    },
    {
      src: 'https://images.pexels.com/photos/2233728/pexels-photo-2233728.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Haram Courtyard',
      description: 'The magnificent courtyard of Masjid Al-Haram'
    },
    {
      src: 'https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Evening Prayer',
      description: 'Pilgrims gathering for Maghrib prayer'
    },
    {
      src: 'https://images.pexels.com/photos/3889520/pexels-photo-3889520.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Accommodation',
      description: 'Comfortable hotel rooms near the Haram'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Witness the beauty and spirituality of the Holy Cities through our pilgrim experiences
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Client Experiences */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Client Experiences
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped make countless Umrah journeys memorable and meaningful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">2024 Umrah Groups</h3>
              <p className="text-gray-700 mb-4">
                This year, we successfully organized over 15 group departures with more than 300 pilgrims. 
                Each journey was carefully planned to ensure maximum spiritual benefit and comfort.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  300+ Pilgrims
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  4.8/5 Rating
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Success Stories</h3>
              <p className="text-gray-700 mb-4">
                From first-time pilgrims to families with elderly members, we've helped people from 
                all walks of life complete their Umrah with ease and spiritual fulfillment.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Year-round service
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-1 text-green-500" />
                  100% Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;