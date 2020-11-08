import List from '@common/List/List.js';
import { Fragment } from 'react';

const TodoList = (props) => {
  const component = props.list.length > 0 ? (
    <List 
      title="待办事项"
      list={props.list}
    />
  ) : null;
  return (
    <Fragment>
      {component}
    </Fragment>
  )
}
export default TodoList;