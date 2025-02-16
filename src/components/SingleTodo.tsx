import { MdModeEdit } from "react-icons/md";
import { MdFileDownloadDone, MdDelete } from "react-icons/md";
import { Task } from "../model";
import { useState, useEffect, useRef } from "react";

interface Props {
    todo: Task;
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(todo.task);

    const editInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            editInputRef.current?.focus();
        }
    }, [isEditing]);

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

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        if (editTask.trim() === "") {
            setTodos(todos.filter((todo) => todo.id !== id));
            return;
        };

        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: editTask };
                }
                return todo;
            })
        );
        setIsEditing(!isEditing);
    };

    return (
        <form
            className="transition-all flex flex-row gap-4 justify-between items-center p-2 rounded-lg border-2 border-blue-700"
            onSubmit={(e) => handleEdit(e, todo.id)}
        >
            {isEditing ? (
                <input
                    type="text"
                    className="border border-slate-400 hover:border-blue-500 transition-all rounded-lg p-2"
                    value={editTask}
                    ref={editInputRef}
                    onChange={(e) => setEditTask(e.target.value)}
                    placeholder="Edit your task here"
                />
            ) : todo.isDone ? (
                <s className="hover:text-red-600 text-slate-500">{todo.task}</s>
            ) : (
                <span className="hover:text-red-600">{todo.task}</span>
            )}

            <div className="flex gap-2 cursor-pointer">
                <MdModeEdit
                    className="hover:text-green-500"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default form behavior
                        if (isEditing) {
                            handleEdit(e, todo.id); // Save changes when clicking the second time
                        }
                        setIsEditing(!isEditing);
                    }}
                />
                <MdFileDownloadDone
                    className="hover:text-slate-400"
                    onClick={() => handleDone(todo.id)}
                />
                <MdDelete
                    className="hover:text-red-600"
                    onClick={() => handleDelete(todo.id)}
                />
            </div>
        </form>
    );
};

export default SingleTodo;
