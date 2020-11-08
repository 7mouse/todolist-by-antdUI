import React from 'react'
import TodoList from '@components/List/TodoList.js';
import DidList from '@components/List/DidList.js';
import EditPanel from '@components/EditPanel/EditPanel.js'
import actionCreators from '@store/actionCreators'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Context from '@/context.js'

const ListPanel = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
  return (
    <Context.Provider
      value={handleEdit}
    >
      <EditPanel 
        title={"编辑项目"}
        isShow={isShow}
        content={content}
        time={time}
        setShow={()=>setIsShow(false)}
        onOk={handleOk}
      />
      <TodoList
        list={props.todoList}
      />
      <DidList
        list={props.didList}
      />
    </Context.Provider>      
  )
  function handleEdit(content, time) {
    setContent(content);
    setTime(time);
    setIsShow(true);
  }
  function handleOk(inputValue, time, index) {
    dispatch(actionCreators.getEditTodoItemAction(inputValue, time));
    setIsShow(false);
  }
}
export default ListPanel;