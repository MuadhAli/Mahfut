import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  User,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contact Form Submission",
      description: "Form Submitted Successfully"
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Makkah Al-Mukarama",
        "St Al Safat Dist.",
        "AL JUBAIL 35514"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main: +966 539510019",
        "Sales: +966 11 234 5679",
        "Emergency: +966 50 123 4567"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@mahfut-sa.com",
        "sales@mahfutconstruction.com",
        "support@mahfutconstruction.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Sunday - Thursday: 7:00 AM - 6:00 PM",
        "Friday: 1:00 PM - 6:00 PM",
        "Saturday: 8:00 AM - 4:00 PM"
      ]
    }
  ];

  const offices = [
    {
      city: "Riyadh",
      address: "Makkah Al-Mukarama St Al Safat Dist. AL JUBAIL 35514 ",
      phone: "+966 539510019",
      manager: "Ahmed Al-Mahfut"
    }
    // {
    //   city: "Jeddah",
    //   address: "456 Business Park, Commercial Zone",
    //   phone: "+966 12 345 6789",
    //   manager: "Sarah Al-Rashid"
    // },
    // {
    //   city: "Dammam",
    //   address: "789 Industrial Road, Eastern Province",
    //   phone: "+966 13 456 7890",
    //   manager: "Mohammed Al-Qahtani"
    // }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Contact MAHFUT Construction - Get Quote & Expert Consultation</title>
        <meta name="description" content="Contact MAHFUT Construction Material Supplies for premium construction materials, equipment rental, and expert consultation. Multiple locations across Saudi Arabia." />
        <meta property="og:title" content="Contact MAHFUT Construction - Expert Construction Material Suppliers" />
        <meta property="og:description" content="Get in touch with MAHFUT for construction materials, equipment rental, and project consultation across Saudi Arabia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img  
          className="w-full h-full object-cover"
          alt="MAHFUT construction office building and customer service center"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Get Expert Consultation and Premium Construction Material Solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#142849] mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our experts will get back to you within 24 hours with a personalized quote and consultation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#142849] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46A1E] focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#142849] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46A1E] focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#142849] mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46A1E] focus:border-transparent"
                        placeholder="+966 XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#142849] mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46A1E] focus:border-transparent"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#142849] mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46A1E] focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Development</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="infrastructure">Infrastructure Project</option>
                    <option value="renovation">Renovation/Refurbishment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#142849] mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46A1E] focus:border-transparent resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific materials needed..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                >
                  <Send className="w-5 h-5" />
                  Send Message & Get Quote
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#142849] mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you with your construction material needs.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E46A1E] rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#142849] mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">24/7 Emergency Support</h3>
                <p className="text-red-700 mb-3">
                  For urgent construction material needs or emergency deliveries:
                </p>
                <p className="text-red-800 font-semibold">+966 50 123 4567</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MAHFUT has strategically located offices across Saudi Arabia to serve you better
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#142849] to-[#E46A1E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#142849] mb-4">{office.city} Office</h3>
                <p className="text-gray-600 mb-4">{office.address}</p>
                <p className="text-[#E46A1E] font-semibold mb-2">{office.phone}</p>
                <p className="text-sm text-gray-500">Manager: {office.manager}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">Interactive Map</h3>
            <p className="text-gray-500">
              Map integration will show all MAHFUT office locations across Saudi Arabia
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;