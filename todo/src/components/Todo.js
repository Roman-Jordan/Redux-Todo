import React from 'react';
import {connect} from 'react-redux';
import { addTask } from '../actions';
import TodoList from './TodoList'

class Todo extends React.Component{
    state = {
        task:'',
        complete:false,
        id:Date.now()
    }

    addTask = e =>{
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            task:'',
            complete:false,
            id:Date.now()
        })
    }

    updateTask = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value,
            
        })
    }

    render(){
        return(
            <>  
                <TodoList tasks={this.props.tasks}/>
                <form onSubmit={this.addTask}>
                    <input onChange={this.updateTask} name='task' value={this.state.task} type='text'/>
                    <button type="submit">Add Task</button>
                </form>
            </>
        )
    }
}

const mapStatetoProps = state =>{
    return {
      tasks:state.tasks
    }
  }

  export default connect(mapStatetoProps,{addTask})(Todo)