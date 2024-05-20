import { Link } from 'react-router-dom';
import clinicaImage from '../assets/clinica.jpeg';

function Home() {
  return (
    <div className="container">
      <h2>Bienvenido a Medical Audicion</h2>
      <img src={clinicaImage} alt="Clínica" className="clinica-image" />
      <p>Ofrecemos servicios de diagnóstico y tratamiento de problemas auditivos.</p>
      <button>
        <Link to="/solicitar-cita">Solicitar Cita</Link>
      </button>
      <div className="card-container">
        <div className="card">
          <h3>Evaluación Auditiva</h3>
          <p>Realizamos evaluaciones auditivas completas para diagnosticar problemas de audición.</p>
        </div>
        <div className="card">
          <h3>Tratamiento Personalizado</h3>
          <p>Ofrecemos tratamientos personalizados para mejorar tu calidad de vida auditiva.</p>
        </div>
        <div className="card">
          <h3>Equipos de Última Generación</h3>
          <p>Contamos con equipos de última generación para un diagnóstico y tratamiento precisos.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
