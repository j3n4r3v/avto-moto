import history from '../../history/history';
import { ActionType } from './redirect-actions';

export const redirect = (_store) => (next) => (action) => {
    if (action.type === ActionType.REDIRECT_TO_ROUTE) {
        history.push(action.payload);
    }

    return next(action);
};

export default redirect;