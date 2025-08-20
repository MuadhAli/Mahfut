import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Star, ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { useToast } from '@/components/ui/use-toast';

const Clients = () => {
  const { toast } = useToast();

  const clients = [
    { name: "SABIC", logoAlt: "SABIC company logo" },
    { name: "MARAFIQ", logoAlt: "MARAFIQ company logo" },
    { name: "Saudi Aramco", logoAlt: "Saudi Aramco company logo" },
    { name: "HYUNDAI ENGINEERING & CONSTRUCTION", logoAlt: "HYUNDAI Engineering & Construction company logo" },
    { name: "GS E&C", logoAlt: "GS E&C company logo" },
    { name: "SINOPEC", logoAlt: "SINOPEC company logo" },
    { name: "NESMA & Partners", logoAlt: "NESMA & Partners company logo" },
    { name: "ZAMIL STEEL", logoAlt: "Zamil Steel company logo" },
    { name: "LARSEN & TOUBRO", logoAlt: "Larsen & Toubro company logo" },
    { name: "SAMSUNG ENGINEERING", logoAlt: "Samsung Engineering company logo" },
    { name: "SK", logoAlt: "SK company logo" },
    { name: "Petrofac", logoAlt: "Petrofac company logo" },
  ];

  const testimonials = [
    {
      quote: "MAHFUT's commitment to quality and timely delivery has been instrumental to our project's success. They are a reliable partner in every sense.",
      author: "Project Manager",
      company: "Saudi Aramco"
    },
    {
      quote: "The professionalism and expertise of the MAHFUT team are unmatched. They consistently provide top-tier materials and support.",
      author: "Lead Engineer",
      company: "SABIC"
    },
    {
      quote: "We rely on MAHFUT for our most critical projects. Their supply chain is robust, and their customer service is exceptional.",
      author: "Procurement Director",
      company: "NESMA & Partners"
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Our Valued Clients - MAHFUT Construction Material Supplies</title>
        <meta name="description" content="Showcasing the prestigious clients and partners who trust MAHFUT for their construction material needs, including industry leaders like Saudi Aramco, SABIC, and more." />
        <meta property="og:title" content="Our Valued Clients - MAHFUT Construction" />
        <meta property="og:description" content="We are proud to partner with leading companies in the construction and industrial sectors. See who trusts MAHFUT." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img  
          className="w-full h-full object-cover"
          alt="Handshake between construction partners"
         src="https://images.unsplash.com/photo-1543269865-cbf427effbad" />
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Valued Clients</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Building Strong Partnerships with Industry Leaders
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Intro */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
              Trusted by the Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to have supplied premium construction materials to a diverse portfolio of esteemed clients, contributing to landmark projects across Saudi Arabia and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center h-32 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <img 
                  alt={client.logoAlt}
                  className="max-h-16 max-w-full object-contain"
                 src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is measured by the satisfaction of our partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4 text-[#E46A1E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-[#142849]">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding bg-[#142849] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Become Our Partner
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join a growing list of industry leaders who trust MAHFUT for reliability, quality, and excellence. Let's build the future together.
              </p>
              <button 
                onClick={() => toast({
                  title: "🚧 Partnership Inquiry",
                  description: "We will get back to you soon!"
                })}
                className="btn-primary bg-[#E46A1E] hover:bg-[#d55a1a] inline-flex items-center gap-2"
              >
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="bg-white/10 p-8 rounded-2xl text-center">
                <Users className="w-12 h-12 text-[#E46A1E] mx-auto mb-4" />
                <h3 className="text-3xl font-bold">500+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl text-center">
                <Award className="w-12 h-12 text-[#E46A1E] mx-auto mb-4" />
                <h3 className="text-3xl font-bold">98%</h3>
                <p>Client Retention Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Clients;