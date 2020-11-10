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
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  return (
    <Context.Provider
      value={handleEdit}
    >
      <EditPanel 
        title={"编辑项目"}
        isShow={isShow}
        time={time}
        index={index}
        content={content}
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
  function handleEdit(content, time, index) {
    setContent(content);
    setTime(time);
    setIndex(index);
    setIsShow(true);
  }
  function handleOk(inputValue, time, index) {
    dispatch(actionCreators.getEditTodoItemAction(index, inputValue, time));
    setIsShow(false);
  }
}
export default ListPanel;