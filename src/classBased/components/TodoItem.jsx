import React from 'react';
import styles from './TodoItem.module.css';


class TodoItem extends React.Component {
  state = {
    editing: false,

  }
  
  handleEditing = () => {
    this.setState({
      editing:true,
    })
  }
  
  handleUpdatedDone = event => {
    if (event.key === "Enter") {
     this.setState ({ editing:false })
   }
  }

  componentWillUnmount() {
    console.log("cleaning up...")
  }
  
  render() { 
    const completedStyle = {
          fontStyle: "italic",
          color: "#595959",
          opacity: 0.4,
          textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo
    
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
      
    } else {
      editMode.display = "none"
    }


    
    return (  
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={ viewMode}>
        <input
          type="checkbox"
            className={styles.checkbox}
          checked={completed}
          onChange = {() => this.props.handleChangeProps(id)}
        />
        {title}
        <button onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>

        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        </div>
        <input type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange=
          {e => {
            this.props.setUpdate
            (e.target.value, id)
          }}
          onKeyDown = {this.handleUpdatedDone}
        />
      </li>
    
    );
  }
}
 
export default TodoItem;

//in the span tag we have a ternary operator ie an inline if-statement which works as below
//(condition) ? (true return value) : (false return value) if the condition is true (in our case, if the task is mark completed), we apply the second statement, completedStyle (we created this variable as an object holding the style information in the same component), else, we apply null (i.e no style).