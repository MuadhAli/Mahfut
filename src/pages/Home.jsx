import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Truck,
  Building,
  Shield,
  Clock,
  Phone
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const heroSlides = [
    {
      title: "Premium Construction Materials",
      subtitle: "Building Excellence Since 2000",
      description: "Your trusted partner for high-quality construction materials and equipment rental services across Saudi Arabia.",
      image: "Modern construction site with cranes and building materials"
    },
    {
      title: "Professional Equipment Rental",
      subtitle: "State-of-the-Art Machinery",
      description: "Access to the latest construction equipment with comprehensive maintenance and technical support.",
      image: "Heavy construction equipment and machinery on site"
    },
    {
      title: "Expert Project Consultation",
      subtitle: "Engineering Excellence",
      description: "Professional consultation services to ensure your construction projects meet the highest standards.",
      image: "Construction engineers reviewing blueprints on site"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    toast({
      title: "🚧 Contact Form",
      description: "Thank you for contacting us! We will get back to you soon."
    });
  };

  const services = [
    {
      icon: Building,
      title: "Construction Materials",
      description: "Premium quality cement, steel, aggregates, and building materials from trusted suppliers.",
      features: ["High-grade materials", "Quality certification", "Bulk supply options"]
    },
    {
      icon: Truck,
      title: "Equipment Rental",
      description: "Modern construction equipment and machinery rental with maintenance support.",
      features: ["Latest equipment", "Maintenance included", "Flexible rental terms"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive quality control and testing services for all materials and projects.",
      features: ["Material testing", "Quality certificates", "Compliance assurance"]
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Satisfied Clients" },
    { icon: Building, number: "1000+", label: "Projects Completed" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Support Available" }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>MAHFUT Construction Material Supplies - Premium Building Materials & Equipment Rental</title>
        <meta name="description" content="Leading supplier of premium construction materials and equipment rental services in Saudi Arabia. Quality materials, professional service, and expert consultation for your construction projects." />
        <meta property="og:title" content="MAHFUT Construction Material Supplies - Premium Building Materials" />
        <meta property="og:description" content="Your trusted partner for high-quality construction materials and equipment rental services across Saudi Arabia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover"
            alt={heroSlides[currentSlide].image}
           src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.p 
                  className="text-[#E46A1E] text-lg md:text-xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={handleCTAClick}
                    className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-[#142849] inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: +966 539510019
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#E46A1E] w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#142849]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#E46A1E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding construction-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions designed to meet your project requirements with excellence and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#142849] to-[#E46A1E] rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#142849] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#E46A1E]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-[#E46A1E] font-semibold mt-6 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
                Building Trust Through Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                For over 25 years, MAHFUT has been the cornerstone of construction excellence in Saudi Arabia, providing premium materials and unmatched service quality.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "ISO 9001:2015 certified quality management",
                  "Extensive network of trusted suppliers",
                  "Expert technical consultation team",
                  "24/7 customer support and service"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#E46A1E]" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img  
                className="rounded-2xl shadow-2xl w-full"
                alt="MAHFUT construction team working on a major project"
               src="https://images.unsplash.com/photo-1572891458752-1fde7b8074b6" />
              <div className="absolute -bottom-6 -right-6 bg-[#E46A1E] text-white p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-sm">Customer Rating</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#142849] to-[#1a3154] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get in touch with our experts today for a free consultation and personalized quote for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-[#E46A1E] hover:bg-[#d55a1a] inline-flex items-center gap-2">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <button 
                onClick={handleCTAClick}
                className="btn-secondary border-white text-white hover:bg-white hover:text-[#142849] inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: +966 539510019
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;