import "./Title.css";
import PropTypes from "prop-types";
const Title = (props) => {
  return (
    <div className="title">
      <p>{props.subTitle}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Title;
