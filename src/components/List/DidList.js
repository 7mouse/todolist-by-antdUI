import List from '@common/List/List.js';
import { Fragment } from 'react';

const DidList = (props) => {
  const component = props.list.length > 0 ? (
    <List 
      title="已完成事项"
      list={props.list}
      itemStyle={{textDecoration: 'line-through'}}
      checked={true}
    />
  ) : null;
  return (
    <Fragment>
      {component}
    </Fragment>
  )
}
export default DidList;