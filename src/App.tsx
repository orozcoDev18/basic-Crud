import { useState, useEffect } from 'react';
import './App.css'
import DataTable from './components/grid'
import NestedModal from './components/modal';
import { Container } from './components/container';

interface Row {
  id: number;
  name: string;
}

function App() {
  const [rows, setRows] = useState<Row[]>([]);  // Estado para almacenar las filas
  const [loading, setLoading] = useState<boolean>(true);  // Estado de carga
  const [error, setError] = useState<string>('');  // Estado de error

  useEffect(() => {
    // Consumir la API de JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setRows(data);  // Guardar los datos en el estado
        setLoading(false);  // Finalizar la carga
      })
      .catch((err) => {
        setError('Error al cargar los datos');
        console.log(err)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (rows.length === 0) {
    return <p>No hay registros para mostrar</p>;
  }

  const addNewRow = (name: string) => {
    const newRow = {
      id: rows.length + 1,
      name: name,
    };

    // Usar un enfoque inmutable para actualizar el estado
    setRows((rows) => [...rows, newRow]);
  };

  return (
    <Container>
      <NestedModal buttonText='Registrar' addNewRow={addNewRow} />
      <DataTable rows={rows} />
    </Container>
  );
};

export default App
