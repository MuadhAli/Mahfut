import React from 'react';
import { Building, Home, Factory, Zap, Waves, Plane, Hotel as Hospital, GraduationCap, ShoppingBag, CheckCircle, Truck } from 'lucide-react';

export const industriesData = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Office buildings, shopping centers, hotels, and mixed-use developments",
    services: [
      "High-rise construction materials",
      "Facade and cladding systems",
      "Fire-resistant materials",
      "Energy-efficient solutions"
    ],
    projects: "200+ Projects",
    image: "Modern commercial building construction with glass facade"
  },
  {
    icon: Home,
    title: "Residential Development",
    description: "Luxury villas, apartment complexes, gated communities, and affordable housing",
    services: [
      "Premium finishing materials",
      "Insulation and waterproofing",
      "Sustainable building materials",
      "Smart home infrastructure"
    ],
    projects: "300+ Projects",
    image: "Luxury residential development with modern architecture"
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description: "Manufacturing plants, warehouses, logistics centers, and processing facilities",
    services: [
      "Heavy-duty concrete solutions",
      "Industrial flooring systems",
      "Specialized coatings",
      "Safety and compliance materials"
    ],
    projects: "150+ Projects",
    image: "Large industrial manufacturing facility construction"
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Power plants, renewable energy facilities, and utility infrastructure",
    services: [
      "High-temperature resistant materials",
      "Electrical infrastructure materials",
      "Specialized concrete mixes",
      "Environmental protection systems"
    ],
    projects: "80+ Projects",
    image: "Solar power plant construction with specialized materials"
  },
  {
    icon: Waves,
    title: "Water & Infrastructure",
    description: "Water treatment plants, desalination facilities, and municipal infrastructure",
    services: [
      "Corrosion-resistant materials",
      "Water-tight concrete systems",
      "Chemical-resistant coatings",
      "Specialized piping materials"
    ],
    projects: "120+ Projects",
    image: "Water treatment facility construction with specialized equipment"
  },
  {
    icon: Plane,
    title: "Transportation",
    description: "Airports, seaports, railways, highways, and transportation hubs",
    services: [
      "High-strength pavement materials",
      "Runway and taxiway solutions",
      "Bridge construction materials",
      "Traffic infrastructure systems"
    ],
    projects: "90+ Projects",
    image: "Airport terminal construction with modern materials"
  },
  {
    icon: Hospital,
    title: "Healthcare Facilities",
    description: "Hospitals, clinics, medical centers, and specialized healthcare facilities",
    services: [
      "Antimicrobial materials",
      "Cleanroom construction materials",
      "Radiation shielding solutions",
      "Specialized flooring systems"
    ],
    projects: "60+ Projects",
    image: "Modern hospital construction with specialized medical facilities"
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Universities, schools, research facilities, and training centers",
    services: [
      "Acoustic insulation materials",
      "Durable flooring solutions",
      "Safety-compliant materials",
      "Sustainable construction options"
    ],
    projects: "100+ Projects",
    image: "University campus construction with modern educational facilities"
  },
  {
    icon: ShoppingBag,
    title: "Retail & Entertainment",
    description: "Shopping malls, entertainment complexes, restaurants, and leisure facilities",
    services: [
      "Decorative concrete solutions",
      "High-traffic flooring materials",
      "Acoustic control systems",
      "Fire safety materials"
    ],
    projects: "75+ Projects",
    image: "Modern shopping mall construction with entertainment facilities"
  }
];

export const capabilitiesData = [
  {
    title: "Material Expertise",
    description: "Deep knowledge of industry-specific material requirements and standards",
    icon: CheckCircle
  },
  {
    title: "Custom Solutions",
    description: "Tailored material solutions to meet unique project specifications",
    icon: CheckCircle
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and certification for all industry applications",
    icon: CheckCircle
  },
  {
    title: "Technical Support",
    description: "Expert consultation and on-site technical assistance",
    icon: CheckCircle
  }
];

export const industryStatsData = [
  { number: "9", label: "Industries Served" },
  { number: "1000+", label: "Projects Delivered" },
  { number: "500+", label: "Industry Partners" },
  { number: "25+", label: "Years Experience" }
];

export const caseStudyData = {
  title: "SABIC Industrial Complex - Jubail",
  description: "MAHFUT supplied specialized industrial-grade materials for SABIC's major petrochemical facility, including high-temperature resistant concrete, specialized coatings, and heavy-duty structural materials.",
  stats: [
    "Project Value: SR 300 Million",
    "Specialized Materials: 15,000+ tons",
    "Completion Time: 18 months",
    "Safety Record: Zero incidents"
  ],
  image: "SABIC industrial complex construction with MAHFUT materials"
};

export const ctaData = {
  title: "Partner with Industry Experts",
  description: "Whatever your industry, MAHFUT has the expertise and materials to support your construction projects with excellence.",
  buttons: [
    { text: "Discuss Your Project", icon: Truck },
    { text: "Request Site Visit", icon: CheckCircle, secondary: true }
  ]
};