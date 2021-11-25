import './App.css';
import DashBoard from './components/DashBoard';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ViewDetails from './components/ViewDetails';

function App() {
  return (
    <>
      
      <Router>

        <Routes>
          <Route exact path="/" element={<DashBoard/>}   />
          <Route  exact path="/view/:id"  element={<ViewDetails/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
