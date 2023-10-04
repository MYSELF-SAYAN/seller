
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Page from './Pages/Page';
function App() {
  const val=false;
  return (
    
    <div className="App">
         <Routes>
        <Route path="/pages/:pageno" element={<Page />} />
        <Route path="/*" element={<Navigate to="/pages/1" />} />
      </Routes>
    </div>
  );
}

export default App;
