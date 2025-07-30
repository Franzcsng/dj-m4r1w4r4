import {
  Route, 
  BrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  createBrowserRouter,
  NavLink
} from 'react-router-dom';
import logo from './logo.svg';
import './css/App.scss';
import MainLayout  from './pages/main-layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Route>)
);


function App() {
  return <RouterProvider router={router}/>
}

export default App;
