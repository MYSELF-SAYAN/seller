
import './App.css';
import Home from "./Pages/Home"
import Property from './Pages/Property';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </div>
  );
}

export default App;
