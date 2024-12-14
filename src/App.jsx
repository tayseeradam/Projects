import { BroswerRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" elemnte={<Home/>}/>
        <Route path=" login" elemnte={<Login/>}/>
        <Route path="*" elemnte={< NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
