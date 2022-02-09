import React from "react";
import { motion } from "framer-motion";
const Box2 = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0.2 }}
      whileHover={{ opacity: 0.7, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
};

export default Box2;
