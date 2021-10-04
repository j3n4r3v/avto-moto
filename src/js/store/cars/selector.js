import NameSpace from '../name-space';

const getActiveCar = (state) => {
    return state[NameSpace.CARS].carInfo;
};

export { getActiveCar };