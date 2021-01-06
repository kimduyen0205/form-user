import React, { Component } from "react";

class ResultForm extends Component {
  render() {
    const { username, email, gender, place } = this.props;
    return (
      <div className="container-content">
        <h3>Thông tin đã nhập</h3>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Place:</strong> {place}
        </p>
      </div>
    );
  }
}

export default ResultForm;
