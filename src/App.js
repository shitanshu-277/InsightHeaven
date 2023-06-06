import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App =()=> {
  const apiKey=process.env.REACT_APP_NEW_API
  const[progress,setProgress]=useState(0)
    return (
      
      <Router>
        <div>
        <LoadingBar
      height={5}
        color='#f11946'
        progress={progress}
      />   
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKeys={apiKey} key="general" pageSize={15} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKeys={apiKey} key="business" pageSize={15} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKeys={apiKey} key="entertainment" pageSize={15} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKeys={apiKey} key="general" pageSize={15} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKeys={apiKey} key="health" pageSize={15} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKeys={apiKey} key="science" pageSize={15} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKeys={apiKey} key="sports" pageSize={15} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKeys={apiKey} key="technology" pageSize={15} country="in" category="technology"/>}/>
        </Routes>
      </div>
      </Router>
    )
}

export default App; 