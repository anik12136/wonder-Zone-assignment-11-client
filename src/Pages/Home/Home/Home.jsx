import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Rtab from '../ReactTabs/Rtab';
import TopBanner from '../TopBanner.jsx/TopBanner';
import Animation from './Animation/Animation';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Animation></Animation>
            <Gallery></Gallery>
            {/* <ReactTabs></ReactTabs> */}
            {/* <TabSection></TabSection> */}
            <Banner></Banner>
            <Rtab></Rtab>
        </div>
    );
};

export default Home;