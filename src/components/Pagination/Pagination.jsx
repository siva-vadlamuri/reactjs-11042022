import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    usersData: [],
    pageNumber: 0,
  };

  getDummyUsersData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    this.setState({ usersData: data.data });
  };

  componentDidMount() {
    this.getDummyUsersData();
  }

  render() {
    return (
      <div>
        {this.state.usersData.length ? (
          <div>
            <div className="container mt-4">
              <div className="row">
                {this.state.usersData.map((user) => (
                  <div className="col-md-6 mt-3">
                    <p>{user.firstName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
