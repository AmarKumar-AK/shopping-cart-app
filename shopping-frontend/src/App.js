import './App.css';
import { RouterProvider } from "react-router-dom";
import router from './config/route';
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";
import Navbar from './components/molecule/Navbar';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navbar />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
