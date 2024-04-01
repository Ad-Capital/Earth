'use client';

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    Partnerships: {
      title: "We're actively seeking collaborations and partnerships with individuals and organizations who share our passion for the arts.",
      content:
        "Whether you're an artist, gallery owner, technology provider, or industry enthusiast, we invite you to Reach out to us today to explore partnership opportunities and be part of our journey towards innovation and excellence.",
    },
    Marketplace: {
      title: "Coming soon",
      content:
        "Stay tuned for our upcoming launch, where you'll have access to a curated selection of artworks from talented artists around the globe.",
    },
    Community: {
      title: "Experience Community Spirit",
      content:
        "Experience the warmth and camaraderie of our tight-knit community. From virtual exhibitions to collaborative projects, there's always something exciting happening at Earth",
    },
    Events: {
      title: "Artistry in Motion: Events & Exhibitions",
      content:
        "Engage with upcoming exhibitions, workshops, and artist talks. Stay in the loop with all our artistic gatherings.",
    },
    Blog: {
      title: "Art & Culture Chronicles",
      content:
        "Explore our latest insights, stories, and updates in the world of art and culture. Dive into thought-provoking articles, behind-the-scenes features, and much more. Stay informed and inspired by visiting our blog regularly.",
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
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-center w-full pb-8">
        <button onClick={handlePrev} className="border-[2px] rounded-full px-4 py-4 mr-4">
          <FaArrowLeft />
        </button>
        <h4 className="text-[#ffffff] font-serif bg-[#7D2AE7] rounded-full text-2xl sm:text-4xl px-6 py-4">{activeSection}</h4>
        <button onClick={handleNext} className="border-[2px] rounded-full px-4 py-4 ml-4">
          <FaArrowRight />
        </button>
      </div>
      <TextBox title={activeContent.title} content={activeContent.content} />
    </div>
  );
};

export default MobileLayout;
