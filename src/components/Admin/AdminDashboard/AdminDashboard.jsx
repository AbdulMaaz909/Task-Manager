"use client";
import { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput || !assignedTo) return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      assignedTo,
      status: "Pending",
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
    setAssignedTo("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="flex-1">
      {/* Navbar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Welcome Back, Admin 👋</h2>
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
          <span className="font-medium">Admin</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg duration-200">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold mt-2">1,245</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg duration-200">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-3xl font-bold mt-2">$8,530</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg duration-200">
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <p className="text-3xl font-bold mt-2">312</p>
          </div>
        </div>

        {/* Task Management */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-4">📝 Assign Tasks</h3>

          {/* Task Form */}
          <form
            onSubmit={handleAddTask}
            className="flex flex-col md:flex-row gap-3 mb-6"
          >
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Enter task title"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Assign to (username)"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              <PlusCircle size={20} /> Add Task
            </button>
          </form>

          {/* Task List */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Assigned Tasks</h4>
            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks assigned yet.</p>
            ) : (
              <ul className="space-y-3">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex justify-between items-center p-3 border rounded-lg hover:shadow"
                  >
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-gray-500">
                        Assigned to: {task.assignedTo} | Status:{" "}
                        <span className="text-yellow-600">{task.status}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
export default AdminDashboard;