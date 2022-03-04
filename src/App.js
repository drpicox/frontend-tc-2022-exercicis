import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import llista from "./pages/llista";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {llista.map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
