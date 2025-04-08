import React from 'react';
import Foto from '../images/Brayan.JPEG'; 

const About = () => {
  return (
    <div className="content-page" style={{border: '6px inset #5AB1D2'}}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',gap: '40px', maxWidth: '1200px', margin: '0',}}> 
          <h1>About Me</h1>
        <div style={{ display: "flex", alignItems: "rigth", gap: "20px" }}>
          <div style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden"}}>
            <img src={Foto} alt="Brayan Cota" style={{ width: "100%", height: "100%", objectFit: "cover"}}/>
          </div>
        </div>
      </div>

      <p style = {{textAlign: 'justify' , padding: 12, fontSize: 18, lineHeight: '1.7'}}>
        Soy estudiante de Ingeniería en Sistemas Computacionales en el Tecnológico Nacional de México, campus Nogales. Me apasiona la programación y actualmente estoy enfocado en el desarrollo web utilizando tecnologías como C#, ASP.NET Core y React. También tengo experiencia con bases de datos SQL Server, análisis de datos con Power BI y el desarrollo de apps móviles con .NET MAUI. Disfruto llevar ideas a proyectos reales, combinando lógica, diseño y funcionalidad. Además, estoy aprendiendo Rust y explorando nuevas tecnologías como la automatización con bots y la integración de APIs.
        <br/>
        <br/>
        Fuera del ámbito académico, trabajo un negocio de telefonía llamado Celular Total y soy practicante de sistemas en Maaster Lock. Me interesa el emprendimiento, la eficiencia y el desarrollo de soluciones útiles tanto para mi entorno laboral como personal. Entreno de forma constante y tengo metas claras en cuanto a salud y productividad. También me interesa el mundo de la perfumería y disfruto temas de tendencia y tecnología. Siempre busco seguir aprendiendo, creando y mejorando.
      </p>

    </div>
  );
};

export default About;