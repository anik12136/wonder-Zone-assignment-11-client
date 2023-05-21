import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ReactTabs from '../ReactTabs/ReactTabs';
import Rtab from '../ReactTabs/Rtab';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            {/* <ReactTabs></ReactTabs> */}
            {/* <TabSection></TabSection> */}
            <Rtab></Rtab>
        </div>
    );
};

export default Home;