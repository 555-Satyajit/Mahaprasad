import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Bell, Menu, Search, User, Clock, Truck, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const LandingPage = () => {
  // Previous state and useEffect code remains the same
  const [greeting, setGreeting] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('ଶୁଭ ପ୍ରଭାତ');
    else if (hour < 17) setGreeting('ଶୁଭ ଅପରାହ୍ନ');
    else setGreeting('ଶୁଭ ସନ୍ଧ୍ୟା');
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="bg-orange-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">ॐ</span>
              </motion.div>
              <span className="text-xl font-semibold">जगन्नाथ प्रसाद</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-orange-200 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-200 transition-colors">Prasad</a>
              <a href="#" className="hover:text-orange-200 transition-colors">Temple</a>
              <a href="#" className="hover:text-orange-200 transition-colors">Contact</a>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-orange-200" />
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-orange-200" />
              <motion.div
                className="cursor-pointer hover:text-orange-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/login')} // Navigate to Login page
              >
                <User className="w-6 h-6" />
              </motion.div>
              <Menu 
                className="w-5 h-5 cursor-pointer md:hidden hover:text-orange-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-orange-600 text-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 hover:text-orange-200">Home</a>
            <a href="#" className="block py-2 hover:text-orange-200">Prasad</a>
            <a href="#" className="block py-2 hover:text-orange-200">Temple</a>
            <a href="#" className="block py-2 hover:text-orange-200">Contact</a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section 
        className="relative h-[80vh] bg-gradient-to-b from-orange-500 to-orange-600 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-1/2 text-white space-y-6">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold"
              variants={fadeIn}
            >
              {greeting}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl"
              variants={fadeIn}
            >
              Experience the divine blessing of Lord Jagannath's prasad delivered to your doorstep
            </motion.p>
            <motion.button 
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Prasad Now
            </motion.button>
          </div>

          {/* Decorative SVG */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2">
            <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
              <path
                d="M100,10 L190,50 L190,150 L100,190 L10,150 L10,50 Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2" />
              <path
                d="M100,60 L140,100 L100,140 L60,100 Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </motion.section>

      {/* New Temple Schedule Section */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-orange-800 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Temple Schedule & Offerings
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { time: "4:30 AM", ritual: "Mangal Arati" },
              { time: "7:00 AM", ritual: "Abakash" },
              { time: "11:00 AM", ritual: "Bhog Mandap" },
              { time: "8:30 PM", ritual: "Sandhya Arati" }
            ].map((schedule, index) => (
              <motion.div
                key={schedule.time}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Clock className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-orange-800">{schedule.time}</h3>
                <p className="text-gray-600">{schedule.ritual}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-orange-800 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Divine Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Sacred Delivery</h3>
              <p className="text-gray-600">Blessed prasad delivered with utmost reverence to your doorstep</p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Prepared with pure ingredients and divine consciousness</p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Devotional Care</h3>
              <p className="text-gray-600">Handled with devotion and packed with sacred blessings</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-orange-800 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Devotee Experiences
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Mumbai",
                text: "The prasad delivery brings the divine blessings of Lord Jagannath directly to our home. Extremely grateful for this service."
              },
              {
                name: "Priya Sharma",
                location: "Delhi",
                text: "The quality and purity of the prasad is maintained perfectly. It feels just like receiving it at the temple."
              },
              {
                name: "Amit Patel",
                location: "Bangalore",
                text: "Regular prasad delivery has brought so much positive energy to our home. The service is truly a blessing."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-orange-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Receive Divine Blessings Today
            </h2>
            <p className="text-xl text-white opacity-90">
              Start your spiritual journey with Lord Jagannath's prasad
            </p>
            <motion.button
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Sacred Prasad
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-orange-200">Dedicated to serving Lord Jagannath's prasad with devotion and care.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-orange-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-orange-200 hover:text-white">Prasad Menu</a></li>
                <li><a href="#" className="text-orange-200 hover:text-white">Temple Schedule</a></li>
                <li><a href="#" className="text-orange-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-orange-200">
                <li>Email: info@jagannatprasad.com</li>
                <li>Phone: +91 XXX XXX XXXX</li>
                <li>Puri, Odisha, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-orange-200 mb-4">Subscribe for temple updates and prasad offerings</p>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-orange-700 text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-700 text-center text-orange-200">
            <p>© 2024 Lord Jagannath Prasad Delivery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;