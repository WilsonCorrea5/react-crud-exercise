import { useReducer } from "react";
import { GlobalContext } from "./GlobalContext";
import { globalReducer } from "./globalReducer";

export const GlobalProvider = ({ children }) => {
  const tasks = [
    {
      id: 1,
      title: "title 1",
      description: "desc 1",
      done: false,
    },
    {
      id: 2,
      title: "title 2",
      description: "desc 2",
      done: false,
    },
  ];

  const [state, dispatch] = useReducer(globalReducer, tasks);

  const addTask = (task) => {
    dispatch({
      type: "ADD",
      payload: { ...task, id: new Date().getTime() + 20 },
    });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateTask = (task) => {
    dispatch({ type: "UPDATE", payload: task });
  };

  const toggleTask = (id) => {
    console.log(id);
    dispatch({ type: "TOGGLE", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{ state, addTask, updateTask, deleteTask, toggleTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
