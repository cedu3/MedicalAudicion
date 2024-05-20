import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SolicitarCita from './pages/SolicitarCita';
import ConsultarCitas from './pages/ConsultarCitas';
import LoginMedico from './pages/LoginMedico';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/solicitar-cita">Solicitar Cita</Link>
            </li>
            <li>
              <Link to="/consultar-citas">Consultar Citas</Link>
            </li>
            <li className="right">
              <Link to="/login-medico">Ingreso Médicos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/solicitar-cita" element={<SolicitarCita />} />
          <Route path="/consultar-citas" element={<ConsultarCitas />} />
          <Route path="/login-medico" element={<LoginMedico />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
