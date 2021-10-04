import PropTypes from "prop-types";

export const carDetails = PropTypes.shape({
    id: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    horsePower: PropTypes.number.isRequired,
    engineType: PropTypes.string.isRequired,
    driveUnit: PropTypes.string.isRequired,
    maxTorque: PropTypes.string.isRequired,
    engineVolume: PropTypes.number.isRequired,
    cylindersNumber: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    photosPreview: PropTypes.arrayOf(PropTypes.string).isRequired,
    newModel: PropTypes.bool.isRequired,
}).isRequired;

export const reviewsDetails = PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    dignity: PropTypes.string.isRequired,
    limitations: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
}).isRequired;