import React from "react";
import { motion } from "framer-motion";

const Title = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      className="text-center fw-bold position-relative"
      style={{
        fontSize: "30px",
        color: "var(--dark-color)",
        marginBottom: "30px",
        padding: "10px",
        width: 'fit-content',
        margin: '0 auto 30px'
      }}
    >
      {props.Title}
      <span
        className="d-block mt-2 mx-auto"
        style={{
          width: "70%",
          height: "4px",
          backgroundColor: 'var(--first-color)',
          borderRadius: "2px",
        }}
      ></span>
    </motion.div>
  );
};

export default Title;