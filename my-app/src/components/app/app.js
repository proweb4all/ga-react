import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import styled from 'styled-components';
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const App = () => {
  const data = [
    25,
    { id: '1', label: 'Всем привет! Это первый пост.', postDate: '10.06.2019', important: true },
    { id: '2', label: 'Всем привет! А это второй пост.', postDate: '11.06.2019', important: false },
    'njkbnjkn',
    { id: '3', label: 'Хаюшки! Продолжаем изучать React.js!', postDate: '12.06.2019', important: false }
  ]
  return (
    // <div className='app container'>
    <AppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </AppBlock>
    // </div>
  );
};

export default App;
