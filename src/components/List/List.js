import TodoList from '@components/List/TodoList.js';
import DidList from '@components/List/DidList.js';
import { Fragment, useContext, useState } from 'react';

const List = (props) => {
  // const [isShow, setIsShow] = useState(false);
  // const Context = useContext();
  return (
    <Fragment>
      <TodoList
        list={props.todoList}
      />
      <DidList
        list={props.didList}
      />
    </Fragment>
  )
}
export default List;