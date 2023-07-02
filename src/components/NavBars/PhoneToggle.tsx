import "../../styles/components/NavBar.scss";
import { motion } from "framer-motion";

type HamburgerProp = {
  isActive: boolean;
  handleToggleClick: () => void;
};
const PhoneToggle = ({ isActive, handleToggleClick }: HamburgerProp) => {
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
