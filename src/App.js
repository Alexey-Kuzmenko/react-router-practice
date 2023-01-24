import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Layout } from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import Cars from './components/Cars/Cars';
import AboutPage from "./components/AboutPage/AboutPage";
import SingleAppPage from './components/SingleAppPage/SingleAppPage';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';
import Course from './components/Courses/Course/Course';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* localhost: 3000 */}
          <Route index element={<HomePage />} />
          <Route path='/cars' element={<Cars />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="about/:category/:title" element={<SingleAppPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseSlug" element={<Course />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
