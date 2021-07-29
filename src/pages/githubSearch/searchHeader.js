import React, { Component } from 'react'
import axios from 'axios'
import './githubSearch.css'

export default class searchHeader extends Component {

    search = () => {
        const {input: {value}} = this
        this.props.updateSearchState({isFirst:false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                this.props.updateSearchState({users: response.data.items, isLoading: false}) 
            },
            error => {
                console.log(error)
                this.props.updateSearchState({err: error.message, isLoading: false}) 
            }
        )
    }

    render() {
        return (
            <div>
                <section className="githubSearch_header">
                    <h3>Search Github Users</h3>
                        <div>
                            <div className="input-group mb-3">
                                <input ref={e => this.input = e} type="text" className="form-control" placeholder="Please enter the name you search"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit" onClick={this.search}>Search</button>  
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
