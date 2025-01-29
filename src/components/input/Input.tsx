import { InputProps } from "../../interface/interface";
import style from "./input.module.css"

const Input: React.FC<InputProps> = ({ placeholder, button, extraElement, variant }) => {

    const inputClassName = variant ? style[variant] : "";
  

  return (
    <div className={style.input}>
      <input className={inputClassName} type="text" placeholder={placeholder} />
      <div className={style.absElement}>
      {button && <div>{button}</div>}
      {extraElement && <div>{extraElement}</div>}
      </div>
      
    </div>
  );
};

export default Input;
