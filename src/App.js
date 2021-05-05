import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";


class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees: []
  };

  componentDidMount() {
    this.searchUsers();
  }
  
  searchUsers = () => {
    API.search()
    // .then(res =>console.log(res.data.results))
    .then(res => this.setState({ employees: res.data.results }))
    .catch(err => console.log(err));
  };
  
  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map((employee, id) => (
          <EmployeeCard
            id={id}
            key={id}
            firstName={employee.name.first}
            lastName={employee.name.last}
            image={employee.picture.large}
            occupation={employee.timezone}
            location={employee.timezone}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
