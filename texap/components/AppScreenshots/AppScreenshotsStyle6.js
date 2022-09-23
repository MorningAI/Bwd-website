import React from 'react'
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel, 
    resetIdCounter 
} from 'react-tabs';
resetIdCounter();

const AppScreenshotsStyle6 = () => {
    return (
        <>
            <div className="screenshots-area bg-black-color ptb-100">
                <div className="container">
                    <div className="section-title color-white">
                        <span className="sub-title">SCREENSHOTS</span>
                        <h2>Easily Customize in One Minute</h2>
                    </div>

                    <div className="screenshots-tabs">
                        <Tabs>
                            <TabList>
                                <Tab>
                                    <i className="ri-exchange-dollar-line"></i> 
                                    Budget Overview
                                </Tab> 
                                <Tab>
                                    <i className="ri-settings-4-line"></i> 
                                    Create & Adjust
                                </Tab> 
                                <Tab>
                                    <i className="ri-pie-chart-2-line"></i> 
                                    View Reports
                                </Tab> 
                                <Tab>
                                    <i className="ri-briefcase-4-line"></i> 
                                    Integrations
                                </Tab> 
                            </TabList>

                            <TabPanel>
                                <img src="/images/screenshots/screen5.jpg" alt="screenshots" />
                            </TabPanel> 

                            <TabPanel>
                                <img src="/images/screenshots/screen6.jpg" alt="screenshots" />
                            </TabPanel> 

                            <TabPanel>
                                <img src="/images/screenshots/screen7.jpg" alt="screenshots" />
                            </TabPanel> 

                            <TabPanel>
                                <img src="/images/screenshots/screen8.jpg" alt="screenshots" />
                            </TabPanel> 
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppScreenshotsStyle6;