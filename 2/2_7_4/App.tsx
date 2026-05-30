import { useImmer } from 'use-immer';
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
    // ✅ Заменяем useState на useImmer
    const [todos, setTodos] = useImmer(initialTodos);

    function handleAddTodo(title: string) {
        // ✅ С Immer можно безопасно мутировать
        setTodos(draft => {
            draft.push({
                id: nextId++,
                title: title,
                done: false,
            });
        });
    }

    function handleChangeTodo(nextTodo: Todo) {
        // ✅ Находим и мутируем todo в черновике
        setTodos(draft => {
            const todo = draft.find(t => t.id === nextTodo.id);
            if (todo) {
                todo.title = nextTodo.title;
                todo.done = nextTodo.done;
            }
        });
    }

    function handleDeleteTodo(todoId: number) {
        // ✅ Находим индекс и удаляем
        setTodos(draft => {
            const index = draft.findIndex(t => t.id === todoId);
            if (index !== -1) {
                draft.splice(index, 1);
            }
        });
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