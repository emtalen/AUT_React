import React, { Component } from "react";
import axios from "axios";
import { Card, Image, Container } from "semantic-ui-react";

class EmployeeList extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.fetchEmployeeData();
  }

  async fetchEmployeeData() {
    let employeeData = await axios.get(
      "https://reqres.in/api/users?per_page=10"
    );
    this.setState({ employees: employeeData.data.data });
  }
  render() {
    let employeeList = this.state.employees.map((employee) => {
      return (
        <Card data-cy="list" key={employee.id}>
          <Image src={employee.avatar} wrapped ui={true} />
          <Card.Content>
            <Card.Header>{`${employee.first_name} ${employee.last_name}`}</Card.Header>
            <Card.Description>{employee.email}</Card.Description>
          </Card.Content>
        </Card>
      );
    });

    return (
      <Container data-cy="main-container">
        <Card.Group stackable={true} itemsPerRow='four'>
          {employeeList}
        </Card.Group>
      </Container>
    );
  }
}

export default EmployeeList;
