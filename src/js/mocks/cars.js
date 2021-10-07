import slide1 from '../../img/content/desctop-slide-1.jpg'
import slide2 from '../../img/content/desctop-slide-2.jpg'
import slide3 from '../../img/content/desctop-slide-3.jpg'
import slide1min from '../../img/content/desctop-slide-1-min.jpg'
import slide2min from '../../img/content/desctop-slide-2-min.jpg'
import slide3min from '../../img/content/desctop-slide-3-min.jpg'

export const carInfo = {
    id: 1,
    model: `Марпех 11`,
    price: 2300000,
    oldPrice: 2400000,
    transmission: `Роботизированная`,
    transmissionLow: `механика`,
    horsePower: 249,
    horsePowerLow: 100,
    engineType: `Бензиновый`,
    engineTypeLow: `бензин`,
    driveUnit: `Полный`,
    engineVolume: 2.4,
    engineVolumeLow: 1.4,
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
