import React from "react";
import { Plus } from "lucide-react";
import { useTaskManager } from "../hooks/useTaskManager";
export default function AddTask() {
  const { newTask, setNewTask, newPriority, setNewPriority, addTask } = useTaskManager();
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select
        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={newPriority}
        onChange={(e) => setNewPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        onClick={addTask}
      >
        <Plus size={18} className="mr-1" /> Add
      </button>
    </div>
  );
}
