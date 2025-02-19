import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: "🏡",
      title: "Tailored Architectural Excellence",
      description: "We design every space to reflect your personality and lifestyle, ensuring each project is uniquely crafted to your needs."
    },
    {
      icon: "🎨",
      title: "Innovative Interior Solutions",
      description: "From minimalistic modern to luxurious classic, we create interior designs that blend functionality with aesthetics."
    },
    {
      icon: "🏗",
      title: "End-to-End Project Management",
      description: "From concept to completion, we handle every aspect of your project with precision and professionalism."
    },
    {
      icon: "🖥",
      title: "3D Visualization & VR Walkthroughs",
      description: "Experience your dream space before it's built with our high-quality 3D renders and virtual reality walkthroughs."
    },
    {
      icon: "🌱",
      title: "Sustainable & Eco-Friendly Designs",
      description: "We incorporate green architecture, energy-efficient solutions, and sustainable materials for an environmentally conscious approach."
    },
    {
      icon: "🤝",
      title: "Client-Centric Approach",
      description: "We collaborate closely with clients to understand their vision and exceed expectations through personalized solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-primary flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Unique Features</h1>
          <p className="text-xl">What sets us apart in architectural excellence</p>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 