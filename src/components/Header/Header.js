import React from 'react';
import Search from '@components/Search/Search.js'
import './style.css'

function HeaderTop(props) {
  return (
    <div className="header-panel">
      <h1 style={{marginTop: '10px'}}>待办事项: {props.count}</h1>
      <Search />
    </div>
  );
}

export default HeaderTop;
