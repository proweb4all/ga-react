import React, {Component} from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    buttons = [
        {name: 'important', label: 'Вaжные'},
        {name: 'like', label: 'Понравились'},
        {name: 'all', label: 'Все'}
    ]

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-info';
            return (
                <button 
                    type='button' 
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}
