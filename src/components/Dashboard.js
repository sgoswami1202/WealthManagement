import React, { Component } from "react";
import UserDetail from "./User/UserDetail";
import { connect } from "react-redux";
import { getUsers } from "../actions/projectActions";
import userReducers from "../reducers/userReducers";
import { PropTypes } from "prop-types";
import AddUser from "./User/AddUser";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.user;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">
                Existing Investor's Details
              </h1>
              <br />
              {users.map((user) => (
                <UserDetail key={user.id} user={user} />
              ))}
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.protoType = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(Dashboard);
