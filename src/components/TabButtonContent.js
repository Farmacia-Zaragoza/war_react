import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { verticalSlideUp, verticalSlideDown, stopTabScroll, horizontalSlideRight, horizontalSlideleft } from '../config/TabContentScroll';
import { verticalSlideDown, verticalSlideUp, stopTabScroll, fastVerticalSlideUp, fastVerticalSlideDown, horizontalSlideleft, horizontalSlideRight} from '../config/scroll';
import Approach from './Tabcontent/Approach';

import "react-tabs/style/react-tabs.css";

export default class TabButtonContent extends Component {
    tab_content_scroll = '';
    content_inner_scroll = '';
    tab_list_scroll = '';
    
    tabTitleScroll = '';
    changeEvent = (e) => {
        e.target.click();
    }

    state = {
        tabTitle: ['Approach']
    }

    // showTabTitle = () => {
    //     return this.state.tabTitle.map((item, i) => (
    //         <Tab onMouseEnter={this.changeEvent} key={i} ref={node => this.tabTitleScroll = node}>{item}</Tab>
    //     ));
    // }

    // showTabPanel = () => {
    //     return this.props.articles.map((item, i) => (
    //         <TabPanel key={i}>
    //                 <div 
    //                     onMouseEnter={() => verticalSlideDown(this.tab_content_scroll)} 
    //                     className="tab_handler_top"
    //                     onMouseLeave={() => stopTabScroll(this.tab_content_scroll)}
    //                 ></div>
    //                 <div 
    //                     onMouseEnter={() => verticalSlideUp(this.tab_content_scroll)} 
    //                     className="tab_handler_down"
    //                     onMouseLeave={() => stopTabScroll(this.tab_content_scroll)}
    //                 ></div>
    //                 <div className="tab_content_scroll" ref={node => this.tab_content_scroll = node}>
    //                     <div className="tab_inner_content">
    //                         {item.image && <img src={item.image} alt="warrior" />}
    //                         <p>{item.content}</p>
    //                     </div>
    //                 </div>
    //         </TabPanel>
    //     ));
    // }

    render() {
        return (
            <div className="tab_content">
                <div className="tab_upper_logo">
                    <img className="left_tab_flame" src="http://war.vbrqx.com/dev/img/arrows/brqx_fire_long_arrow_orange_left_150_2017.svg" alt="Tab Logo"
                        onMouseEnter={() => horizontalSlideleft(this.tab_list_scroll)}
                        onMouseLeave={() => stopTabScroll(this.tab_list_scroll)}
                    />
                    <img className="mid_tab_flame" src="http://war.vbrqx.com/dev/img/flames/brqx_orange_fireworks_050_2017.png" alt="Tab Logo"/>
                    <img className="right_tab_flame" src="http://war.vbrqx.com/dev/img/arrows/brqx_fire_long_arrow_orange_right_150_2017.svg" alt="Tab Logo"
                        onMouseEnter={() => horizontalSlideRight(this.tab_list_scroll)} 
                        onMouseLeave={() => stopTabScroll(this.tab_list_scroll)}
                    />
                </div>
                <Tabs>
                    <div className="tab_list_scroll" ref={node => this.tab_list_scroll = node}>
                        <TabList>
                            <Tab>Approach</Tab>
                            <Tab>Title 2</Tab>
                            <Tab>Title 3</Tab>
                            <Tab>Title 4</Tab>
                            <Tab>Title 5</Tab>
                            <Tab>Title 6</Tab>
                            <Tab>Title 7</Tab>
                            <Tab>Title 8</Tab>
                            <Tab>Title 9</Tab>
                            <Tab>Title 10</Tab>
                            <Tab>Title 11</Tab>
                        </TabList>
                    </div>
                    <div className="content_wrapper">
                        <div className="downward_content"
                            onMouseEnter={() => verticalSlideDown(this.content_inner_scroll)}
                            onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
                        ></div>
                        <div className="toTop"
                            onMouseEnter={() => fastVerticalSlideDown(this.content_inner_scroll)}
                            onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
                        >
                            <i className="fa fa-angle-up stfc_arrows"></i>
                            <i className="fa fa-angle-up stfc_arrows"></i>
                            <i className="fa fa-angle-up stfc_arrows"></i>
                            <i className="fa fa-angle-up stfc_arrows"></i>
                        </div>
                        {/* <div className="zoom_image_wrapper" style={{
                            opacity: this.state.showZoomImage ? 1 : 0,
                            visibility: this.state.showZoomImage ? 'visible' : 'hidden',
                            transition: '.5s'
                        }}>
                            {zoom_image_div}
                        </div> */}
                            <div className="content_inner_scroll region_middle_content" ref={node => this.content_inner_scroll=node}>
                            <TabPanel>
                                <Approach articles={this.props.articles} />
                            </TabPanel>
                            <TabPanel>
                                <h2>lorem</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 4</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 5</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 6</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 7</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 8</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 9</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 10</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 11</h2>
                            </TabPanel>
                            </div>
                            <div className="upward_content"
                                onMouseEnter={() => verticalSlideUp(this.content_inner_scroll)}
                                onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
                            ></div>
                            <div className="toDown"
                                onMouseEnter={() => fastVerticalSlideUp(this.content_inner_scroll)}
                                onMouseLeave={() => stopTabScroll(this.content_inner_scroll)}
                            >
                                <i className="fa fa-angle-down stfc_arrows"></i>
                                <i className="fa fa-angle-down stfc_arrows"></i>
                                <i className="fa fa-angle-down stfc_arrows"></i>
                                <i className="fa fa-angle-down stfc_arrows"></i>
                            </div>
                        </div>
                    <div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
