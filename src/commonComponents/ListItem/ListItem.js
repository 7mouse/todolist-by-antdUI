import React, { useContext } from 'react';
import {List, Tooltip, Button, Checkbox} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Context from '@/context.js'
/* 
  @params {
    content: string,
    time: string,
    index: number,
    itemStyle: object,
    handleClick: function,
    handleEdit: function,
    handleDelete: function
  }
*/


const ItemList = (props) => {
  const handleEdit = useContext(Context);
  return (
    <List.Item
      actions={
        [
          <div>{props.time}</div>,
          <Tooltip title="edit">
            <Button 
              type="primary" 
              shape="circle" 
              icon={<EditOutlined />} 
              onClick={()=>handleEdit(props.content, props.time, props.index)}
            />
          </Tooltip>,
          <Tooltip title="delete">
            <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={()=>{props.handleDelete(props.index)}}/>
          </Tooltip>,
        ]
      }
    >
      <Checkbox 
        className="textShow" 
        checked={props.checked} 
        style={props.itemStyle}
        onClick={()=>{props.handleClick(props.index)}}
      >
        {props.content}
      </Checkbox>
    </List.Item>
  )
}

export default ItemList;