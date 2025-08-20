import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';

import HeroSection from '@/components/industries/HeroSection';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import CapabilitiesSection from '@/components/industries/CapabilitiesSection';
import IndustryStats from '@/components/industries/IndustryStats';
import CaseStudyPreview from '@/components/industries/CaseStudyPreview';
import CTASection from '@/components/industries/CTASection';

import { industriesData, capabilitiesData, industryStatsData, caseStudyData } from '@/components/industries/data';

const Industries = () => {
  const { toast } = useToast();

  const handleInquiry = () => {
    toast({
      title: "🚧 Industry Consultation",
      description: "Page is under construction"
    });
  };
  
  return (
    <PageTransition>
      <Helmet>
        <title>Industries Served - MAHFUT Construction Materials for All Sectors</title>
        <meta name="description" content="MAHFUT serves diverse industries including commercial, residential, industrial, healthcare, education, and infrastructure projects across Saudi Arabia with specialized construction materials." />
        <meta property="og:title" content="Industries Served by MAHFUT - Specialized Construction Solutions" />
        <meta property="og:description" content="Comprehensive construction material solutions for commercial, residential, industrial, and infrastructure projects across multiple industries." />
      </Helmet>

      <HeroSection />

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
              Comprehensive Industry Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential developments to complex industrial facilities, MAHFUT provides specialized construction materials and expertise for every industry sector.
            </p>
          </motion.div>
          <IndustriesGrid industries={industriesData} onInquiry={handleInquiry} />
        </div>
      </section>

      <CapabilitiesSection capabilities={capabilitiesData} />

      <IndustryStats stats={industryStatsData} />

      <CaseStudyPreview caseStudy={caseStudyData} onInquiry={handleInquiry} />
      
      <CTASection onInquiry={handleInquiry} />

    </PageTransition>
  );
};

export default Industries;