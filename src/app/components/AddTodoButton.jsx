'use client'
import React from "react"
import styles from "./AddTodoButton.module.css"
// styles is imported as a javascript object

const AddTodoButton = () => {
  return(
    <div className={styles.todoButton}>
      <button onClick={() => console.log("I'm about todo something!")}>
        Click to add TODO!
      </button>
    </div>
  )
}

export default AddTodoButton