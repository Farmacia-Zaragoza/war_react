import React, { Component } from 'react';
import ProjectCarousel from './ProjectCarousel';

export default class Header extends Component {
    dragon_text = '';
    state = {
        windowWidth: window.innerWidth,
        headerCarouselData: ['JR', 'RC', 'PP','JR', 'RC', 'PP','JR', 'RC', 'PP','JR', 'RC', 'PP','JR', 'RC', 'PP'],
        socialItems: [
            'http://war.vbrqx.com/dev/img/war_symbols/brqx_cookies_war_050_2017.png',
            'http://war.vbrqx.com/dev/img/war_symbols/brqx_information_war_050_2017.png',
            'http://war.vbrqx.com/dev/img/war_symbols/brqx_facebook_war_050_2017.png',
            'http://war.vbrqx.com/dev/img/war_symbols/brqx_linkedin_war_050_2017.png',
            'http://war.vbrqx.com/dev/img/war_symbols/brqx_google_plus_war_050_2017.png',
            'http://war.vbrqx.com/dev/img/war_symbols/brqx_twitter_war_050_2017.png'
        ]
    }

    componentWillMount() {
        window.addEventListener('resize', () => {
             this.setState({
                windowWidth: window.innerWidth
            });
            this.sortHeaderDragonText();
        })
    }

    componentDidMount() {
        this.sortHeaderDragonText();
    }

    sortHeaderDragonText = () => {
        //dragon_text sort if exceeds limit
        if(this.dragon_text) {
            let text = this.dragon_text.textContent;
            if(text.length > 25) {
                text = text.slice(0, 25);
            }
            this.dragon_text.textContent = text+'...';
        }
    }

    render() {
        // console.log(this.props.projects)
        const deskSocial = this.state.socialItems && this.state.socialItems.map((item, i) => (
                <div key={i} className="col s2 m6 l6 xl6">
                        <img 
                            src={item} 
                            alt="social"
                        />
                </div>
        ));
        const mobileSocial = this.state.socialItems && this.state.socialItems.map((item, i) => (
            <li key={i} className="m_social_item">
                    <img 
                        src={item} 
                        alt="social"
                    />
            </li>
    ));
        return (
            <div className="header_area">
                <div className="row">
                    <div className="col s2 m10 l10 xl10 header_left">
                        {
                            this.state.windowWidth > 600 ? 
                                <div className="logo_fire">
                                    <img 
                                        src="http://war.vbrqx.com/dev/img/logos/brqx_this_is_the_war_logo__0300_2017.png" 
                                        alt="War Logo"
                                    />
                                </div> 
                                :
                                <div className="logo_h_dreagon">
                                    <img 
                                        src="http://war.vbrqx.com/dev/img/logos/brqx_war_logo_dragon_2010_100x80.gif" 
                                        alt="War Logo"
                                    />
                                </div> 
                        }
                        {this.state.windowWidth > 600 && 
                            <ProjectCarousel 
                                projectData={this.props.projects} 
                                itemClass="h_item"
                            />
                        }
                    </div>
                    <div className="col s10 m2 l2 xl2">
                        <div className="socila_symbols">
                            {this.state.windowWidth > 600 && 
                                <div className="row m_display_none">
                                    <div className="social_items">
                                        {deskSocial}
                                    </div>
                                </div>
                            }
                            {
                                this.state.windowWidth <=600 && 
                                    <ul className="mobile_social_view">
                                    {mobileSocial}
                                </ul>
                            }
                             {
                                this.state.windowWidth <= 600 && 
                                <ProjectCarousel 
                                    projectData={this.props.projects} 
                                    itemClass="h_item"
                                />
                             }
                        </div>
                    </div>
                </div>
                {this.state.windowWidth <= 600 &&
                    <div className="header_drangon_content">
                        <h2>Esta es tu guerra</h2>
                        <p id="dragon_text" ref={node => this.dragon_text = node}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, minus!
                            it amet consectetur adipisicing elit. Voluptas, minus!
                        </p>
                    </div>
                }
            </div>
        )
    }
}
