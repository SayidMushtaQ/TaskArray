import React from "react";
import { Search } from "lucide-react";
import { useTaskManager}  from "../hooks/useTaskManager";
export default function SearchAndFilter() {
  const { searchQuery, setSearchQuery, filter, setFilter } = useTaskManager();
  return (
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
          className={`px-3 py-1 rounded-lg ${
            filter === "all"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-lg ${
            filter === "active"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`px-3 py-1 rounded-lg ${
            filter === "completed"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
