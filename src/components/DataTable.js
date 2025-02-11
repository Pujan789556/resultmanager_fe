import '../styles/dataTable.css';

export function DataTable({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.selector}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.selector}>{row[column.selector]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
