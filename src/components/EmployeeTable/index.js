import React from 'react';
import TableRow from "../TableRow";

export default function EmployeeTable(props) {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Emp ID</th>
                    <th scope="col">Extension</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                {props.map((employee, id) => (
                    <TableRow
                        id={id}
                        key={id}
                        employeeId={`${employee.id.value.split("-")[0]}-${employee.id.value.split("-")[1]}`}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        image={employee.picture.large}
                        email={employee.email}
                        extension={employee.phone.split("-")[2]}
                    />
                ))}

            </tbody>
        </table>
    )
}
