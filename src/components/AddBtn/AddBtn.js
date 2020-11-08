import { useState } from 'react';
import EditPanel from '@components/EditPanel/EditPanel.js'
import './style.css'
import { useDispatch } from 'react-redux';
import actionCreators from '@store/actionCreators';

const AddBtn = (props) => {

  // const [inputValue, setInputValue] = useState('');
  const [isAdd, setIsAdd] = useState(false)
  const dispatch = useDispatch();
  // console.log(isAdd)
  return (
    <div style={{display: 'flex', alignItem: 'center', justifyContent: 'flex-start'}}>
      <div 
        className="newItemBtn"
        onClick={()=>setIsAdd(true)}
      >
        +新建待办
      </div>
      <EditPanel 
        title={"添加事项"}
        isShow={isAdd} 
        setShow={()=>setIsAdd(false)}
        onOk={handleOk}
      />
    </div>
  );
  function handleOk(inputValue, time) {
    dispatch(actionCreators.getAddTodoItemAction(inputValue, time));
    setIsAdd(false);
  }
}

export default AddBtn;