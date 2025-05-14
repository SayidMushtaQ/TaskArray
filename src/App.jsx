import { useState } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown, CheckCircle, Circle, Search } from 'lucide-react';

export default function TaskScheduler() {
  // This is just mock data for UI display purposes
  const [tasks] = useState([
    { id: 1, title: "Complete project proposal", priority: "High", completed: false },
    { id: 2, title: "Schedule team meeting", priority: "Medium", completed: false },
    { id: 3, title: "Review documentation", priority: "Low", completed: true },
    { id: 4, title: "Prepare presentation slides", priority: "High", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("Medium");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Note: These functions are placeholders for UI demonstration only
  const addTask = () => {
    console.log("Add task function would be implemented here");
  };

  const removeTask = (id) => {
    console.log(`Remove task ${id} function would be implemented here`);
  };

  const toggleComplete = (id) => {
    console.log(`Toggle completion for task ${id} would be implemented here`);
  };

  const movePriorityUp = (id) => {
    console.log(`Increase priority for task ${id} would be implemented here`);
  };

  const movePriorityDown = (id) => {
    console.log(`Decrease priority for task ${id} would be implemented here`);
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  }).filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Scheduler</h1>
      
      {/* Add Task Form */}
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

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <button 
            className={`px-3 py-1 rounded-lg ${filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-3 py-1 rounded-lg ${filter === 'active' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={`px-3 py-1 rounded-lg ${filter === 'completed' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No tasks found.</p>
        ) : (
          filteredTasks.map(task => (
            <div 
              key={task.id} 
              className={`p-4 border rounded-lg flex items-center gap-3 ${task.completed ? 'bg-gray-50' : 'bg-white'}`}
            >
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? (
                  <CheckCircle size={20} className="text-green-500" />
                ) : (
                  <Circle size={20} className="text-gray-400" />
                )}
              </button>
              <div className="flex-1">
                <p className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {task.title}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-lg text-xs font-medium ${priorityColor(task.priority)}`}>
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
      
      {/* Stats Summary */}
      <div className="mt-6 pt-4 border-t flex justify-between text-sm text-gray-500">
        <span>{tasks.filter(t => !t.completed).length} active tasks</span>
        <span>{tasks.filter(t => t.completed).length} completed</span>
        <span>{tasks.length} total</span>
      </div>
    </div>
  );
}
