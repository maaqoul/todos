import { useState } from "react";
import { addTask } from "../store/taskSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

        dispatch(addTask({name: value}))

		setValue("");
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	);
};

export default AddTodo;