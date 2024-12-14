
import PropTypes from "prop-types";

const Heading = ({className,content}) => {
  return (
   <h1 className ={`w-2 bg-gray-50 ${className}`}>{content}</h1>

  );
};

export default Heading;


Heading.propTypes={
  className:PropTypes.string,
  content:PropTypes.string,
};