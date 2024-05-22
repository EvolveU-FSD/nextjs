import React from "react";

const TodoPage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",
        {next: {revalidate: 30}} //static values are repopulated every 30 seconds
    )
    const todoList= await response.json()
    //NOTE: no useState needed here! YAY!!
    return (
        <>
            <div>TODO Page</div>
            <ul>
                {todoList.map(todo => <li key={todo.id}>{todo.title}:</li>)}
            </ul>
        </>
    )
}

export default TodoPage