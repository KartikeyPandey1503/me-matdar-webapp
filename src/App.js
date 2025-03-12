import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SetMediaMessage from "./components/SetMediaMessage";
import Settings from "./components/Settings";
import AutocallMessage from "./components/AutocallMessage";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Shareapp from "./components/Shareapp";
import Register from "./components/Register";
import CorporateUser from "./components/CorporateUser";
import SingleUser from "./components/SingleUser";
import BlockNumber from "./components/BlockNumber";
import ProtectedRoute from "./components/ProtectedRoute";
import DailyBanner from "./components/DailyBanner";  // ✅ Import the new component

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}></Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/page3" element={<AutocallMessage />} />
      <Route path="/page4" element={<SetMediaMessage />} />
      <Route path="/page5" element={<Settings />} />
      <Route path="/page7" element={<ContactUs />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Login />} />
      <Route path="/shareapp" element={<Shareapp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/singleuser" element={<SingleUser />} />
      <Route path="/corporateuser" element={<CorporateUser />} />
      <Route path="/blocknumber" element={<BlockNumber />} />
      <Route path="/dailybanner" element={<DailyBanner />} />  {/* ✅ Add the new route */}
    </Routes>
  );
}

export default App;
