import { Task } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}
const ListComponent: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="flex flex-col gap-4 text-blue-500 text-lg font-semibold">
            {todos.map((todo) => (
                <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    );
};

export default ListComponent;
