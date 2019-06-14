import React from 'react';
import './app-header.scss';

const AppHeader = ({ liked, allPosts }) => {
    return (
        <header className='app-header d-flex'>
            <h1>Юрий Таратов</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </header>
    )
}

export default AppHeader;