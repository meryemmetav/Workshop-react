import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbare from "./components/Navbare";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Patients from "./pages/Patients";
import Test from "./pages/Test";
import Settings from "./pages/Settings";
import Settings_password from "./pages/Settings_password";
import Settings_email from "./pages/Settings_email";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbare />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/test" element={<Test />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings_password" element={<Settings_password />} />
          <Route path="/settings_email" element={<Settings_email />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
