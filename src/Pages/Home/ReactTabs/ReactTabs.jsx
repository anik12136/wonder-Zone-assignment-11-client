import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tab1 from './Tab1/Tab1';
import Tab2 from './Tab2/Tab2';
import Tab3 from './Tab3/Tab3';

const ReactTabs = () => {

    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/carToysTabs')
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(error => console.error(error))
    }, [])

    console.log(cars)

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>

                <TabPanel>
                    <Tab1 ></Tab1>
                </TabPanel>
                <TabPanel>
                    <Tab2></Tab2>
                </TabPanel>
                <TabPanel>
                    <Tab3></Tab3>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ReactTabs;