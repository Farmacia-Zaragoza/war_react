import React, { Component } from 'react';
// import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../config/TabContentScroll';
import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../config/scroll';

export default class FlagCarousel extends Component {

    scroll_div = '';

    render() {
        // console.log(this.props.langData)
        let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://social.vbrqx.com'
        }
        const headerCarouselItem = this.props.langData.length > 0 && this.props.langData.map((item, i) => (
            <div key={i} className={this.props.itemClass}>
                <a href="/jr" title={item.hover}>
                    <img src={`${hostName}/${item.flag}`} alt={item.name} />
                </a>
            </div>
        ));
        return (
            <div className="flag_carousel_wrapper">
                <div className="flag_left_icon">
                    <img 
                        src="http://war.vbrqx.com/dev/img/arrows/brqx_fire_arrow_left_050_2017.png" 
                        alt="arrow left"
                        onMouseEnter={() => horizontalSlideleft(this.scroll_div)}
                        onMouseLeave={() => stopTabScroll(this.scroll_div)}
                    />
                </div>
                <div className="header_scroll" ref={node => this.scroll_div = node}>
                    {headerCarouselItem}
                </div>
                <div className="flag_right_icon">
                    <img 
                        src="http://war.vbrqx.com/dev/img/arrows/brqx_fire_arrow_right_050_2017.png" 
                        alt="arrow left"
                        onMouseEnter={() => horizontalSlideRight(this.scroll_div)}
                        onMouseLeave={() => stopTabScroll(this.scroll_div)}
                    />
                </div>
            </div>
        )
    }
}
