import "./App.css";

import PropTypes from "prop-types";

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
  name: "Zach",
};

export default RenderName;
