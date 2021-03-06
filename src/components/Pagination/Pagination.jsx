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

  handleButtonClick = (num) => {
    this.setState({ pageNumber: num });
  };

  // when the component is update if you want to make a API call

  componentDidMount() {
    this.getDummyUsersData();
  }

  componentDidUpdate(prevsProps, prevsState) {
    // When the state or props is updated (componentDidMount Will be called)
    // why infinite loop of making API calls
    // update straergy
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.getDummyUsersData();
    }
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
                    <div className="card p-5">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            className="img-fluid"
                            src={user.picture}
                            alt=""
                          />
                        </div>
                        <div className="col-md-8">
                          <div>
                            <p>Id : {user.id}</p>
                            <strong>
                              {user.title} {user.firstName} {user.lastName}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                className="btn btn-info ml-2"
                onClick={() => {
                  this.handleButtonClick(num);
                }}
              >
                {num}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <img
              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
              alt="loader"
            />
          </div>
        )}
      </div>
    );
  }
}
