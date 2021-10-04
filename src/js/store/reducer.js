import { combineReducers } from 'redux';
import { reducer as reviews } from './reviews/reviews';
import { reducer as cars } from './cars/cars';
import NameSpace from './name-space';

export default combineReducers({
    [NameSpace.REVIEWS]: reviews,
    [NameSpace.CARS]: cars,
});