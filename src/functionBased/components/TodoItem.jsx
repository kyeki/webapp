import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';


const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",

  }
  const { completed, id, title } = props.todo
  
  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display ="none"
  }

  useEffect(() => {
    return () => {
      console.log("cleaning up...")
      
    }
  }, [])
  return (  
      
      <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={ viewMode}>
        <input
          type="checkbox"
            className={styles.checkbox}
          checked={completed}
          onChange = {() => props.handleChangeProps(id)}
        />
        
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash
            style={{
              color: "orangered",
              fontSize:"16px"
            }}
          />
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
            props.setUpdate
            (e.target.value, id)
          }}
          onKeyDown = {handleUpdatedDone}
        />
      </li>
    
    )
  }
 
export default TodoItem;

//in the span tag we have a ternary operator ie an inline if-statement which works as below
//(condition) ? (true return value) : (false return value) if the condition is true (in our case, if the task is mark completed), we apply the second statement, completedStyle (we created this variable as an object holding the style information in the same component), else, we apply null (i.e no style).