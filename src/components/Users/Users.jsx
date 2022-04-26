import React from "react";

class Users extends React.Component {
  state = {
    usersData: [],
  };

  getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ usersData: data });
  };

  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>city</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {/* [tr,tr] */}

            {this.state.usersData.length ? (
              this.state.usersData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.address.city}</td>
                  <td>{user.phone}</td>
                </tr>
              ))
            ) : (
              <p>loading...</p>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Users;
