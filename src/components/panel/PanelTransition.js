import React from 'react';
import { motion } from "framer-motion";

// Motion
import { transition } from '../../animation/home';

const PanelTransition = () => {
  return (
    <motion.div
      style={{
          height: "100%",
          position: "fixed",
          top: 0,
          right: 0,
          background: "#ccced6"
        }}
        exit={{width: [0, window.innerWidth, 0], left: [null, 0, 0] }}
        transition={{...transition, duration: 2.25, times: [0, 0.5, 1]}}
    >
      
    </motion.div>
  )
}

export default PanelTransition
