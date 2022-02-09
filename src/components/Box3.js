import React from "react";
import { motion } from "framer-motion";
const Box3 = () => {
  return (
    <motion.div
      className="box"
      drag
      whileDrag={{ backgroundColor: "blue" }}
      dragConstraints={{
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
      }}
    />
  );
};

export default Box3;
