const extend = (a, b) => {
    return Object.assign({}, a, b);
};

const getNumberWithSpaces = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * (1000 - 0 + 1) + 0);
};

const setItem = (field, value) => {
    return localStorage.setItem(`${field}`, value);
};

export {extend, getNumberWithSpaces, getRandomNumber, setItem };