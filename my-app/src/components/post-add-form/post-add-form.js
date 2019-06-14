import React from 'react';
import { Button, Input } from 'reactstrap';

import './post-add-form.css';

const PostAddForm = ({onAddItem}) => {
    return (
        <div className='bottom-panel d-flex'>
            <Input
                type='text'
                placeholder='Новый пост'
                className='new-post-label'>
            </Input>
            {/* <input
                type='text'
                placeholder='Новый пост'
                className='form-control new-post-label'
            /> */}
            <Button 
                type='submit'
                outline color="secondary"
                onClick={() => onAddItem('Новый пост')}>
                Добавить
            </Button>
            {/* <button 
                type='submit'
                className='btn btn-outline-secondary'
                onClick={() => onAddItem('Новый пост')}>
                Добавить
            </button> */}
        </div>
    )
}

export default PostAddForm;