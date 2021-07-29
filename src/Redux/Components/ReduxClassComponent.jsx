import React, { Component } from "react";
import { connect } from "react-redux";

class SagaClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange = (e) => {
    this.setState({ data: e.target.value });
  };

  handleClick = () => {
    if (this.state.data) {
      this.props.getSingleUserData(this.state.data);
    } else {
      this.props.getAllUsersData();
    }
  };

  render() {
    return (
      <div className="form-group">
        <div className="form-row">
          <span style={{fontSize:"20px"}}>Class Component</span>
        </div>

        <input
          id="input"
          className="form-control"
          onChange={this.handleChange}
        />
        <button
          id="button"
          className="btn btn-secondary"
          onClick={this.handleClick}
        >
          Submit
        </button>
        <div className="form-row" >
          <span className="pl-55">{this.state.data}</span>
        </div>
        {this.props.singleUSerData && (
            <div className="form-row">
              <span>{this.props.singleUSerData.name}</span>
              <span>{this.props.singleUSerData.url}</span>
            </div>
          )}
          {this.props.allUserData &&
            this.props.allUserData.map((x) => {
              return (
                <>
                  <div className="form-row">
                    <span>{x.id} </span>
                    <span> {x.login}</span>
                  </div>
                  <div className="form-row">
                    <span> {x.url}</span>
                  </div>
                </>
              );
            })}
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getSingleUserData: (data) => {
      dispatch({
        type: "GETDATASINGLEUSER",
        payload: data,
      });
    },
    getAllUsersData: () => {
      dispatch({
        type: "GETDATAALLUSERS",
      });
    },
  };
};

export const mapStateToProps = (state) => {
  return {
    singleUSerData: state.user.data,
    allUserData: state.user.allUserData,
    loading: state.user.loading,
  };
};

let ReduxClassComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SagaClassComponent);

export { ReduxClassComponent };
