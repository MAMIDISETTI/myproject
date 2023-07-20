import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./Components/LoginForm";
import RegistratinForm from "./Components/RegistratinForm";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/registration" element={<RegistratinForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
