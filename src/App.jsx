
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/page/HomePage";
import MemoPage from "./components/page/MemoPage";
import SchedulePage from "./components/page/SchedulePage";
import MemoDetail from "./components/memo/MemoDetail";
import TentPage from "./components/page/TentPage";

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/memo" element={<MemoPage/>} />
      <Route path="/memo/detail/:m_no" exact={true} element={<MemoDetail/>} />
      <Route path="/schedule" element={<SchedulePage/>} />
      <Route path="/tent" exact={true} element={<TentPage/>} />
    </Routes>
  </>
  );
  }

export default App;
