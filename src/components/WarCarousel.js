import React, { Component } from 'react';
import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../config/TabContentScroll';

export default class WarCarousel extends Component {

    scroll_div = '';

    render() {

        const headerCarouselItem = this.props.headerCarouselData ? this.props.headerCarouselData.map((item, i) => (
            <div key={i} className={this.props.itemClass} style={{
                background: 'url(http://war.vbrqx.com/dev/img/flames/brqx_blue_flame_050_2017.png) center center',
                backgroundSize: 'cover'
            }}>
                <a href="/jr">{item}</a>
            </div>
        )) : 'No data';
        return (
            <div className="header_carousel_wrapper">
                <div className="h_left_icon">
                    <img 
                        src="http://war.vbrqx.com/dev/img/arrows/brqx_fire_arrow_left_050_2017.png" 
                        alt="arrow left"
                        onMouseEnter={() => horizontalSlideRight(this.scroll_div)}
                        onMouseLeave={() => stopTabScroll(this.scroll_div)}
                    />
                </div>
                <div className="header_scroll" ref={node => this.scroll_div = node}>
                    {headerCarouselItem}
                </div>
                <div className="h_left_icon">
                    <img 
                        src="http://war.vbrqx.com/dev/img/arrows/brqx_fire_arrow_right_050_2017.png" 
                        alt="arrow left"
                        onMouseEnter={() => horizontalSlideleft(this.scroll_div)}
                        onMouseLeave={() => stopTabScroll(this.scroll_div)}
                    />
                </div>
            </div>
        )
    }
}
