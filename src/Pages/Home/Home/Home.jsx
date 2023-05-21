import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ReactTabs from '../ReactTabs/ReactTabs';
import Rtab from '../ReactTabs/Rtab';
import TopBanner from '../TopBanner.jsx/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Gallery></Gallery>
            {/* <ReactTabs></ReactTabs> */}
            {/* <TabSection></TabSection> */}
            <Banner></Banner>
            <Rtab></Rtab>
        </div>
    );
};

export default Home;