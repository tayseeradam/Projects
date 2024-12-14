import PropTypes from "prop-types";

const Input = ({type,placeholder}) => {
  return (

    <input
    type= {type}
    className=" border-[2px]  rounded-[16px]  w-[30%] px-2 py-2 bg-gray-200 m-2 focus-border-gray-400   
    outline-gray-400 border-blue-200 text-blue-100 shadow-lg  " placeholder = {placeholder} />
  );
};

export default Input;

Input.propTypes ={
type:PropTypes.string,
placeholder:PropTypes.string,

};