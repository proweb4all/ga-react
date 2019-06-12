import React from 'react';
import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className='app-list-item d-flex justify-content-between'>
            <div className='app-list-item-label'>
                <p className='item-date'>12.06.2019</p>
                <p>Какой-то пост...</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button' className='btn-star btn-sm'>
                    <i className='fa fa-star'></i>
                </button>
                <button type='button' className='btn-trash btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i class='fa fa-heart'></i>
            </div>
        </li>
    )
}

export default PostListItem;