import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export type Todo = {
    id: number;
    title: string;
    done: boolean;
}

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title: string) {
        // ✅ Создаём новый массив с добавленным todo
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false,
            }
        ]);
    }

    function handleChangeTodo(nextTodo: Todo) {
        // ✅ Создаём новый массив с обновлённым todo
        setTodos(
            todos.map(todo =>
                todo.id === nextTodo.id
                    ? { ...todo, title: nextTodo.title, done: nextTodo.done }
                    : todo
            )
        );
    }

    function handleDeleteTodo(todoId: number) {
        // ✅ Создаём новый массив без удалённого todo
        setTodos(
            todos.filter(todo => todo.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}