export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

export const numberWithSpaces = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
};

export const randomNumber = () => {
    return Math.floor(Math.random() * (1000 - 0 + 1) + 0);
};

export const setItem = (field, value) => {
    return localStorage.setItem(`${field}`, value);
};