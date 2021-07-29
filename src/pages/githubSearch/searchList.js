import React, { Component } from 'react'
import SearchItem from './searchItem';

export default class searchList extends Component {
    render() {
        const {users, isLoading, isFirst, err} = this.props
        const usersList = isFirst? <h3 className='githubSearch_message'>Welcome, please enter a name to search</h3>:
                          isLoading? <h3 className='githubSearch_message'>Loading...</h3>:
                          err ? <h3 style={{color: 'red'}}>{err}</h3>:
                          users.map(user => {
            return <SearchItem key={user.id} userLogin={user.login} userAvatar={user.avatar_url} userHtml={user.html_url}/>
        })

        return (
            <div>
                {usersList}
            </div>
        )
    }
}
