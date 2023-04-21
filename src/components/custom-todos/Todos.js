import React, { useEffect, useState } from 'react';
import './customTodos.scss';

const Todos = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    const [activeTodos, setActiveTodos] = useState([]);
    const [visibleTodos, setVisibleTodos] = useState([]);
    const [footer, setFooter] = useState(null);

    useEffect(() => {
        setActiveTodos(todos.filter(todo => !todo.completed));
    }, [todos]);

    useEffect(() => {
        setVisibleTodos(showActive ? activeTodos : todos);
    }, [showActive, todos, activeTodos]);

    useEffect(() => {
        setFooter(
            <footer>
                {activeTodos.length} todos left
            </footer>
        );
    }, [activeTodos]);


    return (
        <div className='container' style={{maxWidth: '50%'}}>
            <label className='my-2'>
                <input
                    className='me-2'
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            {footer}
        </ div>
    );
}

const NewTodo = ({ onAdd }) => {
    const [text, setText] = useState('');

    function handleAddClick() {
        setText('');
        onAdd(createTodo(text));
    }

    return (
        <div className='custom-todo'>
            <input
                className='form-control custom-todo__field'
                placeholder='write todo'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                onClick={handleAddClick}
                className='custom-todo__addTodo-btn'
            >
                Add Todo
            </button>
        </div>
    )
}

let nextId = 0;

export const createTodo = (text, completed = false) => {
    return {
        id: nextId++,
        text,
        completed
    };
}

export const initialTodos = [
    createTodo('Get apples', true),
    createTodo('Get oranges', true),
    createTodo('Get carrots'),
];


export default Todos;