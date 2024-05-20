import { useState } from 'react';

function ConsultarCitas() {
  const [dni, setDni] = useState('');
  const [citas, setCitas] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Solo es una simulación de una consulta de citas, usar 12345678
    if (dni === '12345678') {
      setCitas([
        { id: 1, fecha: '2024-06-01', hora: '10:00', doctor: 'Dr. Pérez' },
        { id: 2, fecha: '2024-06-15', hora: '14:00', doctor: 'Dra. López' },
      ]);
      setError('');
    } else {
      setCitas([]);
      setError('No se encontraron citas para el DNI ingresado.');
    }
  };

  return (
    <div className="container">
      <h2>Consultar Citas Programadas</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <button type="submit">Consultar</button>
      </form>
      {error && <p>{error}</p>}
      {citas.length > 0 && (
        <div>
          <h3>Citas Programadas</h3>
          <ul>
            {citas.map((cita) => (
              <li key={cita.id}>
                {cita.fecha} a las {cita.hora} con {cita.doctor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConsultarCitas;
