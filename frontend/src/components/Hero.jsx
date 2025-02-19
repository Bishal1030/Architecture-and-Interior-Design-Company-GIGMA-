import { motion } from 'framer-motion';
import backgroundImage from '../assets/background3.jpg'

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(71, 91, 95, 0.3), rgba(71, 91, 95, 0.3)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw"
        }}
      />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center text-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wider">
          INNOVATIVE DESIGN
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Creating Spaces That Inspire
        </p>
        <button className="border-2 border-white px-8 py-3 hover:bg-white hover:text-primary transition-all duration-300">
          LEARN MORE
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;