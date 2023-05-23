import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../DiscountSection/Discount';
import Gallery from '../Gallery/Gallery';
import ReactTabs from '../ReactTabs/ReactTabs';
import TopBanner from '../TopBanner.jsx/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            {/* <Animation></Animation> */}
            <Gallery></Gallery>
            <ReactTabs></ReactTabs> 
            <Discount></Discount>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;