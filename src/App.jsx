import {useTaskManager} from "./hooks/useTaskManager";
import AddTask from "./components/AddTask";
import SearchAndFilter from "./components/SearchAndFilter";
import TasksList from "./components/TasksList";

export default function TaskScheduler() {
  const { tasks } = useTaskManager();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-stretch">
      <div className="min-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg border">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Task Scheduler
        </h1>
        {/* Add Task Form */}
        <AddTask />
        {/* Search and Filter */}
        <SearchAndFilter />
        {/* Tasks List */}
        <TasksList />

        {/* Stats Summary */}
        <div className="mt-6 pt-4 border-t flex justify-between text-sm text-gray-500">
          <span>{tasks.filter((t) => !t.completed).length} active tasks</span>
          <span>{tasks.filter((t) => t.completed).length} completed</span>
          <span>{tasks.length} total</span>
        </div>
      </div>
    </div>
  );
}
