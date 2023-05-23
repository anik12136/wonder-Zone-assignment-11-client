
import React, { useContext, useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Provider/AuthProvider';
import TabDetails from './TabDetails';
const ReactTabs = () => {


    const { user } = useContext(AuthContext);

    const [tabToys, setTabToys] = useState([])
    const [id, setId] = useState()

    const url = `https://assignment-11-serve-site-anik12136.vercel.app/carToysTabs/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTabToys(data))
    }, [url]);


    const handleTab = ID => {
        setId(ID)
    }



    // console.log(tabToys)
    // console.log(tabToys)


    console.log()


    return (
        <div className='ms-40 mt-20'>
            <h2 className='my-5 text-2xl'>Shop by category</h2>
            <Tabs>
                <TabList className=" ">
                    <Tab onClick={() => handleTab(1)}>sports car</Tab>
                    <Tab onClick={() => handleTab(2)}>truck</Tab>
                    <Tab onClick={() => handleTab(3)}>regular car</Tab>

                </TabList>

                <TabPanel>
                    {
                        tabToys.map(tab => <TabDetails
                            key={tab.id}
                            tab={tab}
                        ></TabDetails>)
                    }

                </TabPanel>
                <TabPanel>
                    {
                        tabToys.map(tab => <TabDetails
                            key={tab.id}
                            tab={tab}
                        ></TabDetails>)
                    }

                </TabPanel>
                <TabPanel>
                    {
                        tabToys.map(tab => <TabDetails
                            key={tab.id}
                            tab={tab}
                        ></TabDetails>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ReactTabs;