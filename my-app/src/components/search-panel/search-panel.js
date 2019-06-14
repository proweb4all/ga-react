import React from 'react';
import { Input } from 'reactstrap';
import './search-panel.css';

const SearchPanel = () => {
    return (
        <Input
            type='text'
            placeholder='Поиск по записям'
            className='search-input'>
        </Input>
        // <input className='form-control search-input'
        //        type='text'
        //        placeholder='Поиск по записям' />
    )
}

export default SearchPanel;