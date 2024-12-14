import PropTypes from "prop-types";

const Button = ({buttonText}) => {
  return (
    <button className="  bg-gray-200  py-[4px] text-2xl w-[30%] text-gray-400 rounded-2xl border-[3px]
     focus-border-gray-400  shadow-inner  outline-black ">
        {buttonText}
    </button>
  );
};

export default Button;

Button.propTypes ={
buttonText:PropTypes.string,

};