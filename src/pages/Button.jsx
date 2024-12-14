import PropTypes from "prop-types"


const Button = ({bgColor, buttonText, onClick}) => {
  return (

    <button onClick={onClick} className={`${bgColor} w-[100px] rounded-md px-5 py-1 text-white `}>
      {buttonText}
    </button>

  )
}

Button.propTypes = {
  bgColor: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button


    

