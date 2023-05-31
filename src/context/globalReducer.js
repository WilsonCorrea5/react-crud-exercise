export const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.filter((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
        }
        return task;
      });

    case "DELETE":
      return state.filter((task) => task.id !== action.payload);

    case "TOGGLE":
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );

    default:
      return state;
  }
};
