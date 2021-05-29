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
        Cell: (cell: any) => {
          let index = Number(cell.row.id) + 1;
          return (
            <div
              style={
                index === tableData.length
                  ? { fontWeight: 'bold', backgroundColor: 'orange' }
                  : {}
              }
            >
              {cell.value}
            </div>
          );
        },
        // <div style={{ fontWeight: 'bold' }}>cell.rows[rows.length - 1]</div>
      },
      {
        Header: 'VALUE 1',
        accessor: 'value1',
        Cell: (cell: any) => {
          let index = Number(cell.row.id) + 1;
          return (
            <div
              style={index === tableData.length ? { fontWeight: 'bold' } : {}}
            >
              {cell.value}
            </div>
          );
        },
      },
      {
        Header: 'VALUE 2',
        accessor: 'value2',
        Cell: (cell: any) => {
          let index = Number(cell.row.id) + 1;
          return (
            <div
              style={index === tableData.length ? { fontWeight: 'bold' } : {}}
            >
              {cell.value}
            </div>
          );
        },
      },
      {
        Header: 'VALUE 3',
        accessor: 'value3',
        Cell: (cell: any) => {
          let index = Number(cell.row.id) + 1;
          return (
            <div
              style={index === tableData.length ? { fontWeight: 'bold' } : {}}
            >
              {cell.value + '%'}
            </div>
          );
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
