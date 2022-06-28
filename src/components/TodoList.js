
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(state => state.tasks)
    return <>
     <ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.name}  />
			))}
		</ul>
    </>
}

export default TodoList;