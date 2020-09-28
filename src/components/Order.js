import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4, // Higher mass moves slower
      damping: 8, // Damping force: 0 -> damps indefintely
      when: "beforeChildren", // Transition : ochestration transition happens before children's transition
      staggerChildren: 0.4, // Stagger each children's transition by 0.4s
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      {/* Aniamte out, AnimatePresence and exit prop */}
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000, opacity: 0 }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
