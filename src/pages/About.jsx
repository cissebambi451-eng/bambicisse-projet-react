import {useEffect, useState} from "react";
function About () {
    const [todo, setTodo] = useState({})


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setTodo(json))
    });
//les appels api se font dans useEffect

 [];

    return(
        <>
        <div>
             <h1>welcome to our site</h1>
            <p>This is the About page .</p>

        </div>
        <h2>Todo</h2>
        
            <li>User ID: {todo.userId}</li>
            <li>User ID: {todo.id}</li>
            <li>User title: {todo.title}</li>
            <li>User completed: {todo.completed?.toString()}</li>
        
       </>

    )
}    
export default About;