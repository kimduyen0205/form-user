import React from "react";
import ResultForm from "./component/ResultForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateUserName = this.updateUserName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.handleChooseChange = this.handleChooseChange.bind(this);
    this.state = {
      username: "",
      email: "",
      gender: "",
      place: "",
    };
  }

  updateUserName(e) {
    this.setState({ username: e.target.value });
  }
  updateEmail(e) {
    this.setState({ email: e.target.value });
  }
  onRadioChange(e) {
    this.setState({ gender: e.target.value });
  }
  handleChooseChange(e) {
    this.setState({ place: e.target.value });
  }
  render() {
    const { username, email, gender, place } = this.state;
    return (
      <div>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-25">
                <label>Username:</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  required
                  onChange={this.updateUserName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Email:</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  onChange={this.updateEmail}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Gender:</label>
              </div>
              <div className="col-75">
                <input
                  name="gender"
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={this.onRadioChange}
                />
                Male &nbsp;
                <input
                  name="gender"
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={this.onRadioChange}
                />
                Female
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Country</label>
              </div>
              <div className="col-75">
                <select value={place} onChange={this.handleChooseChange}>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="viet nam">Việt Nam</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <ResultForm
          username={username}
          email={email}
          gender={gender}
          place={place}
        />
      </div>
    );
  }
}
export default App;
