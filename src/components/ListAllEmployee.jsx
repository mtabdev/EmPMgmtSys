import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListAllEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        EmployeeService.getAllEmployees().then((res) => {
            this.setState({ employees: res.data });
            // console.log(res.data);
        })
    }
    render() {
        return (
            <div className='row'>
                <table className='table table-dark table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th>
                                S.No
                            </th>
                            <th>
                                FirstName
                            </th>
                            <th>
                                LastName
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.employees.map(emp => (
                            <tr key={emp.employeeId}>
                                <td>{emp.employeeId}</td>
                                <td>{emp.employeeFirstName}</td>
                                <td>{emp.employeeLastName}</td>
                                <td>{emp.employeeEmail}</td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
