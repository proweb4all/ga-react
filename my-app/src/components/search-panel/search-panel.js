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
    )
}

export default SearchPanel;