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
    ],
    term: '',
    filter: 'all'
  }
  
  onDeleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [ ...data.slice(0, index), ...data.slice(index + 1) ];
      return {data: newArr};
    })
  }
  
  onAddItem = (body) => {
    if (body.length == 0) {
      return alert('Введите текст сообщения!');
    }
    const newItem = {
      id: idGenerator(),
      label: body,
      postDate: this.todayDate(), //'14.06.2019',
      important: false,
      like: false
    };
    this.setState(({data}) => {
      const newArr = [ ...data, newItem ];
      return {data: newArr};
    });
  }
  
  todayDate = () => {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return `${dd}.${mm}.${yy}`;
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

  searchPost = (items, term) => {
    if  (term.length === 0) {return items}
    return items.filter((item) => {return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1})
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'like':
        return items.filter(item => item.like)
          // break;
      case 'important':
        return items.filter(item => item.important)
          // break;
      case 'star':
        return items
          // break;
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state;
    const important = data.filter(item => item.important).length;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <div className='app container'>
        <AppHeader 
          important={important}
          liked={liked}
          allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter 
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
          posts={visiblePosts}
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