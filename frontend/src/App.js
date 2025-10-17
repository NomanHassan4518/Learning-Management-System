import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import Courses from './Pages/Courses';
import CourseDetail from './Pages/CourseDetail';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddCourse from './Pages/Dashboard/AddCourse';
import AddLessons from './Pages/Dashboard/AddLessons';
import ManageCourses from './Pages/Dashboard/ManageCourses';
import EditCourse from './Pages/Dashboard/EditCourse';
import EditLesson from './Pages/Dashboard/EditLesson';
import Register from './Pages/Account/Register';
import Login from './Pages/Account/Login';
import Spinner from './Components/Spinner';
import { useSpinner } from './Context/SpinnerContext.js';

const SpinnerWrapper = () => {
  const { loading } = useSpinner();
  return loading ? <Spinner /> : null;
};

function App() {
  return (
    <BrowserRouter>
      <SpinnerWrapper />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin/add-course' element={<AddCourse />} />
        <Route path='/admin/add-lesson' element={<AddLessons />} />
        <Route path='/admin/manage-courses' element={<ManageCourses />} />
        <Route path='/admin/edit-course/:id' element={<EditCourse />} />
        <Route path='/admin/edit-lesson/:id' element={<EditLesson />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
