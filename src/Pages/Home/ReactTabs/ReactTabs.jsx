import React, { useContext, useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Provider/AuthProvider';
const ReactTabs = () => {

    const [tabToys, setTabToys] = useState([])
    const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://assignment-11-serve-site-anik12136.vercel.app/carToysTabs')
      .then(res => res.json())
      .then(data => setTabToys(data))
    //   .catch(error => console.error(error))
  }, [])

const tab1 = tabToys.find(toy => toy.id == 1 );
    return (
        <div>
            <Tabs>
                <TabList className="">
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>

                <TabPanel>
                    
                </TabPanel>
                    {/* {
                        toys.map(toy => <TabSection 
                        eky ={toy._id}
                        toy = {toy}
                        >
                        </TabSection>
                     )
                    }  
                </TabPanel>

                {/* <div>
                    {
                        toys.map(toy => <TabSection 
                        eky ={toy._id}
                        toy = {toy}
                        >
                        </TabSection>
                     )
                    } 
                </div> */}
            </Tabs>

        </div>
    );
};

export default ReactTabs;