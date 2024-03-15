import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
const Icons = ({ name }) => {
  switch (name) {
    case "cross":
      return <FaTimes className="icons" />;
    case "circle":
      return <FaRegCircle className="icons" />;
    default:
      return <FaPen className="icons" />;
  }
};

export default Icons;
