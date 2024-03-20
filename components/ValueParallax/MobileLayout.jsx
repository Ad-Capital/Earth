'use client';

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TextBox from './TextBox';

const MobileLayout = () => {
    const TextBox = ({ title, content }) => {
        return (
          <div className="Mobiletext-box">
            <h2 className="text-lg md:text-xl font-semibold text-[24px] px-10 pt-10 text-[#1E0734]">{title}</h2>
            <p className="text-lg md:text-xl px-10 pb-10 pt-6 text-[#7668FD]">{content}</p>
          </div>
        );
      };
      
  const contentData = {
    partnerships: {
      title: "We're Open to Partnerships & Collaborations",
      content:
        "To discuss partnership and discover how we can elevate the art experience together, please reach out to our team in the contact section. We look forward to collaborating with you and transforming the art world as we know it.",
    },
    marketplace: {
      title: "Coming soon",
      content:
        "Our platform provides a diverse range of NFTs for purchase, enabling artists to strategically organize and market their digital collections.",
    },
    community: {
      title: "Discover the Earth Community: A Revolution in the Art World",
      content:
        "Our community shines a spotlight on emerging and established artists alike, ensuring their voices are heard and their creations find the perfect audience.",
    },
  };

  const sections = Object.keys(contentData);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  const activeSection = sections[activeIndex];
  const activeContent = contentData[activeSection];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-full pb-8">
        <button onClick={handlePrev} className="border-[2px] rounded-full px-4 py-4 mr-4">
          <FaArrowLeft />
        </button>
        <h4 className="text-[#ffffff] bg-[#7D2AE7] rounded-full text-3xl md:text-4xl px-6 py-4">{activeSection}</h4>
        <button onClick={handleNext} className="border-[2px] rounded-full px-4 py-4 ml-4">
          <FaArrowRight />
        </button>
      </div>
      <TextBox title={activeContent.title} content={activeContent.content} />
    </div>
  );
};

export default MobileLayout;
