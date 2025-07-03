import React from "react";

const aboutData = {
  dermatographia: {
    title: "Dermatographia Urticaria",
    description:
      "Ever noticed how your skin reacts when you scratch it? Dermatographia Urticaria is a fascinating skin condition where even gentle scratching or rubbing creates raised red lines or welts. Think of it as your skin being extra sensitive - it's like your body's way of saying 'I noticed that!' when something touches your skin. While it might look concerning, it's usually harmless and the marks typically fade away within an hour.",
    image: "../images/me.jpg",
  },
  diseasesCovered: {
    title: "Diseases Covered",
    items: [
      "Dermatographia Urticaria",
      "Warts Molluscum and other Viral Infections",
      "Psoriasis pictures Lichen Planus and related diseases",
      "Eczema",
      "Tinea Ringworm Candidiasis and other Fungal Infections",
    ],
  },
  classification: {
    title: "Classification Working",
    description:
      "Our AI system works like a super-smart dermatologist that never gets tired. Using advanced deep learning models like ResNet50, it carefully examines every detail of your skin image. It's trained on thousands of skin condition examples, so it can spot patterns and features that might be hard to see with the naked eye. When you upload an image, it analyzes it and tells you what condition it thinks you might have, along with how confident it is in that assessment.",
    image: "../images/res50.png",
  },
  segmentation: {
    title: "Segmentation Working",
    description:
      "Imagine having a magic marker that can perfectly outline exactly where your skin condition is affecting you. That's what our segmentation technology does! Using sophisticated U-Net architectures, it creates precise maps that highlight the exact boundaries of affected areas. This helps doctors and patients understand not just what the condition is, but exactly how much of the skin is involved - which is crucial for planning the right treatment approach.",
    image: "../images/resunet.png",
  },
  technologies: {
    title: "Technologies Used",
    frontend: ["React.js", "Tailwind CSS", "Vite.js"],
    backend: ["FastAPI", "Python"],
    others: ["TensorFlow", "Git", "Pytorch", "Kaggle", "MakeSense.AI"],
  },
};

// Disease images
const diseaseImages = [
  "../images/dermo.jpg",
  "../images/warts.jpg",
  "../images/psos.jpg",
  "../images/eczema.jpg",
  "../images/tinea.jpg",
];

// Disease descriptions
const diseaseDescriptions = [
  "This is the 'writing on skin' condition - when you scratch or press on your skin, it responds by creating raised red lines that look like you've been writing on yourself. It's your skin being overly sensitive to touch, and while it can be itchy or uncomfortable, it's generally harmless. The marks usually appear within minutes and disappear within 30 minutes to an hour.",
  "These are those pesky little bumps caused by viruses like HPV and poxvirus. They're usually skin-colored and can spread through direct contact. The good news is they're treatable with freezing therapy (cryotherapy) or topical medications.",
  "These are chronic conditions where your immune system gets a bit confused and attacks your own skin. They cause scaly, itchy patches that often show up on elbows, knees, or wrists. Stress and infections can trigger flare-ups, but treatments like steroids and light therapy can help manage symptoms.",
  "This is a common skin condition that makes your skin dry, red, and incredibly itchy. It's especially common in kids and people with allergies. The tricky part is that scratching makes it worse, creating a frustrating itch-scratch cycle. Treatment focuses on keeping the skin moisturized and sometimes using steroid creams.",
  "These are fungal infections that create red, itchy, scaly rashes. They can affect your skin, scalp, or any warm, moist areas. They're contagious through contact, but the good news is they're treatable with antifungal creams or pills.",
];

export default function About() {
  return (
    <div className="scroll-smooth">
      {/* Block 1 - Dermatographia */}
      <section
        id="dermatographia"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-white px-4 sm:px-8 md:px-12 lg:px-20 py-12"
      >
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            {aboutData.dermatographia.title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.dermatographia.description}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutData.dermatographia.image}
            alt="Dermatographia Urticaria"
            className="rounded-xl sm:rounded-2xl shadow-xl object-cover border-4 sm:border-6 border-white w-full max-w-md"
            loading="lazy"
          />
        </div>
      </section>

      {/* Block 2 - Diseases Covered */}
      <section
        id="diseases"
        className="min-h-[400px] bg-indigo-50 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10 text-indigo-900"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 tracking-wide text-center">
          Diseases Covered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl w-full px-2">
          {aboutData.diseasesCovered.items.map((disease, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
            >
              <img
                src={diseaseImages[i]}
                alt={disease}
                className="w-full h-36 sm:h-40 object-cover rounded-t-xl"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-900">{disease}</h3>
                <p className="text-indigo-700 text-xs sm:text-sm flex-grow">{diseaseDescriptions[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Block 3 - Classification */}
      <section
        id="classification"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-900 text-white px-4 sm:px-8 md:px-12 lg:px-20 py-12"
      >
        <div className="md:w-1/2 order-2 md:order-1 flex justify-center mt-8 md:mt-0">
          <img
            src={aboutData.classification.image}
            alt="Classification Working"
            className="rounded-xl sm:rounded-2xl shadow-xl max-w-full max-h-64 sm:max-h-80 md:max-h-96 object-cover border-4 sm:border-6 border-white"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0 md:pl-8 lg:pl-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            {aboutData.classification.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.classification.description}
          </p>
        </div>
      </section>

      {/* Block 5 - Technologies */}
      <section
        id="technologies"
        className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-indigo-900"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 tracking-wide text-center">
          Technologies Used
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-purple-600 pb-2">
              Frontend
            </h3>
            <ul className="text-lg space-y-2">
              {aboutData.technologies.frontend.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-purple-600 pb-2">
              Backend
            </h3>
            <ul className="text-lg space-y-2">
              {aboutData.technologies.backend.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 border-purple-600 pb-2">
              Others
            </h3>
            <ul className="text-lg space-y-2">
              {aboutData.technologies.others.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Block 4 - Segmentation */}
      <section
        id="segmentation"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 text-white px-4 sm:px-8 md:px-12 lg:px-20 py-12"
      >
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            {aboutData.segmentation.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.segmentation.description}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutData.segmentation.image}
            alt="Segmentation Working"
            className="rounded-xl sm:rounded-2xl shadow-xl max-w-full max-h-64 sm:max-h-80 md:max-h-96 object-cover border-4 sm:border-6 border-white"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 sm:px-6 py-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">SkinAnalyzer AI</h2>
            <p className="text-xs sm:text-sm text-gray-400">
              A Deep Learning-Powered System for Accurate Detection, Segmentation, and Stage-Based Treatment Guidance of Dermatographia Urticaria and Related Skin Conditions
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/predict" className="hover:text-white">Predict</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Email: akshraj54325@gmail.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Email: nishkarsh.7078@gmail.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Email: dakshguptadg3@gmail.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Address: Graphic Era Hill University, Clement Town, Dehradun - 248001
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
              <li><a href="https://in.linkedin.com/in/ankitk247" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-8">&copy; 2025 SkinAnalyzer AI. All rights reserved.</p>
      </footer>
    </div>
  );
}