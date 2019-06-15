import React, {Component} from 'react';
import { Button } from 'reactstrap';

import './post-add-form.css';

export default class PostAddForm extends Component {
    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({text: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.text);
        this.setState({text: ''});
    }
    
    render() {
        return (
            <form 
                className='bottom-panel d-flex'
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='Новый пост'
                    className='form-control new-post-label'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button 
                    type='submit'
                    outline color="info">
                    Добавить
                </Button>
            </form>
        )
    }
}