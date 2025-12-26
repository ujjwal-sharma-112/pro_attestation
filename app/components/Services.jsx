'use client'
import { motion } from 'framer-motion'
import Link from 'next/link';

// serviceCardsData remains the same as you provided
const serviceCardsData = [
    {
      title: "MEA Attestation",
      description:
        "Get your documents authenticated by the Ministry of External Affairs (MEA), India — a mandatory step for international use of educational, personal, or commercial certificates.",
      image: "https://i.pinimg.com/736x/a0/fd/1c/a0fd1c102e40829ec94f8ece5e077343.jpg",
      link: "services/mea-attestation"
    },
    {
      title: "Apostille Services",
      description:
        "We offer fast and reliable apostille services for countries under the Hague Convention. Valid for travel, study, work, or business abroad without embassy visits.",
      image: "https://i.pinimg.com/474x/52/af/be/52afbe09cbdcda34aa23d616b9a032db.jpg",
      link: "services/apostille-attestation-delhi"
    },
    {
      title: "Embassy Attestation",
      description:
        "Complete attestation support from the concerned embassies of countries like UAE, Saudi Arabia, Qatar, Kuwait & more — essential for visa and employment processing.",
      image: "https://i.pinimg.com/736x/83/6d/d3/836dd3b9965ef275822164a77e183b65.jpg",
      link: "services/embassy-attestation"
    },
    {
      title: "Dubai Visa Services",
      description: "Streamlined visa processing for Dubai and UAE. Tourist, work, and business visas with expert guidance for a hassle-free experience.",
      image: "https://i.pinimg.com/736x/7d/02/f6/7d02f6f59344a9dc3581958eb4c53612.jpg", 
      link: "services/dubai-visa-services" 
    },
    {
      title: "HRD / Home Department Attestation",
      description:
        "State-level attestation made simple. We assist with HRD (Human Resource Department) or Home Department authentication of your documents before MEA/legalization.",
      image: "https://i.pinimg.com/474x/1f/42/fc/1f42fc28efecaee5c63be08a301cf993.jpg",
      link: "services/hrd-home-attestation"
    }
  ];

const ServiceCard = ({ service, index, baseDelay = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <motion.div
      key={service.link} 
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow overflow-hidden flex flex-col" // Reduced padding from p-8 to p-6
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index * 0.1) + baseDelay }}
    >
      <Link href={service.link} className="flex flex-col flex-grow">
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden"> {/* Reduced height from h-48 to h-40, mb-6 to mb-4 */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-3 flex-grow"> {/* Reduced space-y-4 to space-y-3 */}
          <h3 className="text-2xl font-bold text-[#222222]">{service.title}</h3> {/* Reduced text-3xl to text-2xl */}
          <p className="text-[#555555] text-sm flex-grow">{service.description}</p> {/* Added text-sm for potentially smaller description text */}
          <motion.div 
            className="mt-auto text-[#FF6A00] font-medium cursor-pointer hover:text-[#E63C00] transition-colors flex items-center pt-3" // Reduced pt-4 to pt-3
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn more
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const firstRowServices = serviceCardsData.slice(0, 3);
  const secondRowServices = serviceCardsData.slice(3);

  return (
    <section className="w-full bg-[#FFF7F0] py-16 px-4 md:px-8 lg:px-16"> {/* Adjusted overall padding for consistency */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12" // Reduced margin-bottom
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-lg font-semibold text-[#FF6A00] pb-1 border-b-2 border-[#FF6A00]">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mt-3"> {/* Reduced mt-4 */}
            Comprehensive Document Attestation Services
          </h2>
          <p className="text-[#555555] mt-3 max-w-2xl mx-auto"> {/* Reduced mt-4 */}
            We provide end-to-end attestation services for all types of documents with guaranteed acceptance worldwide
          </p>
        </motion.div>

        <div className="lg:px-8 xl:px-16"> {/* Adjusted horizontal padding for card area */}
          {/* First row of services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap from gap-8 to gap-6 */}
            {firstRowServices.map((service, index) => (
              <ServiceCard service={service} index={index} key={service.link} />
            ))}
          </div>

          {/* Second row of services - centered */}
          {secondRowServices.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto"> {/* Reduced mt-8 and gap-8 to mt-6 and gap-6 */}
              {secondRowServices.map((service, index) => (
                <ServiceCard 
                  service={service} 
                  index={index} 
                  baseDelay={firstRowServices.length * 0.1} 
                  key={service.link} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services;