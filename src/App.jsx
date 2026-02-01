import { useState } from 'react'
import './App.css'
import Welcome from './Welcome' 

function App() {
  return (
    <div className="app-container">
      <h1>Thông tin sinh viên</h1>
      
      {}
      <Welcome 
        name="Thái Nguyên"
        studentClass="26.SP.IT3"
        age="18"
        hobby="Tiền" 
      />
    </div>
  )
}

export default App