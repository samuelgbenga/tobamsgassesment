import React from "react";
import styles from "./button.module.css";
import { ButtonProps } from "../../interface/interface";



const Button: React.FC<ButtonProps> = ({ label, variant}) => {

    // Dynamically assign class based on variant prop
  const buttonClass = `${styles.button} ${variant ? styles[variant + "-button"] : ""}`

  return (
    <button className={buttonClass} >
      {label}
    </button>
  );
};

export default Button;