import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCourse from "./Pages/Dashboard/AddCourse";
import AddLessons from "./Pages/Dashboard/AddLessons";
import ManageCourses from "./Pages/Dashboard/ManageCourses";
import EditCourse from "./Pages/Dashboard/EditCourse";
import EditLesson from "./Pages/Dashboard/EditLesson";
import Register from "./Pages/Account/Register";
import Login from "./Pages/Account/Login";
import Spinner from "./Components/Spinner";
import { SpinnerProvider, useSpinner } from "./Context/SpinnerContext.js";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Context/AuthContext.js";
import { useEffect } from "react";
import axios from "axios";
import { CoursesProvider, useCourses } from "./Context/CoursesContext.js";
import ScrollToTop from "./Components/ScrollToTop.js";

const SpinnerWrapper = () => {
  const { loading } = useSpinner();
  return loading ? <Spinner /> : null;
};

function AppContent() {
  const { setLoading } = useSpinner();
  const { setCourses } = useCourses();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/courses/");
        setCourses(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [setCourses, setLoading]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/add-lesson" element={<AddLessons />} />
        <Route path="/admin/manage-courses" element={<ManageCourses />} />
        <Route path="/admin/edit-course/:id" element={<EditCourse />} />
        <Route path="/admin/edit-lesson/:id" element={<EditLesson />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <SpinnerWrapper />
    </>
  );
}

function App() {
  return (
    <SpinnerProvider>
      <AuthProvider>
        <CoursesProvider>
          <BrowserRouter>
            <ScrollToTop/>
            <AppContent />
          </BrowserRouter>
        </CoursesProvider>
      </AuthProvider>
      <ToastContainer position="top-right" autoClose={2000} />
    </SpinnerProvider>
  );
}

export default App;
