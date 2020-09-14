import React from "react";
import EmployeeList from "./EmployeeList";

const App = () => {
  return (
    <>
      <section data-cy='header'>
        <h1>Employee List</h1>
        <EmployeeList/>
      </section>
    </>
  );
};

export default App;
