import PropTypes from "prop-types";

const Feature = ({feature}) => {
    return (
        <div>
            <p>{feature}</p>
        </div>
    );
};
Feature.proptypes = {
  feature: PropTypes.string,
};
export default Feature;