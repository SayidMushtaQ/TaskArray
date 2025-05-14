import React, { useState } from "react";
import { tasksData } from "../data/dummyTasks";
export default function useTaskManager() {
  const [tasks] = useState(tasksData);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("Medium");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
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
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "active") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return {
    tasks,
    newTask,
    setNewTask,
    newPriority,
    setNewPriority,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    addTask,
    removeTask,
    toggleComplete,
    movePriorityUp,
    movePriorityDown,
    filteredTasks,
  };
}
