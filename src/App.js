import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  
    return (
      <>
      <Router>
      <div>
        <NavBar/>
        <LoadingBar color='red' progress={progress}/>
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category='general' country='in'/>} />
        <Route exact path="business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category='business' country='in'/>} />
        <Route exact path="entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category='entertainment' country='in'/>} />
        <Route exact path="general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category='general' country='in'/>} />
        <Route exact path="health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category='health' country='in'/>} />
        <Route exact path="science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category='science' country='in'/>} />
        <Route exact path="sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category='sports' country='in'/>} />
        <Route exact path="technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category='technology' country='in'/>} />
        </Routes>
        
      </div>
      </Router>
      </>
    )

}

export default App



