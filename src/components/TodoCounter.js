import { useSelector } from "react-redux";

const TodoCounter = () => {
    const todos = useSelector(state => state.tasks)
    return <div>{todos?.length}</div> 
}

export default TodoCounter;