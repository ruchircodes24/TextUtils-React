import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const displayAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      displayAlert('Light Mode has been enabled', 'success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(24 50 69)';
      document.body.style.color = 'white';
      displayAlert('Dark Mode has been enabled', 'success');
    }
  }

  return (
    <>
      <Router>
        <Navbar title = "TextUtils" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className='container my-3'/>
        <Routes>
          <Route
            exact path="/"
            element={<TextForm heading="Enter Text to Analyse" displayAlert={displayAlert} />}
          />
          <Route exact path="/about" element={<About mode = {mode}/>} />
        </Routes>
      </Router>
     
    </>
      );
    }

export default App;
