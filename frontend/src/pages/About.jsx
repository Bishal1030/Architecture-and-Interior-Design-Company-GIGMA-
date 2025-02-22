import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import backgroundVideo from "../assets/video.mp4";
import cardImage1 from "../assets/background4.jpg";
import cardImage2 from "../assets/background5.jpg";
import cardImage3 from "../assets/background3.jpg";
import parallaxImage from '../assets/parallax.jpg'

const About = () => {
  const missionStatements = [
    {
      title: "Innovative Design",
      content:
        "We push the boundaries of design to create spaces that are both unique and functional.",
      image: cardImage1,
    },
    {
      title: "Sustainability",
      content:
        "Our projects integrate eco-friendly practices for a better future.",
      image: cardImage2,
    },
    {
      title: "Client Focus",
      content:
        "We work closely with our clients to turn their vision into reality.",
      image: cardImage3,
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Video Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <h1 className="relative text-6xl font-bold text-white z-10">
          About Us
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Our Mission Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-primary text-center">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionStatements.map((mission, index) => (
              <div
                key={index}
                className="relative w-full h-80"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="relative w-full h-full duration-700 ease-in-out"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 180 }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 rounded-lg shadow-xl overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">
                        {mission.title}
                      </h3>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div
                    className="absolute inset-0 bg-white rounded-lg shadow-xl flex items-center justify-center p-6"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-gray-800 text-lg text-center">
                      {mission.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Parallax Divider Section */}
        <section
          className="relative h-[50vh] bg-fixed bg-center bg-cover flex items-center justify-center mb-16"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Vision & Commitment
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              At ArchiVista, innovation meets sustainability. We commit to
              designing spaces that elevate lifestyles and respect the environment.
            </p>
          </div>
        </section>

        {/* Our History Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Our History
            </h2>
            <p className="text-lg leading-relaxed">
              Founded in 2010 by visionary architects and designers, ArchiVista
              has evolved into a premier firm. Our journey is defined by passion,
              innovation, and an unwavering commitment to excellence.
            </p>
          </div>
          <img
            src={cardImage1}
            alt="Our History"
            className="mt-8 md:mt-0 md:w-1/2 rounded-lg shadow-xl"
          />
        </section>

        {/* Our Team Section */}
        <section className="mb-16 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Our Team
            </h2>
            <p className="text-lg leading-relaxed">
              Our dedicated team of professionals combines creativity with technical
              expertise, ensuring every project inspires and endures.
            </p>
          </div>
          <img
            src={cardImage3}
            alt="Our Team"
            className="mt-8 md:mt-0 md:w-1/2 rounded-lg shadow-xl"
          />
        </section>

        {/* Client Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Client Testimonials
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Our clients are our greatest advocates. Here’s what they say:
          </p>
          <div className="space-y-6">
            <blockquote className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-lg italic">
                "ArchiVista transformed our space into a masterpiece. Their innovative
                approach and attention to detail are unparalleled."
              </p>
              <footer className="mt-4 text-right">- John Doe</footer>
            </blockquote>
            <blockquote className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-lg italic">
                "The team exceeded our expectations with their creativity and
                professionalism. Our project was a resounding success."
              </p>
              <footer className="mt-4 text-right">- Jane Smith</footer>
            </blockquote>
            <blockquote className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-lg italic">
                "A truly exceptional experience from start to finish. ArchiVista’s
                commitment to excellence is evident in every detail."
              </p>
              <footer className="mt-4 text-right">- Michael Johnson</footer>
            </blockquote>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
