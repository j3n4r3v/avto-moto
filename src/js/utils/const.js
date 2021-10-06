const SLIDE_STEP = 1;

const reviewStars = [1, 2, 3, 4, 5];
const stars = [`5`, `4`, `3`, `2`, `1`];

const TabName = {
    DETAILS: `Характеристики`,
    REVIEWS: `Отзывы`,
    CONTACTS: `Контакты`,
};

const AppRoute = {
    ROOT: `/`,
    CARS: `/cars`,
    SERVICES: `/services`,
    CONTACTS: `/contacts`,
    VACANCY: `/vacancy`,
};

const ValidStatus = {
    VALID: true,
    INVALID: false,
};

export { SLIDE_STEP, reviewStars, stars, TabName, AppRoute, ValidStatus };