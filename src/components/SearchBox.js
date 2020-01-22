import React, { Component } from 'react'

export default class SearchBox extends Component {
    
    state = {
        value: ''
    }

    searchResult = (e) => {
        e.preventDefault();
        console.log('search input: ', this.state.value)
    }

    handleInput = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form id="search_form" onSubmit={this.searchResult}>
                    <input 
                        onChange={this.handleInput} 
                        placeholder="Search..." 
                        type="text" 
                        value={this.state.value}
                        className="search_input" 
                    />
                    <button className="search_btn" type="submit"><i className="material-icons prefix">search</i></button>
                </form>
            </div>
        )
    }
}
