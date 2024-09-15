import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Ui/Layout/Layout'; // Assuming Layout is a default export
import AboutUs from './component/Ui/about/AboutUs';
import HomePage from './component/Ui/HomePage/HomePage';
import BlogSection from './component/Ui/BlogSection/BlogSection';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='blogs' element={<BlogSection/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;
