import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm"
import EmployeeCard from "./components/EmployeeCard";
// import Container from "./components/Container";
// import Row from "./Row";
// import Col from "./Col";
import employeeTitles from "./employeesTitles.json"
import API from "./utils/API";

let people;
let employeeInfo = [];

class App extends Component {
  // Setting this.state.employees to empty array
  state = {
    employees: [],
    employeeTitles
  };

  componentDidMount() {
    this.searchUsers();
  }

  searchUsers = () => {
    API.search()
      .then(res => {
        people = res.data.results
        console.log("people")
        console.log(people)
        console.log("Employee Titles")
        console.log(employeeTitles)
        Array.prototype.push.apply(employeeTitles, people)
        console.log("Employee Info")
        console.log(employeeTitles)

        this.setState({ employees: res.data.results })
      })
      .catch(err => console.log(err));
  };

  // Map over this.state.employees and render an EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>DEVerest Employee Directory</Title>
        {/* <Row>
          <Col size="md-4"> */}
            <SearchForm />
          {/* </Col> */}
          {/* <Col size="md-8"> */}
            {this.state.employees.map((employee, id) => (
              <EmployeeCard
                id={id}
                key={id}
                employeeId={`${employee.id.value.split("-")[0]}-${employee.id.value.split("-")[1]}`}
                firstName={employee.name.first}
                lastName={employee.name.last}
                image={employee.picture.large}
                title={employeeTitles.title}
                location={employee.timezone}
                email={employee.email}
                extension={employee.phone.split("-")[2]}
              />
            ))}
          {/* </Col>
        </Row> */}
      </Wrapper>
    );
  }
}

export default App;
