import PropTypes from 'prop-types';

const CardProject = (props) => {

    const { name, images, links } = props;
    return (
        <>
        </>
    );
}
CardProject.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    links: PropTypes.array.isRequired,
}

export default CardProject;