import React, { Component } from 'react'
import './githubSearch.css'
import SearchHeader from './searchHeader';
import SearchList from './searchList';

export default class githubSearch extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    updateSearchState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {

        const {users, isFirst, isLoading, err} = this.state

        return (
            <div className='githubSearch'>
                <div className="container">
                    <SearchHeader updateSearchState={this.updateSearchState}/>
                    <div className="row">
                        <SearchList users={users} isFirst={isFirst} isLoading={isLoading} err={err}/>
                    </div>
                </div>
            </div>
        )
    }
}
