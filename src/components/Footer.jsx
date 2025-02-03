import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full">
          <div className="bg-primary-0 p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white">Get connected with us on social media networks:</p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Github size={20} />
                </a>
              </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-4">
              <div>
                <h3 className="text-white font-semibold mb-4">Notes Sharing</h3>
                <p className="text-gray-200"></p>
              </div>
    
              <div>
                <h3 className="text-white font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-200 hover:text-white">Buy</a></li>
                  <li><a href="#" className="text-gray-200 hover:text-white">Sell</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="text-white font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-200 hover:text-white">Account</a></li>
                  <li><a href="#" className="text-gray-200 hover:text-white">Help</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-200">Rohtak,Haryana</li>
                  <li className="text-gray-200">contact@notesharing.com</li>
                  <li className="text-gray-200">+91-XXXXXXXX89</li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="bg-primary-1 p-4">
            <p className="text-white text-center">
              2025 Copyright: Notes sharing
            </p>
          </div>
        </footer>
      );
}
