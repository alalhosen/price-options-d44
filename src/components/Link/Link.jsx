import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-12">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.proptypes={
    route:PropTypes.object
}

export default Link;