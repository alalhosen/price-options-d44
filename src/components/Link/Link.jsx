import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="hover:bg-yellow-500 mr-12 px-1">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.proptypes={
    route:PropTypes.object
}

export default Link;