import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABS Travel</h3>
            <p className="text-blue-200 mb-4">
              Your trusted partner for spiritual journeys. We specialize in Umrah packages 
              with complete service and peace of mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:0728305788" className="text-blue-200 hover:text-white transition-colors">
                  0728 305 788
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@abstravel.co.ke" className="text-blue-200 hover:text-white transition-colors">
                  info@abstravel.co.ke
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <p className="text-blue-200">
                  BBS Mall, Lower Ground<br />
                  Room LGC 062, Eastleigh<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/packages" className="block text-blue-200 hover:text-white transition-colors">
                Umrah Packages
              </a>
              <a href="/services" className="block text-blue-200 hover:text-white transition-colors">
                Our Services
              </a>
              <a href="/gallery" className="block text-blue-200 hover:text-white transition-colors">
                Gallery
              </a>
              <a href="/contact" className="block text-blue-200 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 ABS Travel - Ali Business Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;