import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0.2 }}
      animate={{
        x: animate ? 1200 : 0,
        opacity: animate ? 1 : 0.2,
        rotate: animate ? 360 : 0,
        scale: animate ? 1.1 : 1,
      }}
      transition={{ type: "spring", stiffness: 60 }}
      onClick={() => setAnimate(!animate)}
    ></motion.div>
  );
};

export default Box1;
