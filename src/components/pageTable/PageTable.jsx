import React, { useState } from 'react'
import './mystyle.css'
import {
    createTable,
    useTableInstance,
    getCoreRowModel
} from '@tanstack/react-table'
import student from '../../Data.json'

const table = createTable();
console.log(table);
const defaultData = [...student]

const defaultColumn = [
    table.createDataColumn("id", {
        id: "id",
        header: "S.No"
    }),
    table.createDataColumn("name", {
        id: "name",
        header: "FUll NAME",
        cell: (props) => props.getValue().toUpperCase()
    }),
    table.createDataColumn("email", {
        id: "email",
        header: "E-MAIL ADDRESS"
    }),
    table.createDataColumn("phone", {
        id: "phone",
        header: "PHONE NUMBER"
    }),
    table.createDataColumn("age", {
        id: "age",
        header: "AGE"
    }),
    table.createDataColumn("date_of_birth", {
        id: "date_of_birth",
        header: "DOB",
        cell: (props) => new Date(props.getValue()).toDateString()
    }),
    table.createDataColumn("section", {
        id: "section",
        header: "SECTION"
    }),
    table.createDataColumn("standard", {
        id: "standard",
        header: "CLASS"
    }),
    table.createDataColumn((row) => `${row.address.street},${row.address.city},${row.address.state}`, {
        id: "address",
        header: "ADDRESS"
    }),
    table.createDataColumn((row) => row.address.pincode, {
        id: "pincode",
        header: "PINCODE"
    }),
]

const PageTable = () => {
    const [data, setData] = useState([...defaultData]);
    const [columns, setColumns] = useState([...defaultColumn])


    const instance = useTableInstance(table, {
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });
    console.log(instance.getRowModel());
    return (
        <div>
            <table border={1} className='Table'>
                <thead>
                    {instance.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} >
                            {
                                headerGroup.headers.map((header) => (
                                    <th key={header.id} className='th'>
                                        {header.isPlaceholder ? null : header.renderHeader()}
                                    </th>
                                ))
                            }
                        </tr>
                    ))}

                </thead>
                <tbody>
                    {
                        instance.getRowModel() && instance.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {
                                    row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className='td'>
                                            {cell.renderCell()}
                                        </td>
                                    ))
                                }

                            </tr>
                        ))
                    }
                </tbody>
                {/* <tfoot>
                    {instance.getFooterGroups().map((footerGroup) => (
                        <tr key={footerGroup.id}>
                            {
                                footerGroup.headers.map((header) => (
                                    <th key={header.id} >
                                        {header.isPlaceholder ? null : header.renderFooter()}
                                    </th>
                                ))
                            }
                        </tr>
                    ))}

                </tfoot> */}
            </table>
        </div>
    )
}

export default PageTable
