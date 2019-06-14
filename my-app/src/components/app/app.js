import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import idGenerator, { ResetHtmlIdGenerator } from 'react-id-generator';
import './app.css';

export default class App extends Component {
  state = {
    data: [
      { id: 1, label: 'Всем привет! Это первый пост.', postDate: '10.06.2019', important: true, like: false },
      { id: 2, label: 'Всем привет! А это второй пост.', postDate: '11.06.2019', important: false, like: false },
      { id: 3, label: 'Хаюшки! Продолжаем изучать React.js!', postDate: '12.06.2019', important: false, like: true }
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
      important: false,
      like: false
    };
    this.setState(({data}) => {
      const newArr = [ ...data, newItem ];
      return {data: newArr};
    });
  }
  
  toggleParam = (id, param) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data];
      if (param === 'important') newArr[index].important = !newArr[index].important;
      if (param === 'like') newArr[index].like = !newArr[index].like;
      return {data: newArr};
    })
  }
  onToggleImportant = (id) => {this.toggleParam(id, 'important')}
  onToggleLiked = (id) => {this.toggleParam(id, 'like')}

  // onToggleImportant = (id) => {
  //   this.setState(({data}) => {
  //     const index = data.findIndex(elem => elem.id === id);
  //     const newArr = [...data];
  //     newArr[index].important = !newArr[index].important;
  //     return {data: newArr};
  //   })
  // }

  // onToggleLiked = (id) => {
  //   this.setState(({data}) => {
  //     const index = data.findIndex(elem => elem.id === id);
  //     const newArr = [...data];
  //     newArr[index].like = !newArr[index].like;
  //     return {data: newArr};
  //   })
  // }

  render() {
    const {data} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    return (
      <div className='app container'>
        <AppHeader 
          liked={liked}
          allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={data}
          onDelete={this.onDeleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <ResetHtmlIdGenerator />
        <PostAddForm 
          onAddItem={this.onAddItem} />
      </div>
    );
  }
};