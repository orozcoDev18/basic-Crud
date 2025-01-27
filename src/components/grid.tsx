import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Definir la estructura de los datos que recibirá el componente
interface Row {
    id?: number;
    name?: string;
    age?: number;
    country?: string;
}

interface DataTableProps {
    rows: Row[];
}

const DataTable: React.FC<DataTableProps> = ({ rows }) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: '20px', width: '30%', height: '50vh', margin: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
