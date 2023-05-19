import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tab1 from './Tab1/Tab1';
import Tab2 from './Tab2/Tab2';
import Tab3 from './Tab3/Tab3';

const ReactTabs = () => {

    const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('https://assignment-11-serve-site-anik12136.vercel.app/carToysTabs')
      .then(res => res.json())
      .then(data => setToys(data))
    //   .catch(error => console.error(error))
  }, [])

//   console.log(toys[0]);
//   console.log(toys[0].toys);

//  const toys1 = toys[0].toys

//  const toys2 = toys[1].toys
//  const toys3 = toys[2].toys
    return (
        <div>
            <Tabs>
                <TabList className="">
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>

                <TabPanel>
                    {/* {
                        toys1.map(toy => <p 
                        key={toy.id}
                        >{toy.name}</p>)
                    } */}
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