// src/components/Sidebar.js
import { NavLink } from 'react-router-dom';
import { IoIosBookmarks , IoIosPerson, IoMdAlert, IoMdTrophy, IoIosPaper } from "react-icons/io";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Brayan Cota</h1>
        <p>Estudiante de Ingeniería en Sistemas</p>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/about" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> <IoMdAlert /> About Me </NavLink>
        <NavLink to="/education" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> <IoIosBookmarks/> Education </NavLink>
        <NavLink to="/experience" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> <IoMdTrophy />Experience </NavLink>
        <NavLink to="/project" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> <IoIosPaper />Project </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> <IoIosPerson/>Contact </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <p>PORTOFOLIO 2025</p>
      </div>
    </div>
  );
};

export default Sidebar;