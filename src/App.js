import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import Box5 from "./components/Box5";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: red;
  margin-bottom: 10rem;
  opacity: 0.2;
`;

const App = () => {
  return (
    <div className="App">
      {/* <Box1 />
      <Box2 />
      <Box3 />
      <Box4 /> */}
      <Box5 />
    </div>
  );
};

export default App;
