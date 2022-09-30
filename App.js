import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/ContactUs';
import StudentList from './Components/Students';
import { AddStudents } from './Components/Student2';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/studentlist/AddStudents' element={<AddStudents />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
