import React, {Component} from 'react';
import { Input } from 'reactstrap';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        console.log(term);
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <Input
                type='text'
                placeholder='Поиск по записям'
                className='search-input'
                onChange={this.onUpdateSearch}>
            </Input>
        )
    }
}
