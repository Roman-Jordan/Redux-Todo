export const ADD_TASK = 'ADD_TASK';
export const MARK_COMPLETE = 'MARK_COMPLETE';

export function addTask(newTask){
  return {
    type: ADD_TASK,
    payload: newTask
  };
}

export const markComplete = id =>{
  return{
    type:MARK_COMPLETE,
    payload:id
  }
}
