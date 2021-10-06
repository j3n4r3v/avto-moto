import React from 'react';

import './main.scss';

import CarCard from '../car-card/car-card';
import Footer from '../footer/footer';
import Header from '../header/header';

const Main = () => {
    return <>
        
        <Header />

            <CarCard />

        <Footer />

    </>;
};

export default Main;