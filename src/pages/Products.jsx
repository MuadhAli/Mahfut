import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Building, 
  Truck, 
  Shield, 
  Wrench, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('materials');
  const { toast } = useToast();

  const handleInquiry = () => {
    window.location.href = "/contact";
  };

  const categories = [
    { id: 'materials', name: 'Construction Materials', icon: Building },
    { id: 'equipment', name: 'Equipment Rental', icon: Truck },
    { id: 'consultation', name: 'Consultation Services', icon: Shield }
  ];

  const products = {
    materials: [
      {
        name: "Premium Cement",
        description: "High-grade Portland cement meeting international standards",
        features: ["Grade 42.5 & 52.5", "Bulk & bagged options", "Quality certified"],
        image: "High-quality cement bags stacked in warehouse"
      },
      {
        name: "Steel Reinforcement",
        description: "Deformed steel bars and mesh for structural reinforcement",
        features: ["Various grades available", "Cut to length service", "Corrosion resistant"],
        image: "Steel reinforcement bars and mesh in construction yard"
      },
      {
        name: "Aggregates",
        description: "Crushed stone, sand, and gravel for concrete production",
        features: ["Multiple sizes", "Washed & graded", "Consistent quality"],
        image: "Different types of construction aggregates and sand"
      },
      {
        name: "Ready-Mix Concrete",
        description: "Fresh concrete delivered to your construction site",
        features: ["Various strength grades", "Timely delivery", "Quality control"],
        image: "Ready-mix concrete truck delivering to construction site"
      },
      {
        name: "Blocks & Bricks",
        description: "Concrete blocks, clay bricks, and specialized masonry units",
        features: ["Standard & custom sizes", "Thermal insulation", "Durable materials"],
        image: "Various types of construction blocks and bricks"
      },
      {
        name: "Insulation Materials",
        description: "Thermal and acoustic insulation solutions",
        features: ["Energy efficient", "Fire resistant", "Easy installation"],
        image: "Modern insulation materials for construction"
      }
    ],
    equipment: [
      {
        name: "Excavators",
        description: "Heavy-duty excavators for earthmoving and demolition",
        features: ["20-40 ton capacity", "Latest models", "Operator included"],
        image: "Modern excavator working on construction site"
      },
      {
        name: "Cranes",
        description: "Tower and mobile cranes for lifting operations",
        features: ["Various capacities", "Certified operators", "Safety equipment"],
        image: "Construction crane lifting materials on building site"
      },
      {
        name: "Concrete Mixers",
        description: "Mobile concrete mixers and pumps",
        features: ["Self-loading mixers", "Concrete pumps", "Transit mixers"],
        image: "Concrete mixer truck and pumping equipment"
      },
      {
        name: "Compactors",
        description: "Soil and asphalt compaction equipment",
        features: ["Vibratory rollers", "Plate compactors", "Pneumatic rollers"],
        image: "Road compactor working on asphalt surface"
      },
      {
        name: "Generators",
        description: "Diesel generators for construction site power",
        features: ["20-500 KVA", "Fuel efficient", "Weather protected"],
        image: "Industrial diesel generator for construction sites"
      },
      {
        name: "Scaffolding Systems",
        description: "Complete scaffolding solutions for construction",
        features: ["Modular systems", "Safety compliant", "Quick assembly"],
        image: "Professional scaffolding system on building construction"
      }
    ],
    consultation: [
      {
        name: "Material Testing",
        description: "Comprehensive testing services for construction materials",
        features: ["Concrete testing", "Soil analysis", "Steel testing"],
        image: "Construction materials testing laboratory"
      },
      {
        name: "Quality Assurance",
        description: "On-site quality control and inspection services",
        features: ["Regular inspections", "Compliance reports", "Expert advice"],
        image: "Quality inspector checking construction materials"
      },
      {
        name: "Project Planning",
        description: "Construction project planning and material estimation",
        features: ["Material calculations", "Timeline planning", "Cost optimization"],
        image: "Construction engineers planning project with blueprints"
      },
      {
        name: "Technical Support",
        description: "Expert technical guidance for construction projects",
        features: ["24/7 support", "Problem solving", "Best practices"],
        image: "Technical expert providing construction consultation"
      },
      {
        name: "Logistics Planning",
        description: "Efficient material delivery and site logistics",
        features: ["Delivery scheduling", "Site coordination", "Inventory management"],
        image: "Construction site logistics and material delivery planning"
      },
      {
        name: "Safety Consultation",
        description: "Construction site safety planning and compliance",
        features: ["Safety audits", "Training programs", "Compliance guidance"],
        image: "Safety consultant reviewing construction site procedures"
      }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Construction Materials & Equipment Rental - MAHFUT Premium Products & Services</title>
        <meta name="description" content="Explore MAHFUT's comprehensive range of premium construction materials, equipment rental, and consultation services. Quality cement, steel, aggregates, and modern construction equipment." />
        <meta property="og:title" content="Premium Construction Materials & Equipment - MAHFUT Products" />
        <meta property="og:description" content="High-quality construction materials, modern equipment rental, and expert consultation services for your construction projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img  
          className="w-full h-full object-cover"
          alt="MAHFUT construction materials warehouse with various products"
         src="https://images.unsplash.com/photo-1469289759076-d1484757abc3" />
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Products & Services</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Premium Construction Materials, Equipment Rental & Expert Consultation Services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#E46A1E] text-white shadow-lg'
                    : 'bg-gray-100 text-[#142849] hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeCategory === 'materials' && "Premium quality construction materials from trusted suppliers, meeting international standards and specifications."}
              {activeCategory === 'equipment' && "Modern construction equipment and machinery rental with comprehensive maintenance and technical support."}
              {activeCategory === 'consultation' && "Expert consultation services to ensure your construction projects meet the highest standards of quality and safety."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[activeCategory].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <img  
                  className="w-full h-48 object-cover"
                  alt={product.image}
                 src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#142849] mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E46A1E] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleInquiry}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose MAHFUT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Saudi Arabia's most trusted construction materials supplier
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "All materials meet international standards with quality certificates"
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                description: "On-time delivery with our extensive logistics network"
              },
              {
                icon: Wrench,
                title: "Technical Support",
                description: "Expert technical guidance and 24/7 customer support"
              },
              {
                icon: CheckCircle,
                title: "Competitive Pricing",
                description: "Best value for money with flexible payment options"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#142849] to-[#E46A1E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#142849] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#142849] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact our experts today for personalized pricing and product recommendations for your specific project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleInquiry}
                className="btn-primary bg-[#E46A1E] hover:bg-[#d55a1a] inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Request Quote
              </button>
              <button 
                onClick={handleInquiry}
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

export default Products;