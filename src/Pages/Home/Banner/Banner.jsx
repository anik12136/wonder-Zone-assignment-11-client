import React from 'react';

const Banner = () => {
    return (



        <div className='mx-40 my-20' >
            <div data-aos="fade-up" className=''>
                <h1 className=' py-3 text-center text-yellow-500 text-4xl drop-shadow-2xl bg-slate-100 font-bold'>most Rated product in this week</h1>
            </div>
            <div className="carousel w-full h-[400px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/soapbox-derby-with-children-racing-car_1308-84941.jpg?w=1060&t=st=1684414438~exp=1684415038~hmac=81470e297993f2b35ee5098b90e059da1fbf20ed9b8badafe85c1ce47bf78fa4" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://img.freepik.com/premium-photo/toy-truck-car-blue-background_528985-2606.jpg?w=900" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/word-toys-different-types-toys_1308-11410.jpg?w=900&t=st=1684414286~exp=1684414886~hmac=2e1bbc610c0f6f4aaeeae30883347ead1fe906126d5739e60b750c414f120021" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074078.jpg?w=996&t=st=1684414084~exp=1684414684~hmac=48375952544460541a37af10457291f590f8e76f64f0803ff64422ee69ec1b1a" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>



    );
};

export default Banner;