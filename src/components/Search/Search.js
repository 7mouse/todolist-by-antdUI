import React, { Fragment } from 'react';
import Search from 'antd/lib/input/Search';
import './style.css'
import store from '@store/';
import { notification } from 'antd';

// const openNotification = (value) => {
//   notification.open({
//     message: '搜索结果',
//     description: 
    
//     <Fragment>
//       {
//         value.map((item, index)=>(<div key={index}>{item}</div>))
//       }
//     </Fragment>,
//     onClick: () => {
//       console.log('Notification Clicked!');
//     },
//   });
// };

// const onSearch = value => {
//   let state = store.getState();
//   let str = [];
//   state.list.filter((item)=> {
//     return item.content.indexOf(value) !== -1
//   }).forEach((item)=> {
//     str.push(`${item.content} ${item.time} ${item.status ? '已完成' : '未完成'}`);
//   });
//   openNotification(str);
// };

const SearchInput = (props) => {
  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        // suffix={suffix}
        // onSearch={onSearch}
      />
    </div>
  )
}

export default SearchInput;