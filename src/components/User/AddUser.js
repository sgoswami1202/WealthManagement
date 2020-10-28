import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../../actions/projectActions";
import classnames from "classnames";

class AddUser extends Component {
  constructor() {
    super();

    this.state = {
      fName: "",
      lName: "",
      age: "",
      income: "",
      expenses: "",
      savings: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //lifecycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      fName: this.state.fName,
      lName: this.state.lName,
      age: this.state.age,
      income: this.state.income,
      expenses: this.state.expenses,
      savings: this.state.savings,
    };
    this.props.createUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h8 className="display-4 text-center">
                  Create / Edit Investor's Info
                </h8>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.fName,
                      })}
                      placeholder="First Name"
                      name="fName"
                      value={this.state.fName}
                      onChange={this.onChange}
                    />
                    <p>{errors.fName}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Last Name"
                      name="lName"
                      value={this.state.lName}
                      onChange={this.onChange}
                    />
                    <p>{errors.lName}</p>
                    <div />
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Age in number of years"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChange}
                      />
                      <p>{errors.age}</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Monthly Income"
                      name="income"
                      value={this.state.income}
                      onChange={this.onChange}
                    />
                    <p>{errors.income}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Monthly Expenditure"
                      name="expenses"
                      value={this.state.expenses}
                      onChange={this.onChange}
                    />
                    <p>{errors.expenses}</p>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Monthly Savings"
                      name="savings"
                      value={this.state.savings}
                      onChange={this.onChange}
                    />
                    <p>{errors.savings}</p>
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddUser.propTypes = {
  createUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createUser })(AddUser);
