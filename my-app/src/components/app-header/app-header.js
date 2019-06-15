import React from 'react';
import './app-header.scss';

const AppHeader = ({ important, liked, allPosts }) => {
    return (
        <header className='app-header d-flex'>
            <div className='user'>
                <img src='ya.jpeg' alt='Юрий Таратов'/>
                <h1>Юрий Таратов</h1>
            </div>
            <p>Важные: {important} | Понравились: {liked} | Все: {allPosts}</p>
        </header>
    )
}

export default AppHeader;