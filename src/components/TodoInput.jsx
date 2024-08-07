import { useState } from 'react';
import React from 'react'

export default function TodoInput(props) {
    const {handleAndAddTodos, todoValue, setTodoValue} = props;

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter tasks..." />
            <button onClick={() => {
                handleAndAddTodos(todoValue)
                setTodoValue('');
            }}>Add</button>
        </header>
    )
} 