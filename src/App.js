import './App.css';



import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/news/News';
//import Loading from './components/Loading'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        
        {/* <Loading/> */}
        <Routes>
        <Route path="/business" element={<News pageSize={6} category={"business"}></News>}/>
        <Route path="/technology" element={<News pageSize={6} category={"technology"}></News>}/>
        <Route path="/general" element={<News pageSize={6} category={"general"}></News>}/>
        <Route path="/" element={<News pageSize={6} category={"general"}></News>}/>
        <Route path="/sports" element={<News pageSize={6} category={"sports"}></News>}/>
        <Route path="/health" element={<News pageSize={6} category={"health"}></News>}/>
        <Route path="/entertainment" element={<News pageSize={6} category={"entertainment"}></News>}/>
        </Routes>
      </div>
    )
  }
}

