import React from 'react';
import Search from '@components/Search/Search.js'

function HeaderTop(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <h1 style={{marginTop: '10px'}}>待办事项: {props.count}</h1>
      <Search />
    </div>
  );
}

export default HeaderTop;
