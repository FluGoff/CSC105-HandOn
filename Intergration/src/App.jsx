import { useEffect, useState } from "react";
import * as api from "./api.jsx";

function App() {
    const [todo, setTodo] = useState([]);
    const [name, setName] = useState("");

    const getTodo = async () => {
        const response = await api.getTodo();
        setTodo(response.data);
    };

    const addTodo = async (name) => {
        await api.addTodo(name);
        setName(""); // Clear input after adding
        getTodo();   // Refresh list
    };

    const handleEdit = async (id, currentName) => {
        const newName = prompt("Enter new task name:", currentName);
        if (newName) {
            await api.editTodo(id, newName);
            getTodo();
        }
    };

    const handleDone = async (id) => {
        await api.completeTodo(id);
        getTodo();
    };

    const handleDelete = async (id) => {
        await api.deleteTodo(id);
        getTodo();
    };

    useEffect(() => {
        getTodo();
    }, []);

    return (
        <div className="p-4 space-y-4">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={getTodo}
            >
                REFRESH
            </button>

            <div className="space-y-2">
                <h1 className="font-bold">Name:</h1>
                <input
                    className="border border-gray-300 rounded-md p-2"
                    value={name}
                    placeholder="Enter task name"
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded ml-2"
                    onClick={() => addTodo(name)}
                >
                    Add
                </button>
            </div>

            <div className="space-y-2">
                {todo.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                        <p>
                            {item.id} | task: {item.name} | completed: {item.completed ? "Yes" : "No"}
                        </p>
                        <div className="space-x-2">
                            <button
                                className="bg-blue-300 px-2 py-1 rounded"
                                onClick={() => handleEdit(item.id, item.name)}
                            >
                                EDIT
                            </button>
                            <button
                                className="bg-green-300 px-2 py-1 rounded"
                                onClick={() => handleDone(item.id)}
                            >
                                DONE
                            </button>
                            <button
                                className="bg-red-300 px-2 py-1 rounded"
                                onClick={() => handleDelete(item.id)}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
