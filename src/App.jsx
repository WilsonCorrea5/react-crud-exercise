import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Heading, TaskForm, TaskList } from "./components";
import { GlobalProvider } from "./context/GlobalProvider";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <GlobalProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </GlobalProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
