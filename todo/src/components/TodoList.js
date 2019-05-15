import React from 'react'
import TodoItems from './TodoItems';

//import TodoItems from './TodoItems'

function TodoList(props){
   
    
    return (
        props.tasks.map(task => {
           return !task.complete && <TodoItems key={task.id} task={task} />
        })
    )
   
}



export default TodoList;