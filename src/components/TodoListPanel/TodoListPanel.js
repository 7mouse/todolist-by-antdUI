import Header from '@components/Header/Header.js'
import ListPanel from '@components/List/ListPanel.js'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@store/actionCreators'
import './style.css'
import AddBtn from '../AddBtn/AddBtn';

const TodoListPanel = (props) => {
  
  const {list} = useSelector(state => state)
  const dispatch = useDispatch();

  // 初始化store
  useEffect(()=>{
    dispatch(actionCreators.getInitListValueAction(
      (window.localStorage 
        ? (JSON.parse(window.localStorage.getItem('list')) || []) 
        : ()=>{alert('你的浏览器不支持localStorage'); return [];}
      )
      // [
      //   {
      //     content: '好好吃饭',
      //     time: '2020-10-20 14:24:22',
      //     status: 0
      //   },
      //   {
      //     content: '不好好吃饭',
      //     time: '2020-10-20 14:22:22',
      //     status: 1
      //   }
      // ]
    ))
  }, [dispatch]); //采用dispatch, 不变, 仅在初次渲染执行, 防止循环渲染

  // 存储store 变化 => 修改list
  useEffect(()=> {
    if(window.localStorage){
      window.localStorage.setItem('list', JSON.stringify(list));
    }
  })
  
  // 为每个item 设置id; item不存在对象属性, 故采用浅拷贝
  const indexList = list
    .map((item, index) => Object.assign({index: index}, item));
  
  // // 转化不同的item (待办事项, 已完成事项)
  let todoList = indexList.filter((item)=> (item.status === 0));
  let didList = indexList.filter((item)=> (item.status === 1));

  return (
    <div className="todoListPanel" >
      <Header count={todoList.length}/>
      <AddBtn/>
      <ListPanel
        todoList={todoList}
        didList={didList}
      />
    </div>
  )
}

export default TodoListPanel;