import React, { Component } from 'react';
import SearchBox from './SearchBox';
import TabButtonContent from './TabButtonContent';
import DragonHeading from './DragonHeading';

export default class TabSection extends Component {

    render() {
        // console.log(this.props.articles)
        return (
            <div className="tab_section">
                <div className="row">
                    <div className="col s12 m8 l8 xl8">
                        <TabButtonContent articles={this.props.articles} />
                    </div>
                    <div className="col s12 m4 l4 xl4 mobile_display">
                        <DragonHeading />
                        <div className="tab_content_logo">
                            <img 
                                src="http://war.vbrqx.com/dev/img/logos/brqx_war_logo_dragon_2010_200x180.svg" 
                                alt="Dragon Logo"
                            />
                        </div>
                        <SearchBox />
                    </div>
                </div>
            </div>
        )
    }
}
