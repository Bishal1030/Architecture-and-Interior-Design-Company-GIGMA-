import { motion } from 'framer-motion';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive architectural and interior design solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 border border-gray-200 rounded-lg"
          >
            <div className="h-14 w-14 bg-primary text-white rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Architecture</h3>
            <p className="text-gray-600">Innovative architectural solutions that blend form and function.</p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 border border-gray-200 rounded-lg"
          >
            <div className="h-14 w-14 bg-primary text-white rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interior Design</h3>
            <p className="text-gray-600">Creating beautiful and functional interior spaces.</p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-6 border border-gray-200 rounded-lg"
          >
            <div className="h-14 w-14 bg-primary text-white rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-600">Expert advice and planning for your project needs.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;