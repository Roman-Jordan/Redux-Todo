
import { ADD_TASK, MARK_COMPLETE } from '../actions';

const initialState = {
  tasks:[],
  
};

export const reducer = (state = initialState, action) =>{

  switch (action.type) {
    case ADD_TASK:

      return {
        ...state,
        tasks:[...state.tasks,action.payload]
      };
    case MARK_COMPLETE:{
      return {
        ...state,
        tasks:state.tasks.map(task => {
          if (task.id === action.payload) {
            console.log(action.payload,task.id)
            return {
              ...task,
              complete: !task.complete
            };
          }
          return task
        })
      }
    }
    default:
      return state;
  }
}


