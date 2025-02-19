import { motion } from 'framer-motion';
import { useState } from 'react';

const Blog = () => {
  const articles = [
    {
      icon: "🏡",
      title: "Top Interior Design Trends for 2024",
      excerpt: "Discover the latest trends in interior design, from bold colors to minimalist aesthetics.",
      fullContent: "Discover the latest trends in interior design, from bold colors to minimalist aesthetics. This year, we're seeing a strong emphasis on sustainable materials, biophilic design, and multifunctional spaces. Designers are incorporating natural elements, using earth tones, and creating spaces that promote well-being. The pandemic has influenced how we view our living spaces, leading to more home offices and flexible areas that can adapt to our changing needs. Smart home integration continues to grow, with a focus on both functionality and aesthetics.",
      image: "", // Image path to be added
      date: "March 15, 2024",
      category: "Interior Design",
      readTime: "5 min read",
      likes: 24,
      shares: 12,
      tags: ["Design", "Trends", "Home Decor"]
    },
    {
      icon: "🌱",
      title: "Sustainable Architecture: Designing for a Greener Future",
      excerpt: "Learn how architects are incorporating eco-friendly materials and energy-efficient designs.",
      fullContent: "Learn how architects are incorporating eco-friendly materials and energy-efficient designs. Sustainable architecture has become more than just a trend; it's now a necessity. Architects are exploring innovative materials like recycled steel, bamboo, and cross-laminated timber. Solar panels, green roofs, and rainwater harvesting systems are becoming standard features. The focus is on reducing carbon footprints while creating beautiful, livable spaces that connect with nature.",
      image: "", // Image path to be added
      date: "March 10, 2024",
      category: "Architecture",
      readTime: "7 min read",
      likes: 31,
      shares: 18,
      tags: ["Sustainability", "Architecture", "Green Building"]
    },
    {
      icon: "🛋",
      title: "How to Choose the Right Furniture for Your Home",
      excerpt: "A guide to selecting furniture that matches your space and enhances comfort.",
      fullContent: "A guide to selecting furniture that matches your space and enhances comfort. When choosing furniture, consider both functionality and aesthetics. Measure your space carefully and create a floor plan before making purchases. Think about traffic flow, lifestyle needs, and the overall style of your home. Quality materials and construction are worth the investment for pieces you'll use daily. Don't forget to consider maintenance requirements and durability when making your selections.",
      image: "", // Image path to be added
      date: "March 5, 2024",
      category: "Furniture",
      readTime: "6 min read",
      likes: 42,
      shares: 15,
      tags: ["Furniture", "Home Decor", "Interior Design"]
    },
    {
      icon: "🏗",
      title: "The Future of Smart Homes: Technology Meets Design",
      excerpt: "Explore how smart home technology is revolutionizing modern living spaces.",
      fullContent: "Explore how smart home technology is revolutionizing modern living spaces. From voice-controlled lighting to automated climate control, smart home features are becoming increasingly sophisticated and seamlessly integrated into design. The Internet of Things (IoT) is enabling unprecedented levels of home automation, while artificial intelligence is making our homes more intuitive and responsive to our needs. Designers are finding creative ways to incorporate these technologies while maintaining aesthetic appeal.",
      image: "", // Image path to be added
      date: "March 1, 2024",
      category: "Smart Home",
      readTime: "8 min read",
      likes: 56,
      shares: 23,
      tags: ["Smart Home", "Technology", "Innovation"]
    }
  ];

  const [expandedArticles, setExpandedArticles] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleArticle = (index) => {
    setExpandedArticles(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleLike = (index) => {
    setLikedArticles(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const shareArticle = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    }
  };

  const filteredArticles = articles.filter(article => 
    selectedCategory === "All" || article.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Hero */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] bg-primary flex items-center justify-center overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
        />
        <div className="text-center text-white relative z-10">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Latest Articles
          </motion.h1>
          <motion.p 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl"
          >
            Insights and inspiration from our design experts
          </motion.p>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8 sticky top-0 bg-white/95 backdrop-blur-sm z-20 shadow-sm">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {["All", "Interior Design", "Architecture", "Furniture", "Smart Home"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium shadow-sm transition-all duration-200 ${
                selectedCategory === category 
                  ? 'bg-primary text-white shadow-primary/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all bg-white"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative group">
                {/* Image placeholder */}
                <div className="w-full h-full bg-gray-200 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-primary text-white px-4 py-2 rounded-full shadow-lg">{article.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{article.icon}</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{article.title}</h2>
                <p className="text-gray-600 mb-4">
                  {expandedArticles.includes(index) ? article.fullContent : article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <motion.button 
                    onClick={() => toggleArticle(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gray-100 text-primary font-semibold rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {expandedArticles.includes(index) ? 'Show Less ↑' : 'Read More →'}
                  </motion.button>
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(index)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                        likedArticles.includes(index)
                          ? 'bg-pink-100 text-pink-500'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      <span>{likedArticles.includes(index) ? '❤️' : '🤍'}</span>
                      <span className="text-sm font-medium">
                        {article.likes + (likedArticles.includes(index) ? 1 : 0)}
                      </span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => shareArticle(article)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all"
                    >
                      <span>🔗</span>
                      <span className="text-sm font-medium">{article.shares}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gray-50 rounded-lg text-center relative overflow-hidden shadow-lg"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-gray-100/50"
          />
          <div className="relative z-10">
            <h3 className="text-2xl text-black font-bold mb-4">Want more design tips?</h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest updates</p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;