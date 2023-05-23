import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css';
const TopBanner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://cdn.pixabay.com/animation/2022/10/02/16/27/16-27-54-483_512.gif" className="w-full grid justify-items-end bannerImg" />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-24 w-1/2'>
                        <h2 className='text-6xl font-bold'>Play Sing And Joy With <span className='text-orange-400'>WonderZone's</span> Car Toy</h2>
                        <p>At our Cars Toy Website, we offer a wide range of high-quality and authentic Cars toys for sale. Whether you're a parent looking for the perfect gift for your little one or a collector seeking to expand your collection, we have a diverse selection of Cars toys to fulfill your needs.</p>
                        <div>
                        <Link to='/allToys'><button className="btn btn-outline btn-secondary">Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TopBanner;