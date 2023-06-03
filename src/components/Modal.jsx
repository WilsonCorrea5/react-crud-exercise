export const Modal = ({ showModal, onClose, deleteTask, task }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-25 backdrop-blur-lg flex justify-center items-center">
      {showModal && (
        <div className="w-[500px] bg-gray-600 py-2 px-4 rounded flex flex-col">
          <button
            onClick={() => onClose()}
            className="text-white text-xl place-self-end hover:bg-red-500 px-2 rounded"
          >
            X
          </button>
          <div>
            <p>Estas seguro que deseas eliminar esta tarea?</p>
          </div>
          <div>
            <button
              className="bg-red-600 hover:bg-red-500 py-1 px-2 m-2 rounded"
              onClick={() => deleteTask(task)}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
