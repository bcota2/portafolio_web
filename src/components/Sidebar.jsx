// src/components/Sidebar.js
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Brayan Cota</h1>
        <p>Estudiante de Ingeniería en Sistemas</p>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/about" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> About Me </NavLink>
        <NavLink to="/education" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> Education </NavLink>
        <NavLink to="/experience" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> Experience </NavLink>
        <NavLink to="/project" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> Project </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}> Contact </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <p>PORTOFOLIO 2025</p>
      </div>
    </div>
  );
};

export default Sidebar;