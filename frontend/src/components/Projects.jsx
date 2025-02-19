import { motion } from 'framer-motion';
import Image1 from '../assets/Interior_Design1.jpg'
import Image2 from '../assets/Interior_Design2.jpg'
import Image3 from '../assets/Interior_Design3.jpeg'

const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const projects = [
    {
      id: 1,
      image: Image1,
      name: "Modern Living Space",
      details: "Residential • Interior Design"
    },
    {
      id: 2,
      image: Image2,
      name: "Contemporary Office",
      details: "Commercial • Architecture"
    },
    {
      id: 3,
      image: Image3,
      name: "Luxury Apartment",
      details: "Residential • Interior Design"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">Discover our latest architectural achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeInUp}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm">{project.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
            VIEW ALL PROJECTS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;