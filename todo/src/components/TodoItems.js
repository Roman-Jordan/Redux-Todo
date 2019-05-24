import React from 'react';
import {markComplete} from '../actions';
import {connect} from 'react-redux';



class TodoItems extends React.Component{

    markCompleted = e =>{
        e.preventDefault();
        const id = parseInt(e.target.id)
       
        this.props.markComplete(id)
    }
    render(){
        return(
            <h2 onClick={this.markCompleted} id={this.props.task.id}>{this.props.task.task}</h2>
        )
    }
}

const mapStateToProps = state =>{
    return{
        tasks:state.tasks
    }
}


export default connect(mapStateToProps,{markComplete})(TodoItems);