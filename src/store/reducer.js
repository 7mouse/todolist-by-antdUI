import {ADD_TODO_ITEM, COMPLETE_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_VALUE, EDIT_TODO_ITEM} from './actionType'

const defaultState = {
  list: []
}


const reducer = (state = defaultState, action) => {
  if (action.type === INIT_LIST_VALUE) {
    const newState = DeepClone(state);
    newState.list = action.list;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = DeepClone(state);
    newState.list.push({
      content: action.content,
      time: action.dateString,
      status: 0
    })
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = DeepClone(state);
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === COMPLETE_TODO_ITEM) {
    const newState = DeepClone(state);
    newState.list[action.index].status = newState.list[action.index].status ? 0 : 1;
    return newState;
  }
  if (action.type === EDIT_TODO_ITEM) {
    const newState = DeepClone(state);
    let status = newState.list[action.index].status;
    newState.list.splice(action.index, 1);
    newState.list.push({
      content: action.content,
      time: action.dateString,
      status: status
    });
    return newState;
  }
  return state;
};

// const handleAction = {
//   [INIT_LIST_VALUE]() 
// }

function DeepClone(obj) {
  // return JSON.parse(JSON.stringify(obj));
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') { //数组与Obj 都是 object
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = DeepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

export default reducer;