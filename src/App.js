import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
