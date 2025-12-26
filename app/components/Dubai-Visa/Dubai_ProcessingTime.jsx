'use client';
import React, { useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';

const Dubai_ProcessingTime = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, []);

  const processingTimes = [
    {
      type: "Tourist Visa",
      time: "1–3 working days",
      details: "Perfect for short visits, tourism, and family visits"
    },
    {
      type: "Business Visa",
      time: "3–5 working days",
      details: "For business meetings, conferences, and corporate travel"
    },
    {
      type: "Job Seeking Visa",
      time: "5–7 working days",
      details: "Required documentation for job searching in the UAE"
    },
    {
      type: "Express e-Visa",
      time: "Within 24–48 hours",
      details: "Urgent processing for time-sensitive travel needs"
    },
  ];

  return (
    <div
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start mb-8"
        >
          <div className="flex">
            <div className="w-12 h-12 rounded-full px-4 md:px-0 bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
              <Clock className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl pt-2 font-bold text-gray-900 relative">
              Dubai Visa Processing Time
              <span className="absolute -bottom-1 left-0 h-1 w-24 bg-[#FF6A00] rounded-full"></span>
            </h2>
          </div>
          <p className="py-4 text-gray-800 lg:pl-16">Estimated timeframes for different visa categories:</p>
        </motion.div>

        <div className="relative px-8 rounded-2xl">
          {/* Process steps with connecting line */}
          <div className="hidden md:block absolute left-[55px] top-10 bottom-16 w-1 bg-[#FF6A00]/20 z-0"></div>

          <div className="space-y-8 relative z-10">
            {processingTimes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg shadow-md z-10 transition-transform hover:scale-110 duration-300">
                  {index + 1}
                </div>
                <div className="ml-6 bg-white p-5 rounded-lg shadow-md flex-grow border border-[#FF6A00]/10 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="font-semibold text-lg text-gray-900">{item.type}</h3>
                    <div className="mt-2 md:mt-0 flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.time}
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3 flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A00] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item.details}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dubai_ProcessingTime;
