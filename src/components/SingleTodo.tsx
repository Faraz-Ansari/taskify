import { MdModeEdit } from "react-icons/md";
import { MdFileDownloadDone, MdDelete } from "react-icons/md";
import { Task } from "../model";

interface Props {
    todo: Task;
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            })
        );
    };

    return (
        <form className="  transition-all flex flex-row gap-4 justify-between items-center p-2 rounded-lg border-2 border-blue-700">
            {todo.isDone ? (
                <s className="hover:text-red-600 text-slate-500">{todo.task}</s>
            ) : (
                <span className="hover:text-red-600">{todo.task}</span>
            )}
            <div className="flex gap-2 cursor-pointer">
                <MdModeEdit className="hover:text-green-500" />
                <MdFileDownloadDone
                    className="hover:text-slate-400"
                    onClick={() => handleDone(todo.id)}
                />
                <MdDelete className="hover:text-red-600" />
            </div>
        </form>
    );
};

export default SingleTodo;
