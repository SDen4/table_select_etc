import React, { useMemo } from 'react';
import { useTable } from 'react-table';

import { TableProps } from './types';

import './Table.module.css';

const Table: React.FC<TableProps> = ({ tableData }) => {
  const GROUP_COLUMNS: Array<any> = useMemo(
    () => [
      {
        Header: 'Bank',
        accessor: 'title',
      },
      { Header: 'VALUE 1', accessor: 'value1' },
      { Header: 'VALUE 2', accessor: 'value2' },
      {
        Header: 'VALUE 3',
        accessor: 'value3',
        Cell: (cell: any) => {
          console.log(cell.rows[rows.length - 1].cells); // Массив последней строки
          return cell.value + '%';
        },
      },
    ],
    [],
  );

  const columns = useMemo(() => GROUP_COLUMNS, [GROUP_COLUMNS]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps([])}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
