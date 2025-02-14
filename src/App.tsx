import InputField from "./components/InputField";
import { useState } from "react";
import { Task } from "./model";
import ListComponent from "./components/ListComponent";
const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [todos, setTodos] = useState<Task[]>([]);

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();

        if (task) {
            setTodos([...todos, { id: Date.now(), task: task, isDone: false }]);
            setTask("");
        }
    };

    return (
        <div className="font-display bg-slate-700 h-screen text-white flex flex-col items-center justify-center">

            <div className="max-w-4xl">

            <h1 className="text-2xl text-center font-bold mb-4">Taskify</h1>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center ">
                <InputField
                    task={task}
                    setTask={setTask}
                    handleClick={handleClick}
                />
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <ListComponent todos={todos} setTodos={setTodos} />
            </div>
            </div>

        </div>
    );
};

export default App;
