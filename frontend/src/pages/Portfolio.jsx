import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const contactFormRef = useRef(null);

  const categories = [
    {
      title: "Residential Projects",
      icon: "🏠",
      id: "residential",
      projects: [
        {
          title: "Modern Villa in Kathmandu",
          description: "A contemporary 4BHK home designed with open spaces and natural lighting.",
          details: {
            location: "Kathmandu, Nepal",
            area: "4,500 sq. ft",
            duration: "18 months",
            year: "2023",
            services: ["Architecture", "Interior Design", "Landscape Design"],
            features: ["Smart Home Integration", "Sustainable Materials", "Infinity Pool", "Home Theater"]
          },
          stats: {
            satisfaction: 98,
            sustainability: 92,
            innovation: 95
          },
          testimonial: {
            client: "Raj Sharma",
            text: "The attention to detail and innovative use of space exceeded our expectations."
          },
          gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ]
        },
        {
          title: "Luxury Apartment Renovation",
          description: "A chic interior upgrade for a high-rise apartment in Lalitpur.",
          details: {
            location: "Lalitpur, Nepal",
            area: "2,200 sq. ft",
            duration: "8 months",
            year: "2024",
            services: ["Interior Design", "Space Planning", "Custom Furniture"],
            features: ["Smart Lighting", "Custom Cabinetry", "Home Office", "Wellness Space"]
          },
          stats: {
            satisfaction: 96,
            sustainability: 88,
            innovation: 90
          },
          testimonial: {
            client: "Maya Thapa",
            text: "They transformed our space into a perfect blend of luxury and functionality."
          },
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687644-c94bf5588563?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ]
        }
      ]
    },
    {
      title: "Commercial Spaces",
      icon: "🏢",
      id: "commercial",
      projects: [
        {
          title: "Corporate Office Redesign",
          description: "A sleek and modern workspace promoting productivity and collaboration.",
          details: {
            location: "Thamel, Kathmandu",
            area: "15,000 sq. ft",
            duration: "12 months",
            year: "2024",
            services: ["Space Planning", "Interior Design", "Acoustic Solutions"],
            features: ["Collaborative Spaces", "Quiet Zones", "Biophilic Design", "Tech Integration"]
          },
          stats: {
            satisfaction: 94,
            sustainability: 96,
            innovation: 92
          },
          testimonial: {
            client: "TechHub Nepal",
            text: "The new office design has significantly improved team collaboration and productivity."
          },
          gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687644-c94bf5588563?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ]
        },
        {
          title: "Boutique Café Interior",
          description: "A cozy and Instagram-worthy café with rustic elements.",
          details: {
            location: "Jhamsikhel, Lalitpur",
            area: "1,800 sq. ft",
            duration: "6 months",
            year: "2023",
            services: ["Interior Design", "Lighting Design", "Custom Furniture"],
            features: ["Instagram Corner", "Outdoor Seating", "Custom Light Fixtures", "Vertical Garden"]
          },
          stats: {
            satisfaction: 98,
            sustainability: 90,
            innovation: 94
          },
          testimonial: {
            client: "Café Nirvana",
            text: "Our café has become a social media sensation thanks to the stunning design."
          },
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687644-c94bf5588563?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ]
        }
      ]
    },
    {
      title: "Hospitality & Retail",
      icon: "🏨",
      id: "hospitality",
      projects: [
        {
          title: "5-Star Resort in Pokhara",
          description: "A luxurious getaway with a fusion of Nepalese heritage and modern design.",
          details: {
            location: "Lakeside, Pokhara",
            area: "45,000 sq. ft",
            duration: "24 months",
            year: "2024",
            services: ["Architecture", "Interior Design", "Landscape Design", "Lighting Design"],
            features: ["Infinity Pool", "Spa & Wellness", "Fine Dining", "Cultural Center"]
          },
          stats: {
            satisfaction: 97,
            sustainability: 94,
            innovation: 96
          },
          testimonial: {
            client: "Himalayan Luxury Resorts",
            text: "The perfect blend of luxury and local culture has made us a top destination."
          },
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687644-c94bf5588563?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ]
        },
        {
          title: "High-End Fashion Store",
          description: "A visually engaging retail space maximizing brand aesthetics.",
          details: {
            location: "Durbar Marg, Kathmandu",
            area: "3,500 sq. ft",
            duration: "9 months",
            year: "2023",
            services: ["Interior Design", "Lighting Design", "Visual Merchandising"],
            features: ["Interactive Displays", "VIP Lounge", "Smart Mirrors", "Digital Integration"]
          },
          stats: {
            satisfaction: 95,
            sustainability: 88,
            innovation: 98
          },
          testimonial: {
            client: "Fashion Nepal",
            text: "Sales have increased by 40% since the redesign of our flagship store."
          },
          gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687644-c94bf5588563?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          ]
        }
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? categories.flatMap(cat => cat.projects)
    : categories.find(cat => cat.id === selectedCategory)?.projects || [];

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Portfolio Hero */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] bg-primary overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Crafting Spaces
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              Where Innovation Meets Elegance
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={scrollToContact}
              className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Start Your Project
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "150+" },
              { label: "Happy Clients", value: "120+" },
              { label: "Awards Won", value: "25+" },
              { label: "Team Members", value: "45+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium shadow-sm transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-primary/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium shadow-sm transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-primary/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon} {category.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.gallery[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200">{project.description}</p>
                      <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.details.services.map((service, sIndex) => (
                          <span 
                            key={sIndex}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
{/* Project Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 overflow-y-auto z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 z-[9999] w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-black text-xl font-bold">✕</span>
          </button>
          {/* Fixed-height image container */}
          <div className="w-full h-64">
            <img 
              src={selectedProject.gallery[0]} 
              alt={selectedProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-3xl text-black font-bold mb-4">
            {selectedProject.title}
          </h2>
          <p className="text-gray-800 mb-6">
            {selectedProject.description}
          </p>
          
          {/* Project Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {Object.entries(selectedProject.details)
              .slice(0, 4)
              .map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 capitalize">{key}</p>
                  <p className="font-semibold text-black">{value}</p>
                </div>
              ))}
          </div>
          
          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Key Features
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedProject.details.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-black"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project Stats */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Project Stats
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(selectedProject.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-2">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="var(--primary-color)"
                        strokeWidth="3"
                        strokeDasharray={`${value}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold text-black">
                        {value}%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 capitalize">{key}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial */}
          {selectedProject.testimonial && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 italic mb-4">
                "{selectedProject.testimonial.text}"
              </p>
              <p className="font-semibold text-black">
                - {selectedProject.testimonial.client}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Contact Form (Always Visible) */}
{/* Start Your Project Section */}
<motion.div
  ref={contactFormRef}
  className="py-20 bg-gradient-to-r from-primary/80 to-primary"
>
  <div className="max-w-4xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white">Start Your Project</h2>
      <p className="text-lg text-white/90 mt-2">
        Let's create something extraordinary together
      </p>
    </div>
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg mx-auto">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>
        <select
          className="bg-white w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
        >
          <option value="">Select Project Type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="hospitality">Hospitality</option>
        </select>
        <textarea
          placeholder="Tell us about your project"
          rows="4"
          className="bg-white w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-md"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default Portfolio;
