import React from 'react'
import "./style.css"

export default function TableRow(props) {
    return (
        <tr>
            <th scope="row">
                <img className="card-img" alt={props.name} src={props.image} style={{ maxWidth: "200px" }} />
            </th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td className="hide-col">{props.employeeId}</td>
            <td className="hide-col">{props.title}</td>
            <td className="hide-col"><a href={`mailto:${props.email[0]}.${props.email.split(/[.@]/gi)[1]}@deverest.com`} target="_blank">{`${props.email[0]}.${props.email.split(/[.@]/gi)[1]}@deverest.com`}</a></td>
            <td><a href={`tel:555-555-${props.extension}`}>{props.extension}</a></td>
        </tr>
    )
}
