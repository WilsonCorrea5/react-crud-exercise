import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";
import { Modal } from "./Modal";

export const TaskList = () => {
  const { state, deleteTask, toggleTask } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [taskId, setTaskId] = useState("");

  const newDeleteTask = () => {
    deleteTask(taskId);
    setShowModal(false);
    setTaskId("");
  };
  const handleClose = () => {
    setShowModal(false);
    setTaskId("");
  };

  return (
    <div className="flex justify-center">
      <div className="w-auto">
        {state.map((task) => (
          <div
            key={task.id}
            className="bg-gray-500 px-8 py-5 text-white shadow-2xl mb-4  rounded"
          >
            <div>
              <div className="flex flex-col items-center mb-5">
                <h1 className="font-bold">{task.title}</h1>
                <p className="italic">{task.description}</p>
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="bg-green-600 hover:bg-green-500 py-1 px-2 m-2 rounded"
                >
                  {task.done ? "Done" : "Undone"}
                </button>
                <Link
                  to={`/edit/${task.id}`}
                  className="bg-gray-700 hover:bg-gray-600 py-1 px-2 m-2 rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() => {
                    setTaskId(task.id);
                    setShowModal(true);
                  }}
                  className="bg-red-600 hover:bg-red-500 py-1 px-2 m-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {taskId && (
        <Modal
          onClose={handleClose}
          showModal={showModal}
          deleteTask={newDeleteTask}
          task={taskId}
        ></Modal>
      )}
    </div>
  );
};
