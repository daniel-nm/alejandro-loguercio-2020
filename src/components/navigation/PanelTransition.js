import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

// Motion
import { transition} from "../../animation/header";

// Styles
import { PanelBg } from "../../styles/components/headerStyles";

const PanelTransition = () => {
  
  // Used for background color change
  const [panelComplete, setPanelComlete] = useState(false);

  // Shoud only exit animation when closing the menu but not changing route
  const [exitAnimation, setExitAnimation] = useState({});

  // Get browser location
  const location = useLocation();

  // If location changes, set exit animation to empty
  useEffect(() => {
    setExitAnimation({})
  }, [location]);

  // Set animation when component mounts
  useEffect(() => {
    setExitAnimation({
      width: [0, window.innerWidth, 0], 
      left: [null, 0, 0]
    })
  }, []);
  
  return (
    <>
      <PanelBg 
        style={{background: panelComplete ? "#ccced6" : "#2266a6" }}
        initial={{width: 0}}
        animate={{width: [0, window.innerWidth, 0], right: [null, 0, 0] }}
        exit={exitAnimation}
        transition={{...transition, duration: 1.75, times: [0, 0.5, 1]}}
        onAnimationComplete={() => setPanelComlete(!panelComplete)}
      />
    </>
  )
}

export default PanelTransition
