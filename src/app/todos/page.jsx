import React from "react";

const TodoPage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",
        {next: {revalidate: 30}} //static values are repopulated every 30 seconds
    )
    const todoList= await response.json()
    console.log("todos: ", todoList);
    //NOTE: no useState needed here! YAY!!
    return (
        <>
            <div>TODO Page</div>
            <ul>
                {todoList.map(todo => <li key={todo.id}>Task Name: {todo.title} Status:{(todo.completed)?"done":"To Do"}</li>)}
            </ul>
        </>
    )
}

export default TodoPage