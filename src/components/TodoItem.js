import { deleteTask } from "../store/taskSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({id, title}) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(deleteTask({id: id}))
    }
    return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
}
export default TodoItem;