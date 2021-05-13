import React, { Component } from "react";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm"
import EmployeeCard from "./components/EmployeeCard";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import API from "./utils/API";
import TableRow from "./components/TableRow";
import "./App.css";

class App extends Component {
  // Setting this.state.employees and this.state.filteredEmployees to empty array
  state = {
    employees: [],
    filteredEmployees: [],
    order: "descend"
  };

  handleSort = heading => {
    console.log(heading)
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }
    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  }

  handleNameSearch = event => {
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(item => {
      // filter by first and last name
      let firstName = Object.values(item)[1].first.toLowerCase();
      let lastName = Object.values(item)[1].last.toLowerCase();

      return firstName.includes(filter.toLowerCase()) || lastName.includes(filter.toLowerCase());
    });
    this.setState({ filteredEmployees: filteredList });
  }

  handleIdSearch = event => {
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(item => {
      // filter by employee id
      let id = `${Object.values(item)[9].value.split("-")[0]}-${Object.values(item)[9].value.split("-")[1]}`
      console.log(id);

      return id.includes(filter);
    });
    this.setState({ filteredEmployees: filteredList });
  }

  // When component mounts, call search users function
  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results
        })
      })
      .catch(err => console.log(err));
  }

  // Map over this.state.filteredEmployees and render an EmployeeCard component for each employee object
  render() {
    return (
      <Container fluid>
        <Title>DEVerest Employee Directory</Title>
        <Row>
          <Col size="lg-4">
            <SearchForm
              handleNameSearch={this.handleNameSearch}
              handleIdSearch={this.handleIdSearch}
            />
          </Col>
          <Col size="lg-8">
            <table className="table table-sm">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col" className="hide-col">Emp ID</th>
                  <th scope="col" className="hide-col">Email</th>
                  <th scope="col">Ext</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredEmployees.map((employee, id) => (
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
