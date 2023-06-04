import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export const TaskForm = () => {
  const { addTask, updateTask, state } = useContext(GlobalContext);
  const navigate = useNavigate();
  const param = useParams();
  const initialTask = {
    id: "",
    title: "",
    description: "",
    done: false,
  };
  const [task, setTask] = useState(initialTask);

  const handleChange = ({ target }) => {
    setTask({
      ...task,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim().length <= 0) return;
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate("/");
  };

  useEffect(() => {
    const taskFound = state.find((task) => task.id === +param.id);
    console.log(taskFound);
    if (taskFound) {
      setTask(taskFound);
    } else {
      setTask(initialTask);
    }
  }, [state, param.id]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-700 p-10  rounded">
        <h2 className="mb-7 text-2xl">{task.id ? "Edit Task" : "Add Task"}</h2>
        <div className="mb-5">
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Write a title"
            value={task.title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-500 w-full rounded"
          />
        </div>
        <div className="mb-5">
          <textarea
            onChange={handleChange}
            name="description"
            rows="2"
            placeholder="Write a description"
            value={task.description}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-500 w-full rounded"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5 rounded"
        >
          {task.id ? "Edit " : "Create"} Task
        </button>
      </form>
    </div>
  );
};
