import PropTypes from "prop-types";

const Error = ({content}) => {
  return (
    <p className="text-red-700">{content}</p>
  )
}

export default Error;


Error.propTypes ={
content:PropTypes.string,

}