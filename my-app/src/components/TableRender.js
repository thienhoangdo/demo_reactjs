import React, { useEffect, useState }  from "react";
import styled from 'styled-components'
import { useTable } from 'react-table'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`


function TableRender(){
    const navigate = useNavigate();
    const [data, setData] = useState([]);
      function getEvents() {
        axios.get("http://localhost:5000/")
            .then(response => response.data)
            .then((data) => {
                setData(data)
            });
      }
      useEffect(()=>{
          getEvents();
      },[])
      
      const columns = [
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
      ];
      function onClickRow(row){
        navigate('/customer-detail');
      }
      function Table({ columns, data }) {
        // Use the state and functions returned from useTable to build your UI
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        } = useTable({
          columns,
          data,
        })
        return ( 
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td onClick={ () => onClickRow(row) } {...cell.getCellProps()}>{cell.render('Cell')}
                       
                      </td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        );
      }
      
    return(
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
        
    
    );
}

export default TableRender;