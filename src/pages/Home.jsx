import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import Steps from "./Steps";
import Project from "./Project";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full relative z-10 max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Diagnose Smartly
                </span>
                <br />
                <span className="text-white">with AI</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl">
                Professional-grade AI dermatological screening tool. Comprehensive skin condition analysis with clinical-grade segmentation, severity assessment, and evidence-based treatment recommendations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#demo-section"
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-xl sm:rounded-2xl"></div>
              <motion.img
                src="/images/bg.png"
                alt="AI Skin Analysis"
                className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl shadow-2xl border border-white/10"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto">
          <ImageSlider />
        </div>
      </section>

      {/* Info Block */}
      <section className="mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8" id="demo-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Project Info */}
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Deep Learning + Dermatographia = SkinAnalyzer AI
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dermatographia Urticaria is a unique skin response condition where friction causes raised marks. With deep learning models, we segment and classify the skin's condition from images—ensuring fast, accurate, and intelligent diagnosis.
              </p>
              <motion.a
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                href="/predict"
              >
                See Demo
              </motion.a>
            </div>
            
            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4 relative order-1 lg:order-2">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img 
                  src="/images/f1.jpg" 
                  alt="Sample 1" 
                  className="relative w-full h-48 lg:h-56 xl:h-64 object-cover rounded-2xl shadow-lg border border-white/10" 
                />
              </motion.div>
              <motion.div 
                className="relative group mt-8 lg:mt-12"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img 
                  src="/images/f2.jpg" 
                  alt="Sample 2" 
                  className="relative w-full h-40 lg:h-48 xl:h-56 object-cover rounded-2xl shadow-lg border border-white/10" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flowchart */}
      <section className="mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl blur-lg"></div>
                <img 
                  src="/images/flowchart.png" 
                  alt="Flowchart" 
                  className="relative rounded-2xl shadow-lg border border-white/10 max-w-full" 
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                How SkinAnalyzer AI Works
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Upload a skin image → AI classifies the image using ResNet50 → Segmentation performed by U-Net → Thresholding applied automatically → Result & treatment returned.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Steps/>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">SkinAnalyzer AI</h2>
              <p className="text-gray-400 leading-relaxed">
                A Deep Learning-Powered System for Accurate Detection, Segmentation, and Stage-Based Treatment Guidance of Dermatographia Urticaria and Related Skin Conditions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/" className="hover:text-emerald-400 transition-colors duration-300">Overview</a></li>
                <li><a href="/about" className="hover:text-emerald-400 transition-colors duration-300">Features</a></li>
                <li><a href="/predict" className="hover:text-emerald-400 transition-colors duration-300">Scan</a></li>
                <li><a href="/team" className="hover:text-emerald-400 transition-colors duration-300">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>akshraj54325@gmail.com</p>
                <p>nishkarsh.7078@gmail.com</p>
                <p>dakshguptadg3@gmail.com</p>
                <p className="text-sm mt-4">
                  Graphic Era Hill University<br />
                  Clement Town, Dehradun - 248001
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/pavlo-abramiuk-bb4696353/" 
                    className="hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn.Pavlo
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/kevin-green-812604336/" 
                    className="hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn.Kevin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-500">&copy; 2025 SkinAnalyzer AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}