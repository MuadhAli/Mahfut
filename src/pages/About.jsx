import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Target, 
  Eye, 
  CheckCircle,
  Calendar,
  TrendingUp
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const About = () => {
  const milestones = [
    { year: "2000", title: "Company Founded", description: "MAHFUT established as a small construction materials supplier" },
    { year: "2005", title: "First Major Contract", description: "Secured first multi-million riyal government project" },
    { year: "2010", title: "Equipment Division", description: "Launched equipment rental division with modern machinery" },
    { year: "2015", title: "ISO Certification", description: "Achieved ISO 9001:2015 quality management certification" },
    { year: "2020", title: "Digital Transformation", description: "Implemented advanced inventory and project management systems" },
    { year: "2024", title: "Market Leadership", description: "Recognized as leading construction materials supplier in Saudi Arabia" }
  ];

  const team = [
    {
      name: "Ahmed Al-Mahfut",
      position: "Chief Executive Officer",
      description: "25+ years of construction industry experience",
      image: "Professional CEO portrait in construction setting"
    },
    {
      name: "Sarah Al-Rashid",
      position: "Operations Director",
      description: "Expert in supply chain and logistics management",
      image: "Professional operations director in warehouse setting"
    },
    {
      name: "Mohammed Al-Qahtani",
      position: "Technical Director",
      description: "Engineering specialist with project consultation expertise",
      image: "Professional technical director reviewing construction plans"
    },
    {
      name: "Fatima Al-Zahra",
      position: "Quality Assurance Manager",
      description: "Certified quality control and materials testing specialist",
      image: "Professional quality manager in testing laboratory"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from material quality to customer service."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with clients, suppliers, and communities through trust and reliability."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Conducting business with honesty, transparency, and ethical practices in all our operations."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing new technologies and methods to improve efficiency and deliver better solutions."
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>About MAHFUT Construction - Leading Building Materials Supplier Since 2000</title>
        <meta name="description" content="Learn about MAHFUT Construction Material Supplies - 25+ years of excellence in providing premium construction materials and equipment rental services across Saudi Arabia." />
        <meta property="og:title" content="About MAHFUT Construction - Industry Leaders Since 2000" />
        <meta property="og:description" content="Discover our journey from a small supplier to Saudi Arabia's leading construction materials company, serving 500+ satisfied clients." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img  
          className="w-full h-full object-cover"
          alt="MAHFUT construction company headquarters and facilities"
         src="https://images.unsplash.com/photo-1684305810488-4604a9337789" />
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">About MAHFUT</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Building Excellence Through Trust, Quality, and Innovation Since 2000
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2000 with a vision to transform the construction materials industry in Saudi Arabia, MAHFUT began as a small family business with big dreams and unwavering commitment to quality.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past 25 years, we have grown from a local supplier to a regional leader, serving over 500 satisfied clients and completing more than 1,000 successful projects across the Kingdom.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, MAHFUT stands as a testament to the power of dedication, innovation, and customer-first approach, continuing to set new standards in construction materials supply and equipment rental services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E46A1E] mb-2">50+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E46A1E] mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
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
                alt="Historical photo of MAHFUT's first construction materials warehouse"
               src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#142849] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#142849] mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide premium construction materials and equipment rental services that exceed customer expectations, 
                while maintaining the highest standards of quality, safety, and environmental responsibility. We are committed 
                to being the trusted partner that helps build Saudi Arabia's future infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E46A1E] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#142849] mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the leading construction materials and equipment supplier in the Middle East, recognized for innovation, 
                sustainability, and exceptional customer service. We envision a future where every construction project we 
                support contributes to building stronger, more sustainable communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      {/* <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped MAHFUT into the industry leader we are today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#E46A1E] opacity-20 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center md:justify-between"
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-[#E46A1E]" />
                        <span className="text-[#E46A1E] font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#142849] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-2/12 flex justify-center my-4 md:my-0 md:order-2">
                    <div className="w-4 h-4 bg-[#E46A1E] rounded-full relative z-10"></div>
                  </div>
                   <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Values */}
      <section className="section-padding bg-[#142849] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#E46A1E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#142849] mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive MAHFUT's success and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <img  
                  className="w-full h-64 object-cover"
                  alt={member.image}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#142849] mb-2">{member.name}</h3>
                  <p className="text-[#E46A1E] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </PageTransition>
  );
};

export default About;