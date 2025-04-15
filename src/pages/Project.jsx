import React from 'react';
import '../styles/CustomJumbotron.css'; // Opcional para estilos adicionales


const Project = () => {
  return (
    <div className="content-pagex">
      <h2>Project</h2>

    <div className="container mt-5">
      {/* Jumbotron principal */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">App Móvil de Finanzas Personales </h1>
          <h3>(C#, .NET MAUI, SQLite, MVVM)</h3>
          <p className="col-md-8 fs-4">
          Aplicación para llevar el control de ingresos y gastos. Utiliza una arquitectura MVVM con una base de datos SQLite 
          para almacenar las transacciones. Se incluyó un análisis de datos con Power BI en una versión extendida del proyecto.
          </p>
          <button className="btn btn-primary btn-lg" type="button">Information</button>
        </div>
      </div>

      {/* Sección Cambiando el fondo */}
      <div className="row align-items-md-stretch mb-4">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Automatización con ESP32</h2>
            <p>
            Desarrollo de portafolio personal con navegación por secciones: About Me, Education, Experience, Projects y Contact. 
            Estilo moderno con diseño responsivo. Componentes organizados y modularizados.
            </p>
            <button className="btn btn-outline-light" type="button">Information</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Página Web para Tienda de Telefonía (ASP.NET Core)</h2>
            <p>
            Proyecto de sitio web con estructura para tienda de telefonía. Manejo de productos, control de inventario, 
            y diseño con plantillas modernas. Documentación técnica incluida para mantenimiento a largo plazo.
            </p>
            <button className="btn btn-outline-secondary" type="button">Information</button>
          </div>
        </div>
      </div>


    </div>
    </div>
  );
};

export default Project;