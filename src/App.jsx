<<<<<<< HEAD
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/page/HomePage";
import MemoPage from "./components/page/MemoPage";
import SchedulePage from "./components/page/SchedulePage";
import MemoDetail from "./components/memo/MemoDetail";

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/memo" element={<MemoPage/>} />
      <Route path="/memo/detail/:m_no" exact={true} element={<MemoDetail/>} />
      <Route path="/schedule" element={<SchedulePage/>} />
    </Routes>
  </>
  );
=======
import "./App.css";

function App() {
  return <div className="App">Hello React????18.2</div>;
>>>>>>> 6d2ef25fc31fa8f49357f813c7de6ec3ae1148d2
}

export default App;
