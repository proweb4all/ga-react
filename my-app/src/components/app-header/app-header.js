import React from 'react';
// import './app-header.scss';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}
        :hover {
            color: blue;
        }
      }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return (
        // <div className='app-header d-flex'>
        <Header as='a' colored> 
            <h1>Юрий Таратов</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>            
        // </div>
    )
}

export default AppHeader;