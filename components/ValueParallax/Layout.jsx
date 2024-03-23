'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextBox from "./TextBox";
import MobileLayout from "./MobileLayout";

const items = [
  "Community",
  "Marketplace",
  "Partnerships",
  "Events",
  "Blog",
];

const DrumComponent = () => {
  const [centerIndex, setCenterIndex] = useState(2);
  const [activeSection, setActiveSection] = useState(items[centerIndex]);

  const handleClick = (index) => {
    let offset = index - centerIndex;
    if (Math.abs(offset) > items.length / 2) {
      offset -= Math.sign(offset) * items.length;
    }
    const newIndex = (centerIndex + offset + items.length) % items.length;
    setCenterIndex(newIndex);
    setActiveSection(items[newIndex]);
  };

  const generateItems = () => {
    return items.map((item, index) => {
      let position = index - centerIndex;
      if (position < -Math.floor(items.length / 2)) {
        position += items.length;
      } else if (position > Math.floor(items.length / 2)) {
        position -= items.length;
      }

      const marginBottom = index < items.length - 1 ? "26px" : "0";

      return (
        <motion.div
          key={item}
          initial={{ y: 70 * position, opacity: 0 }}
          animate={{ y: 70 * position, opacity: 1 }}
          exit={{ y: 70 * position, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            position: "absolute",
            height: "102px",
            width: "346px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "9999px",
            fontWeight: position === 0 ? "700" : "700",
            backgroundColor: position === 0 ? "#7D2AE7" : "transparent",
            color: position === 0 ? "white" : "#b3b3b3",
            fontSize: position === 0 ? "48px" : "40px",
            fontFamily: position === 0 ? "'Dancing Script'": "",
            marginBottom: marginBottom,
          }}
          onClick={() => handleClick(index)}
        >
          {item}
        </motion.div>
      );
    });
  };

  return (
    <section>
      <div className="desktopLayout">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="relative flex flex-col items-center pt-[150px]"
            style={{ width: "500px" }}
          >
            <AnimatePresence>{generateItems()}</AnimatePresence>
          </div>
          <div>
            <TextBox activeSection={activeSection} />
          </div>
        </div>
      </div>
      <div className="mobileLayout"><MobileLayout /></div>
      
    </section>

  );
};

export default DrumComponent;
