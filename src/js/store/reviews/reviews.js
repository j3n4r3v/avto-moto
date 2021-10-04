import { extend } from '../../utils/utils';
import { reviews } from '../../mocks/reviews';

const initialState = {
    reviews,
};

const ActionType = {
    ADD_REVIEW: `ADD_REVIEW`,
    DELETE_REVIEW: `DELETE_REVIEW`,
};

const ActionCreator = {
    addReview: (review) => ({
        type: ActionType.ADD_REVIEW,
        payload: review,
    }),
    deleteReview: () => ({
        type: ActionType.DELETE_REVIEW,
        payload: [],
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_REVIEW:
            return extend(state, {
                reviews: [action.payload, ...state.reviews],
            });
        case ActionType.DELETE_REVIEWS:
            return extend(state, {
                reviews: action.payload,
            });
        default:
    }

    return state;
};