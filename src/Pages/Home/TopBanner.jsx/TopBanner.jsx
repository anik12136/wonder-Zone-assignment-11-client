import React from 'react';

const TopBanner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/green-easter-car-with-eggs-copy-space_23-2149301298.jpg?w=1380&t=st=1684680096~exp=1684680696~hmac=82dd0df93e2bd083e9a184ced69965107463b235375f50b675dfcbdbcee5ed88" className="w-full " />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-24 w-1/2'>
                        <h2 className='text-6xl font-bold'>Play Sing And Joy With WonderZone's Car Toy</h2>
                        <p>At our Cars Toy Website, we offer a wide range of high-quality and authentic Cars toys for sale. Whether you're a parent looking for the perfect gift for your little one or a collector seeking to expand your collection, we have a diverse selection of Cars toys to fulfill your needs.</p>
                        <div>
                            <button className="btn btn-outline btn-secondary">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TopBanner;