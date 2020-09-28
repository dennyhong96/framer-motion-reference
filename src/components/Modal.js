import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const buttonVariants = {
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], // keyframe array
    scale: 1.1,
    textShadow: "0 0 8px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      // yoyo: 10, // yoyo transition - 10 repeated keyframes to apply
      yoyo: Infinity, // keyframe applied indefinitely
      duration: 0.3,
    },
  },
};

const modalVariants = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
        >
          <motion.div variants={modalVariants} className="modal">
            <p>Wish to make another pizza?</p>
            <Link to="/">
              <motion.button variants={buttonVariants} whileHover="hover">
                Make another one
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
