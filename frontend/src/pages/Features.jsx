import { motion } from 'framer-motion';
// Example imports (uncomment and adjust the paths as needed):
import feature1 from '../assets/background3.jpg'
import feature2 from '../assets/background4.jpg'
import feature3 from '../assets/background5.jpg'
import feature4 from '../assets/Interior_Design1.jpg'
import feature5 from '../assets/Interior_Design2.jpg'
import feature6 from '../assets/Interior_Design3.jpeg'

const Features = () => {
  const features = [
    {
      icon: "🏡",
      title: "Tailored Architectural Excellence",
      description:
        "We design every space to reflect your personality and lifestyle, ensuring each project is uniquely crafted to your needs.",
      // Uncomment and replace with your image import if needed:
      // image: feature1Img,
      image: feature4, // Remove this and uncomment the above line when you have an image
    },
    {
      icon: "🎨",
      title: "Innovative Interior Solutions",
      description:
        "From minimalistic modern to luxurious classic, we create interior designs that blend functionality with aesthetics.",
      // image: feature2Img,
      image: feature2,
    },
    {
      icon: "🏗",
      title: "End-to-End Project Management",
      description:
        "From concept to completion, we handle every aspect of your project with precision and professionalism.",
      // image: feature3Img,
      image: feature5,
    },
    {
      icon: "🖥",
      title: "3D Visualization & VR Walkthroughs",
      description:
        "Experience your dream space before it's built with our high-quality 3D renders and virtual reality walkthroughs.",
      // image: feature4Img,
      image: feature1,
    },
    {
      icon: "🌱",
      title: "Sustainable & Eco-Friendly Designs",
      description:
        "We incorporate green architecture, energy-efficient solutions, and sustainable materials for an environmentally conscious approach.",
      // image: feature5Img,
      image: feature3,
    },
    {
      icon: "🤝",
      title: "Client-Centric Approach",
      description:
        "We collaborate closely with clients to understand their vision and exceed expectations through personalized solutions.",
      // image: feature6Img,
      image: feature6,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] bg-primary flex items-center justify-center"
      >
        {/* OPTIONAL: Insert decorative graphics or gradient overlays here */}
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Unique Features</h1>
          <p className="text-xl">
            What sets us apart in architectural excellence
          </p>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Left Side Content */}
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    {/* Insert image if provided */}
                    {feature.image && (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="mt-4 rounded-lg shadow-md"
                      />
                    )}
                  </div>
                  {/* Center Icon */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold border-4 border-white z-10">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  {/* Center Icon */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold border-4 border-white z-10">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Right Side Content */}
                  <div className="w-1/2 pl-8">
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    {/* Insert image if provided */}
                    {feature.image && (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="mt-4 rounded-lg shadow-md"
                      />
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
