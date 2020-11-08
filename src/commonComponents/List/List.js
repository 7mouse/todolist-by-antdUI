import { List } from 'antd'
import ListItem from '@common/ListItem/ListItem.js'
import actionCreators from '@store/actionCreators'
import { useDispatch } from 'react-redux';

/*
 @param {
   title,
   list,
   status
 }
*/

const MyList = (props) => {
  const dispatch = useDispatch()
  return (
    <div style={{width: '100%', display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <List
        header={<h2>{props.title}</h2>}
        style={{marginTop: '10px', width: '100%'}}
        bordered
        dataSource={props.list}
        renderItem={(item) => (
          <ListItem 
            itemStyle={props.itemStyle} 
            content={item.content} 
            time={item.time} 
            checked={props.checked} 
            index={item.index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleClick={handleClick}
          />
        )}
      />
    </div>
  );
  function handleEdit() {

  }
  function handleClick(index) {
    dispatch(actionCreators.getCompleteTodoItemAction(index));
  }
  function handleDelete(index) {
    dispatch(actionCreators.getDeleteTodoItemAction(index));
  }
}

export default MyList;