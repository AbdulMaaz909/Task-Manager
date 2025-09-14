"use client";
import { useState } from "react";
import { CheckCircle, Clock, Loader } from "lucide-react";

function UserDashboard() {
  // Dummy tasks (normally this would come from backend API)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Submit project report", assignedTo: "Abdul", status: "Pending" },
    { id: 2, title: "Fix dashboard bug", assignedTo: "Abdul", status: "In Progress" },
  ]);

  const handleStatusChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Pending"
                  ? "In Progress"
                  : task.status === "In Progress"
                  ? "Completed"
                  : "Completed",
            }
          : task
      )
    );
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navbar */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Welcome Back 👋</h2>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full border"
            />
            <span className="font-medium">Abdul</span>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg duration-200">
            <h3 className="text-lg font-semibold">Tasks Assigned</h3>
            <p className="text-3xl font-bold mt-2">{tasks.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg duration-200">
            <h3 className="text-lg font-semibold">Completed</h3>
            <p className="text-3xl font-bold mt-2">
              {tasks.filter((t) => t.status === "Completed").length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg duration-200">
            <h3 className="text-lg font-semibold">In Progress</h3>
            <p className="text-3xl font-bold mt-2">
              {tasks.filter((t) => t.status === "In Progress").length}
            </p>
          </div>
        </div>

        {/* Task List */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">📌 My Tasks</h3>
          <div className="bg-white rounded-xl shadow p-4">
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
                        Status:{" "}
                        <span
                          className={`${
                            task.status === "Pending"
                              ? "text-yellow-600"
                              : task.status === "In Progress"
                              ? "text-blue-600"
                              : "text-green-600"
                          } font-medium`}
                        >
                          {task.status}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => handleStatusChange(task.id)}
                      className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition"
                    >
                      {task.status === "Pending" && <Clock size={18} />}
                      {task.status === "In Progress" && <Loader size={18} />}
                      {task.status === "Completed" && <CheckCircle size={18} />}
                      {task.status === "Completed" ? "Completed" : "Update"}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserDashboard;
