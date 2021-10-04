import React from 'react';
import CarCard from './car-card';
import Footer from './footer';
import Header from './header';

const Main = () => {
    return <>
        <Header />
        <main className="main">
            <div className="main__wrapper">
                <h1 className="visually-hidden">Карточка автомобиля</h1>

                <CarCard />
            </div>
        </main>
        <Footer />

    </>;
};

export default Main;