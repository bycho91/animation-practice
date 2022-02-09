import React from "react";
import { motion } from "framer-motion";

const Box4 = () => {
  const boxVariant = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
    hover: {
      opacity: 0.2,
      backgroundColor: "red",
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div
      className="box"
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {[1, 2, 3].map((box) => (
        <motion.div className="boxItem" variants={itemVariant} />
      ))}
    </motion.div>
  );
};

export default Box4;
