import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Components/About/About';
// import Services from './Pages/Services/Services';
import Blog from '../Components/Blog/Blog';
// import FAQ from './Pages/FAQ/FAQ';
// import Contact from './Pages/Contact/Contact';
import Error from '../Pages/ErrorPage/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;