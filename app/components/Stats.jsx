"use client"
import { useState, useEffect, useRef } from 'react';
import { FileText, Clock, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

function CountUp({ end, duration = 1000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        setCount(Math.floor((progress / duration) * end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    if (isInView) {
      animationFrame = requestAnimationFrame(updateCount);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);
  
  return (
    <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
  );
}

// StatCard component
function StatCard({ icon: Icon, count, countPrefix, countSuffix, title, description }) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-4  justify-center text-center">
        <div className="text-[#FF6A00] flex justify-center text-center">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-4xl font-bold  text-[#222222]">
          <CountUp end={count} prefix={countPrefix} suffix={countSuffix} />
          {!countSuffix && <span className="text-[#FF6A00]">+</span>}
        </h3>
        
        <p className="font-semibold text-xl text-[#222222]">{title}</p>
        
        <p className="text-[#555555] mt-2">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const statsData = [
    {
      icon: FileText,
      count: 150000,
      title: "Documents Attested",
      description: "Helping clients from across India for education, work, and migration abroad."
    },
    {
      icon: Clock,
      count: 12,
      title: "Years of Industry Experience",
      description: "Proven expertise in document attestation, apostille & embassy legalization."
    },
    {
      icon: CheckCircle,
      count: 100,
      countSuffix: "%",
      title: "Approval Rate",
      description: "We're committed to delivering smooth and timely services with full transparency."
    }
  ];

  return (
    <div className="w-full bg-[#FFF7F0] py-20 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-lg font-semibold text-[#FF6A00] pb-1 border-b-2 border-[#FF6A00]">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mt-4">
            Trusted by Thousands Across India
          </h2>
          <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
            With decades of experience and thousands of successful cases, we've established ourselves as leaders in document attestation services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <StatCard 
                icon={stat.icon}
                count={stat.count}
                countPrefix={stat.countPrefix || ''}
                countSuffix={stat.countSuffix || ''}
                title={stat.title}
                description={stat.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}