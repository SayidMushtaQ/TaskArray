import React from "react";
import { priorityColor } from "../utils/priorityColor";
import { Trash2, ArrowUp, ArrowDown, CheckCircle, Circle } from "lucide-react";
import useTaskManager from "../hooks/useTaskManager";
export default function TasksList() {
  const {
    filteredTasks,
    removeTask,
    toggleComplete,
    movePriorityUp,
    movePriorityDown,
  } = useTaskManager();
  return (
    <div className="space-y-3">
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 border rounded-lg flex items-center gap-3 ${
              task.completed ? "bg-gray-50" : "bg-white"
            }`}
          >
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <Circle size={20} className="text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <p
                className={`${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {task.title}
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded-lg text-xs font-medium ${priorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
            <div className="flex gap-1">
              <button
                className="p-1 text-gray-400 hover:text-blue-500"
                onClick={() => movePriorityUp(task.id)}
              >
                <ArrowUp size={16} />
              </button>
              <button
                className="p-1 text-gray-400 hover:text-blue-500"
                onClick={() => movePriorityDown(task.id)}
              >
                <ArrowDown size={16} />
              </button>
              <button
                className="p-1 text-gray-400 hover:text-red-500"
                onClick={() => removeTask(task.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
