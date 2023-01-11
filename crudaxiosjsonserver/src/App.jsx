import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Listing from './Components/Listing'
import EmpCreate from './Components/EmpCreate';
import EmpDetail from './Components/EmpDetail';
import EmpEdit from './Components/EmpEdit';
function App() {
  return (
    <>
      <h1>React Crud Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />}>
            <Route path='/list/create' element={<EmpCreate />}></Route>
            <Route path='/list/detail/:empid' element={<EmpDetail />}></Route>
            <Route path='/list/edit/:empid' element={<EmpEdit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App
