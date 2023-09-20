import "../../styles/components/NavBar.scss";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
type HamburgerProp = {
  isActive: boolean;
  handleToggleClick: () => void;
};
const PhoneToggle = ({ isActive, handleToggleClick }: HamburgerProp) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <motion.div className={`toggle_button_box`}>
        {" "}
        <motion.div className="toggle-button" onClick={handleToggleClick}>
          <motion.div
            className="bar"
            animate={{ opacity: isActive ? 0 : 1 }}
          ></motion.div>
          <motion.div
            animate={{ rotate: isActive ? 45 : 0, originY: 8 }}
            transition={{ duration: 0.5 }}
            className="bar"
          ></motion.div>
          <motion.div
            animate={{ rotate: isActive ? -45 : 0, originY: -7 }}
            transition={{ duration: 0.5 }}
            className="bar"
          ></motion.div>
        </motion.div>{" "}
        <motion.div
          className="bar1"
          onClick={handleToggleClick}
          animate={{ scale: isActive ? 80 : 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default PhoneToggle;
