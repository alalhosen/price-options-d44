import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><AiOutlineCheckCircle className="text-green-400 mr-4"></AiOutlineCheckCircle> {feature}</p>
        </div>
    );
};
Feature.proptypes = {
  feature: PropTypes.string,
};
export default Feature;