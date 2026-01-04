import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state);

  this.setState({
    name: '',
    email: '',
    title: '',
    department: ''
  });
};
  render() {
    return (
      <div>
        <h2>New Employee</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Job Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Department:
            <input
              type="text"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
