import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import idGenerator, { ResetHtmlIdGenerator } from 'react-id-generator';
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
// const StyledAppBlock = styled(AppBlock)`
//   background-color: yellow;
// `

export default class App extends Component {
  state = {
    data: [
      { id: 1, label: 'Всем привет! Это первый пост.', postDate: '10.06.2019', important: true },
      { id: 2, label: 'Всем привет! А это второй пост.', postDate: '11.06.2019', important: false },
      'njkbnjkn',
      { id: 3, label: 'Хаюшки! Продолжаем изучать React.js!', postDate: '12.06.2019', important: false }
    ]
  }
  
  onDeleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [ ...data.slice(0, index), ...data.slice(index + 1) ];
      return {data: newArr};
    })
  }
  
  onAddItem = (body) => {
    const newItem = {
      id: idGenerator(),
      label: body,
      postDate: '14.06.2019',
      important: false
    };
    this.setState(({data}) => {
      const newArr = [ ...data, newItem ];
      return {data: newArr};
    });
    //console.log(newItem);
  }
  
  render() {
    const {data} = this.state;
    return (
      // <div className='app container'>
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={data}
          onDelete={this.onDeleteItem} />
        <ResetHtmlIdGenerator />
        <PostAddForm 
          onAddItem={this.onAddItem} />
      </AppBlock>
      // </div>
    );
  }
};