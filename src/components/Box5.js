import React, { useState } from "react";
import { motion } from "framer-motion";

const Box5 = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <motion.div
      className="box"
      animate={{
        scale: animate ? [1, 1.4, 1.4, 1, 1] : 1,
        borderRadius: animate ? ["20%", "20%", "50%", "50%", "20%"] : 0,
        rotate: animate ? [0, 0, 270, 270, 0] : 0,
      }}
      transition={
        animate
          ? { duration: 2, repeat: "Infinity", repeatType: "reverse" }
          : {}
      }
      onClick={() => setAnimate(!animate)}
    ></motion.div>
  );
};

export default Box5;
