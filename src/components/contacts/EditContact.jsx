import axios from "axios";
import React, { Component } from "react";
//import { v4 as uuidv4 } from "uuid";
import { Consumer } from "../../Context";
import Inputgroups from "../layout/Inputgroups";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount(){
      const { id } = this.props.match.params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      const contact = res.data;
      this.setState({
          name:contact.name,
          email:contact.email,
          phone:contact.phone
      });
  }

  //   onNameChange = (e) => this.setState({name:e.target.value});
  //   onEmailChange = (e) => this.setState({email:e.target.value});
  //   onPhoneChange = (e) => this.setState({email:e.target.value});

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const updateContact = {
        name,
        email,
        phone
    }

    const { id } = this.props.match.params;

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);
    dispatch({type:'UPDATE_CONTACT', payload: res.data})

    //checking Error required field
    if (name === "") {
      this.setState({ error: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ error: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ error: { phone: "Phone is required" } });
      return;
    }

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });
    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Conatct</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <Inputgroups
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <Inputgroups
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <Inputgroups
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Edit Contact"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditContact;
