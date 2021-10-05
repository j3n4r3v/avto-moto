import slide1 from '../../img/content/desctop_slide_1.jpg'
import slide2 from '../../img/content/desctop_slide_2.jpg'
import slide3 from '../../img/content/desctop_slide_3.jpg'
import slide1min from '../../img/content/desctop_slide_1_min.jpg'
import slide2min from '../../img/content/desctop_slide_2_min.jpg'
import slide3min from '../../img/content/desctop_slide_3_min.jpg'

export const carInfo = {
    id: 1,
    model: `Марпех 11`,
    price: 2300000,
    oldPrice: 2400000,
    transmission: `Механика`,
    horsePower: 249,
    engineType: `Бензин`,
    driveUnit: `Полный`,
    engineVolume: 2.4,
    maxTorque: `370/4500`,
    cylindersNumber: 4,
    newModel: true,
    photos: [
        slide1,
        slide2,
        slide3
    ],
    photosPreview: [
        slide1min,
        slide2min,
        slide3min
    ],
};
