import React, { useState } from 'react'
import "./style.css"
import {
    createTable,
    useTableInstance,
    getCoreRowModel
} from '@tanstack/react-table'
import student from '../../studentdata.json'
import { Button } from '@mui/material';
import download from 'downloadjs'


const table = createTable();
console.log(table);
const defaultData = [...student]

const defaultColumn = [

    table.createGroup({
        header: "Full Name",
        columns: [
            table.createDataColumn("firstName", {
                id: "First Name"
            }),
            table.createDataColumn("middleName", {
                id: "Middle Name"
            }),


        ]
    }),
    table.createDataColumn("age", {
        header: "Age",
        id: "Age"
    }),
    table.createGroup({
        header: "Phone Number",
        columns: [
            table.createDataColumn((row) => row.phone[1], {
                id: "Phone Number 1"
            }),
            table.createDataColumn((row) => row.phone[2], {
                id: "Phone Number 2"
            }),

        ]
    }),
    table.createDataColumn("email", {
        id: "E-mail Address"
    }),
    table.createGroup({
        header: "Full Address",
        columns: [
            table.createDataColumn((row) => row.address.street, {
                id: "Street"
            }),
            table.createDataColumn((row) => row.address.city, {
                id: "City"
            }),
            table.createDataColumn((row) => row.address.state, {
                id: "Address"
            }),
            table.createDataColumn((row) => row.address.pincode, {
                id: "Pincode"
            }),

        ]
    }),
    table.createGroup({
        header: "Date Details",
        columns: [
            table.createDataColumn("date_of_birth", {
                id: "Date of Birth",
                cell: (props) => new Date(props.getValue()).toDateString(),
            }),
            table.createDataColumn("date_of_admission", {
                id: "Addmission",
                cell: (props) => new Date(props.getValue()).toDateString()
            }),


        ]
    }),
    table.createDisplayColumn({
        id: "Action",

        cell: (props) => {

            return <DownlodDetails row={props.row} />
        }
    })

];

const DownlodDetails = ({ row }) => {
    const data = row.getAllCells().map((cell) => cell.getValue());
    const onClickHandler = () => {
        download(
            data.join("\n"),
            `${data[0]}_${data[1]}_${data[2]}.txt`,
            "text/plain"
        );
    }
    console.log(data)
    return <Button onClick={onClickHandler} className='btn'>Download Details</Button>
}

const DisplayColumn = () => {
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
            <table border={1} >
                <thead>
                    {instance.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {
                                headerGroup.headers.map((header) => (
                                    <th key={header.id} colSpan={header.colSpan} >
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
                                        <td key={cell.id}>
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

export default DisplayColumn
