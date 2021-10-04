import NameSpace from '../name-space';

const getReviews = (state) => {
    return state[NameSpace.REVIEWS].reviews;
};

export { getReviews };