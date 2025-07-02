import React, { useState, useEffect, useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Ankit Kumar Gola",
    role: "AI Engineer",
    image: "./images/pavlo.jpg",
    description: "Lead Developer & AI Specialist",
    skills: ["React.js", "Python", "AI/ML", "FastAPI"]
  },
  {
    id: 2,
    name: "Kevin Andres Green Marin",
    role: "Full Stack Engineer",
    image: "./images/kevin.jpg",
    description: "Full Stack Developer",
    skills: ["JavaScript", "Node.js", "UI/UX", "Database"]
  },
  
];

export default function Team() {
  const [activeId, setActiveId] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const [rotationDirection, setRotationDirection] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(0.3);
  const animationRef = useRef();

  // Dynamic rotation with speed and direction changes
  useEffect(() => {
    if (activeId === null) {
      const animate = () => {
        setRotation((prev) => {
          const newRotation = prev + (rotationSpeed * rotationDirection);
          
          // Change direction every 5 seconds
          if (Math.abs(newRotation) > 180) {
            setRotationDirection(prev => prev * -1);
            setRotationSpeed(prev => Math.random() * 0.4 + 0.1); // Random speed between 0.1 and 0.5
          }
          
          return newRotation;
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationRef.current);
    }
  }, [activeId, rotationDirection, rotationSpeed]);

  // Click handler for circle
  const handleClick = (id) => {
    if (id === activeId) {
      // Deselect if clicked again
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  // Responsive sizing
  const containerSize = Math.min(window.innerWidth * 0.9, 800);
  const circleRadius = containerSize * 0.35;
  const inactiveSize = containerSize * 0.18;
  const activeSize = containerSize * 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            The brilliant minds behind SkinAnalyzer AI - transforming dermatological screening with cutting-edge technology
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative"
            style={{
              width: containerSize,
              height: containerSize,
            }}
          >
            {/* Central glow effect with rotation */}
            <div 
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotation * 0.5}deg)`,
                transition: 'transform 0.1s linear'
              }}
            ></div>
            
            {/* Rotating ring container */}
            <div
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: containerSize,
                height: containerSize,
                marginTop: -containerSize / 2,
                marginLeft: -containerSize / 2,
                transform: `rotate(${rotation}deg)`,
                transition: activeId ? "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)" : "transform 0.1s linear",
              }}
            >
              {teamMembers.map((member, index) => {
                // angle for each member on the circle (120 degrees apart)
                const angle = (360 / teamMembers.length) * index;
                const rad = (angle * Math.PI) / 180;

                // Position images on the circle (centered)
                const x = circleRadius * Math.cos(rad);
                const y = circleRadius * Math.sin(rad);

                const isActive = activeId === member.id;
                const isHovered = hoveredId === member.id;
                const isAnyActive = activeId !== null;

                return (
                  <div
                    key={member.id}
                    onClick={() => handleClick(member.id)}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="absolute rounded-full cursor-pointer select-none overflow-hidden group"
                    style={{
                      width: isActive ? activeSize : inactiveSize,
                      height: isActive ? activeSize : inactiveSize,
                      top: isActive
                        ? containerSize / 2 - activeSize / 2
                        : containerSize / 2 + y - inactiveSize / 2,
                      left: isActive
                        ? containerSize / 2 - activeSize / 2
                        : containerSize / 2 + x - inactiveSize / 2,
                      transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: isActive ? 100 : isHovered ? 50 : 10,
                      opacity: isAnyActive && !isActive ? 0.4 : 1,
                      transform: `rotate(${-rotation}deg)`,
                    }}
                    title={`${member.name} - ${member.role}`}
                  >
                    {/* Glow effect */}
                    <div 
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        isActive 
                          ? "bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 blur-xl scale-110" 
                          : isHovered 
                            ? "bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-lg scale-105"
                            : "bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 blur-md scale-100"
                      }`}
                    ></div>
                    
                    {/* Border with rotation */}
                    <div 
                      className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                        isActive 
                          ? "border-emerald-400/60" 
                          : isHovered 
                            ? "border-emerald-400/40"
                            : "border-emerald-400/20"
                      }`}
                      style={{
                        transform: `rotate(${rotation * 0.3}deg)`,
                        transition: 'transform 0.1s linear, all 0.5s ease'
                      }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative bg-slate-900/90 backdrop-blur-lg rounded-full h-full flex flex-col justify-center items-center text-center p-4 border border-white/10">
                      <img
                        src={member.image}
                        alt={member.name}
                        draggable={false}
                        className={`rounded-full object-cover transition-all duration-500 ${
                          isActive ? "w-3/4 h-3/4 mb-3" : "w-full h-full"
                        }`}
                        style={{
                          transform: `rotate(${rotation * 0.2}deg)`,
                          transition: 'transform 0.1s linear, all 0.5s ease'
                        }}
                      />
                      
                      {isActive && (
                        <div className="text-white space-y-2">
                          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">
                            {member.name}
                          </h2>
                          <h3 className="text-sm sm:text-base font-semibold text-cyan-400">
                            {member.role}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300">
                            {member.description}
                          </p>
                          <div className="flex flex-wrap justify-center gap-1 mt-2">
                            {member.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-400/30"
                                style={{
                                  transform: `rotate(${rotation * 0.1}deg)`,
                                  transition: 'transform 0.1s linear'
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Instructions */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg">
              Click on any team member to learn more about them
            </p>
            <p className="text-gray-500 text-sm mt-2">
              The circle rotates dynamically with changing speeds and directions
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">SkinAnalyzer AI</h2>
              <p className="text-gray-400 leading-relaxed">
                Advanced AI-powered dermatological screening system for accurate skin condition detection and analysis.
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