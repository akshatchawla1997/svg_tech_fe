import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Ui/Layout/Layout'; // Assuming Layout is a default export
import AboutUs from './component/Ui/about/AboutUs';
import HomePage from './component/Ui/HomePage/HomePage';
import BlogSection from './component/Ui/BlogSection/BlogSection';
import LoginComponent from './component/Ui/authentication/Login';
import RegisterComponent from './component/Ui/authentication/Register';
import ContactUs from './component/Ui/contact-us/ContactUs';
import WorkWithUsForm from './component/Ui/workwithus/WorkWithUs';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='blogs' element={<BlogSection/>}/>
        <Route path='login' element={<LoginComponent/>}/>
        <Route path='register' element={<RegisterComponent/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='work-with-us' element={<WorkWithUsForm/>}/>
      </Route>
    </Routes>
  );
}

export default App;
