import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Error404 from "./pages/Error404";
import Home from "./pages/Dasboard/home";
import OrderUpload from "./pages/Dasboard/OrderUpload";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="uploadFile" element={<OrderUpload />}></Route>
        </Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
