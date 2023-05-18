import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full h-96">
                <img src="https://img.freepik.com/free-vector/soapbox-derby-with-children-racing-car_1308-84941.jpg?w=1060&t=st=1684414438~exp=1684415038~hmac=81470e297993f2b35ee5098b90e059da1fbf20ed9b8badafe85c1ce47bf78fa4" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-96">
                <img src="https://img.freepik.com/premium-photo/toy-truck-car-blue-background_528985-2606.jpg?w=900" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-96">
                <img src="https://img.freepik.com/free-vector/word-toys-different-types-toys_1308-11410.jpg?w=900&t=st=1684414286~exp=1684414886~hmac=2e1bbc610c0f6f4aaeeae30883347ead1fe906126d5739e60b750c414f120021" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-96">
                <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074078.jpg?w=996&t=st=1684414084~exp=1684414684~hmac=48375952544460541a37af10457291f590f8e76f64f0803ff64422ee69ec1b1a" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;