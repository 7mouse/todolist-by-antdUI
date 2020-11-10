import { Fragment, useEffect, useRef, useState } from 'react';
import {Input, Button, DatePicker} from 'antd';
import moment from 'moment'
import './style.css'

/*
  @params {
    title: string,
    content: string,
    time: string,
    isSHow: boolean,
    setShow: function,
    onOk: function
  }
*/

const EditPanel = (props) => {
  const [inputValue, setInputValue] = useState(props.content || '');
  const [time, setTime] = useState(props.time || '');
  const textarea = useRef();

  useEffect(()=>{
    if (textarea.current) {
      let input = textarea.current;
      input.focus();
      // input.setSelectionRage(0,inputValue.length);
      // 设置光标位置失败
    }
    // if (props.content !== '') {
      setInputValue(props.content)
    // }
    // if (props.time !== undefined) {
      setTime(props.time);  
    // }
  },[props.content, props.time]);

  return (
    <Fragment>
      {
        props.isShow 
        ? (
          <div className="Panel">
            <div className="EditPanel">
              <h1>{props.title}</h1>
              <Input.TextArea
                ref={textarea}
                autoSize
                onChange={handleInputChange}
                placeholder="请输入Item"
                value={inputValue}
              />
              <div>
                <DatePicker 
                  showTime 
                  value={time ? moment(time): ''}
                  onChange={handleDateChange}
                />
                <Button onClick={handleSave}>保存</Button>
                <Button onClick={props.setShow}>退出</Button>
              </div>
            </div>
          </div>
        )
        : null
      }
    </Fragment>
  )
  function handleSave() {
    let flag = true;
    if (inputValue === '') {
      flag = false;
      alert('事项不能为空');
    }
    if (time === '') {
      flag = false;
      alert('日期不能为空');
    }
    if (flag) {
      if (inputValue !== props.content || time !== props.time) {
        props.onOk(inputValue, time, props.index);
        setInputValue('');
        setTime('')
      } else {
        alert('未修改')
      }
    }
  }
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleDateChange(moment, dateString) {
    setTime(dateString);
  }
}

export default EditPanel;