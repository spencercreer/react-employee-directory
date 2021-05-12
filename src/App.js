import React, { Component } from "react";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm"
import EmployeeCard from "./components/EmployeeCard";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import API from "./utils/API";

class App extends Component {
  // Setting this.state.employees and this.state.filteredEmployees to empty array
  state = {
    employees: [],
    filteredEmployees: []
  };

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
          <Col size="md-4">
            <SearchForm
              handleNameSearch={this.handleNameSearch}
              handleIdSearch={this.handleIdSearch}
            />
          </Col>
          <Col size="md-8">
            {this.state.filteredEmployees.map((employee, id) => (
              <EmployeeCard
                id={id}
                key={id}
                employeeId={`${employee.id.value.split("-")[0]}-${employee.id.value.split("-")[1]}`}
                firstName={employee.name.first}
                lastName={employee.name.last}
                image={employee.picture.large}
                location={employee.timezone}
                email={employee.email}
                extension={employee.phone.split("-")[2]}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
