import { useRef, useEffect } from "react";

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleClick: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleClick }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <form className="flex gap-4" onSubmit={handleClick}>
            <input
                type="text"
                ref={inputRef}
                placeholder="Enter your task here"
                className=" border border-slate-400 hover:border-blue-500 transition-all rounded-lg p-2"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="hover:text-red-600 transition-all">
                Add Task
            </button>
        </form>
    );
};

export default InputField;
