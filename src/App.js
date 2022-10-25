// import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
