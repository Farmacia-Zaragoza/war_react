import React, { Component } from 'react';
import Header from './components/Header';
import TabSection from './components/TabSection';
import FlagCarousel from './components/FlagCarousel';
import axios from 'axios';

import './App.css';
class App extends Component {
  state = {
    site: {},
    langs: [],
    projects: [],
    articles: []
  }

  componentDidMount() {
      const common_data = document.querySelector('#root').getAttribute('data-comm');
      const spec_data = document.querySelector('#root').getAttribute('data-spec');
      const content_data = document.querySelector('#root').getAttribute('data-content');

      axios.get(common_data).then(res => {
        // console.log(res.data)
        this.setState({
            langs: res.data.langs,
            projects: res.data.projects
        })
      });
      axios.get(spec_data).then(res => {
        // console.log(res.data)
        this.setState({
            site: res.data.site
        })
      });

      axios.get(content_data).then(res => {
        console.log(res.data)
        this.setState({
            articles: res.data.articles
        })
      })

  }

  render() {
    console.log(this.state)
    return (
      <div className="App" style={{
        background: '#1F1C18'
      }}>
          <div className="container" style={{
            background: 'transparent'
          }}>
            <div className="top_wrapper">
                <Header projects={this.state.projects} />
                <TabSection articles={this.state.articles} />
            </div>

            <FlagCarousel 
                      langData={this.state.langs}
                      itemClass="flags_item"
            />
          </div>
      </div>
    );
  }
}

export default App;
